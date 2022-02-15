import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DummyService } from 'src/app/services/dummy.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public dateToday: string = null;
  public featuredMovies: any;
  public featuredMoviesLoading: boolean = true;
  public movieCatsLoaded: boolean = false;
  public movieCats: any = [];
  public ticketedEventsLoaded: boolean = false;
  public ticketedEvents: any = [];
  private l_strg: any = null;
  images;
  sports;
  animals;
  genrens;
  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts2 = {
    slidesPerView: 4,
  };

  slideOpts3 = {
    slidesPerView: 2,
  };

  mainSlider = [
    'assets/imgs/landscape_imgs/1.jpg',
    'assets/imgs/landscape_imgs/2.jpg',
    'assets/imgs/landscape_imgs/3.jpg',
    'assets/imgs/landscape_imgs/4.jpg',
    'assets/imgs/landscape_imgs/5.png',
  ];
  
  constructor(private dataService: DataService,
              private apiService: ApiService,
              private dummy: DummyService,
              private router: Router
  ) {
    this.dateToday = this.dataService.dateToday;
    let l_strg = this.apiService.getEndpoints();
    this.l_strg = l_strg.local_storage;

    this.images = this.dummy.images;
    this.sports = this.dummy.sports;
    this.animals = this.dummy.animal;
    this.genrens = this.dummy.genrens;
  }

  async ngOnInit() {
    await this.checkFeaturedMovies();
    await this.checkMovieCategories();
    await this.getTicketedEvents();
  }

  goToMovie(movie) {
    this.router.navigate(['/view-movie/'+movie.urlify], {state:{data:movie}});
  }

  goToEvent(evnt) {
    this.router.navigate(['/view-event/'+evnt.slug], {state:{data:evnt}});
  }

  goTovideoList(val) {

    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/video-list'], navData);
  }

  goToCatList(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/category-list'] , navData);
  }

  goToCatogory(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };
    this.router.navigate(['/category'] , navData);
  }

  async checkFeaturedMovies(){
    let featuredMoviesStore = localStorage.getItem(this.l_strg.movies.featured);
    // console.log('Featured movies in local ?',featuredMoviesStore);
    if(featuredMoviesStore){
        let featuredMoviesData = JSON.parse(featuredMoviesStore);
        // console.log('Parsed Featured Movies >',featuredMoviesData);
        if (Object.keys(featuredMoviesData.featured_movies).length == 0 || featuredMoviesData.date != this.dateToday){
          await this.getFeaturedMovies();
        }else{
          this.featuredMovies = featuredMoviesData.featured_movies;
          // console.log('this.featuredMovies before >',this.featuredMovies);
          
          this.featuredMovies.forEach((movie:any) => {
            let genres = [];
            if(movie.api_data != null){
              // console.log('Raw Movie >',movie);
              // console.log('Raw Genres >',movie.api_data.genres);
              if(Array.isArray(movie.api_data.genres)){
                for(let i = 0; i < movie.api_data.genres.length; i++){
                  if(i < 4){
                    genres.push(movie.api_data.genres[i].name);
                  }
                }
                movie.genres = genres.join(' | ');
              }else{
                movie.genres = '-';
              }
              movie.movie_poster = (movie.api_data.poster_path != null ? 'https://image.tmdb.org/t/p/w342' + movie.api_data.poster_path : 'https://www.kenyabuzz.com/public' + movie.customposter);
            }else{
              movie.movie_poster = 'https://www.kenyabuzz.com/public' + movie.customposter;
            }
          });
          this.featuredMoviesLoading = false;
          console.log('this.featuredMovies after >',this.featuredMovies);
        }
    }else{
        // console.log('No Featured Movies in local, calling function...');
        this.getFeaturedMovies();
    }
  }

  async getFeaturedMovies(){
    // fetch the movie details
    let endpoints: any = this.apiService.getEndpoints();
    await this.apiService.get(endpoints.movies.featured_movies).subscribe(
      response => {
        if ('data' in response) {
          // console.log('featured movies resp >',response);
          if(Array.isArray(response.data)){ // featured movies from local storage
            this.featuredMovies = response.data;
            this.featuredMovies.forEach(movie => {
              if(movie.api_data != null){
                if(Array.isArray(movie.api_data.genres)){
                  let genres = [];
                  for(let i = 0; i < movie.api_data.genres.length; i++){
                    if(i < 4){
                      genres.push(movie.api_data.genres[i].name);
                    }
                  }
                  movie.genres = genres.join(' | ');
                }else{
                  movie.genres = '-';
                }
                movie.movie_poster = (movie.api_data.poster_path != null ? 'https://image.tmdb.org/t/p/w342' + movie.api_data.poster_path : 'https://image.tmdb.org/t/p/w342');
              }else{
                movie.movie_poster = 'https://www.kenyabuzz.com/public' + movie.customposter;
                movie.genres = (movie.genre ? movie.genre : '-');
              }
            });
            // console.log('this.featuredMovies complete >',this.featuredMovies);
          }
        }else{
          console.log('Featured Movies Error Response >',response);
        }
      },
      error => { console.log('Featured Movies Err >', error); }
    );
  }

  async checkMovieCategories(){
    /* check local storage first or default to api */
    let movieCatsStore = localStorage.getItem(this.l_strg.movies.movie_cats);
    if(movieCatsStore){

        try {
          let catsData = JSON.parse(movieCatsStore);
          if (Object.keys(catsData.movie_categories).length == 0 || catsData.date != this.dateToday){
            /* call api */ await this.getMovieCategories();
          }else{
            this.movieCats = catsData.movie_categories;
            this.movieCatsLoaded = true;
          }
        } catch(e) {
          console.log('Error Parsing JSON. Fetching afresh...',e);
          await this.getMovieCategories();
        }
        
    }else{
        /* default to api */ await this.getMovieCategories();
    }
    
  }

  async getMovieCategories(){
    await this.dataService.returnMovieCategories().subscribe((resp :any) => {

      if(resp.response == "success"){
        if('data' in resp){
          this.movieCats = []; // clear it for fresh data
          
          let movieCatsPayload = {
            date: this.dateToday,
            movie_categories: resp.data
          }
  
          this.movieCats = resp.data;
          this.movieCatsLoaded = true;
          
          /* save to local storage */
          localStorage.setItem(this.l_strg.events.featured, JSON.stringify(movieCatsPayload));
        }
      }
        
    });
  }

  async getTicketedEvents(){
    await this.dataService.returnTicketedEvents().subscribe((resp :any) => {

      if(resp.response == "success"){
        if('data' in resp){
          this.ticketedEvents = []; // clear it for fresh data
  
          this.ticketedEvents = resp.data;
          this.ticketedEvents.forEach((event:any) => {
            event.poster = (event.poster ? 'https://www.kenyabuzz.com/public'+event.poster : null);
            event.start_date = (event.start_date ? this.dataService.readableDate(event.start_date) : null);
          });
          this.ticketedEventsLoaded = true;
        }
      }
        
    });
  }

}
