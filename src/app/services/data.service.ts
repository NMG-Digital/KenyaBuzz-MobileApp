import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dateNow: Date = new Date();
  public dateToday: string = null;

  constructor(private apiService: ApiService,
              private datePipe: DatePipe,
            )
  {
    this.dateToday = this.datePipe.transform(this.dateNow, 'yyyy-MM-dd');
  }

  rot13(str:string) {
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let encoded = '';
    for (let i=0; i < str.length; i++) {
        let index = input.indexOf(str[i]);
        encoded += output[index];
    }
    return encoded;
  }

  ROTn(text:string, map:string) {
    // Generic ROT-n algorithm for keycodes in MAP.
    var R = new String()
    var i, j, c, len = map.length
    for(i = 0; i < text.length; i++) {
      c = text.charAt(i)
      j = map.indexOf(c)
      if (j >= 0) {
        c = map.charAt((j + len / 2) % len)
      }
      R = R + c
    }
    return R;
  }

  rot47(text:string) {
    // Hides all ASCII-characters from 33 ("!") to 126 ("~").  Hence can be used
    // to obfuscate virtually any text, including URLs and emails.
    var R = new String()
    R = this.ROTn(text,"!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~")
    return R;
  }

  readableDate(date: string){
    if(date){
      let datesTimeArr = date.split(' ');
    
      let datesArr = datesTimeArr[0].split('-');
      let year = datesArr[0];
      let month = parseInt(datesArr[1]);
      let day = parseInt(datesArr[2]);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let theDay = (day > 3 ? day+'th' : (day == 1 ? day+'st' : (day == 2 ? day+'nd' : day+'rd')));
      let theDate = theDay + ' ' + months[month - 1];
      let fullDate = theDate + ', ' + year;

      if(datesTimeArr.length > 1){
          let timeArr = datesTimeArr[1].split(':');
          let hour = parseInt(timeArr[0]);
          let postfix = (hour > 12 ? 'PM' : 'AM');
          hour = (hour > 12 ? hour-12 : hour);
          let minutes = timeArr[1];
          fullDate = fullDate + ' at ' + hour + ':' + minutes + postfix;
      }
      return fullDate;
    }else{
      return date
    }
  }

  readableTime(time: string){
    if(time){
      let timeArr = time.split(':');
      let hour = parseInt(timeArr[0]);
      let postfix = (hour > 12 ? 'PM' : 'AM');
      hour = (hour > 12 ? hour-12 : hour);
      let minutes = timeArr[1];
      let fullTime = hour + ':' + minutes + postfix;
      return fullTime;
    }else{
      return time
    }
  }

  async checkStat() {
    // check if today's data exists in all sections
    let l_strg = this.apiService.getEndpoints();
    
      // check featured movies
      let feturedMvsStore = localStorage.getItem(l_strg.local_storage.movies.featured);
      if(feturedMvsStore){
        let featuredMoviesData = JSON.parse(feturedMvsStore);
        if (Object.keys(featuredMoviesData.featured_movies).length == 0 || featuredMoviesData.date != this.dateToday){
          await this.fetchFeaturedMovies();
        }
      }else{
        await this.fetchFeaturedMovies();
      }

      // check coming soon movies
      let comeSoonMvsStore = localStorage.getItem(l_strg.local_storage.movies.coming_soon);
      if(comeSoonMvsStore){
        let SoonMoviesData = JSON.parse(comeSoonMvsStore);
        if (Object.keys(SoonMoviesData.coming_soon_movies).length == 0 || SoonMoviesData.date != this.dateToday){
          await this.fetchComingSoonMovies();
        }
      }else{
        await this.fetchComingSoonMovies();
      }

      // check now showing movies
      let showingMvsStore = localStorage.getItem(l_strg.local_storage.movies.now_showing);
      if(showingMvsStore){
        let showingMoviesData = JSON.parse(showingMvsStore);
        if (Object.keys(showingMoviesData.now_showing_movies).length == 0 || showingMoviesData.date != this.dateToday){
          await this.fetchNowShowingMovies();
        }
      }else{
        await this.fetchNowShowingMovies();
      }

      // check all movies
      let allMvsStore = localStorage.getItem(l_strg.local_storage.movies.all);
      if(allMvsStore){
        let allMoviesData = JSON.parse(allMvsStore);
        if (Object.keys(allMoviesData.all_movies).length == 0 || allMoviesData.date != this.dateToday){
          await this.fetchallMovies();
        }
      }else{
        await this.fetchallMovies();
      }

      // check featured events
      let ftrdEvntsStore = localStorage.getItem(l_strg.local_storage.events.featured);
      if(ftrdEvntsStore){
        let ftrdEvntsData = JSON.parse(ftrdEvntsStore);
        if (Object.keys(ftrdEvntsData.featured_events).length == 0 || ftrdEvntsData.date != this.dateToday){
          await this.fetchFeaturedEvents();
        }
      }else{
        await this.fetchFeaturedEvents();
      }

      // check home page events
      let hmeEvntsStore = localStorage.getItem(l_strg.local_storage.events.home);
      if(hmeEvntsStore){
        let hmeEvntsData = JSON.parse(hmeEvntsStore);
        if (Object.keys(hmeEvntsData.home_events).length == 0 || hmeEvntsData.date != this.dateToday){
          await this.fetchHomeEvents();
        }
      }else{
        await this.fetchHomeEvents();
      }

      // check all events
      let allEvntsStore = localStorage.getItem(l_strg.local_storage.events.all);
      if(allEvntsStore){
        let allEvntsData = JSON.parse(allEvntsStore);
        if (Object.keys(allEvntsData.all_events).length == 0 || allEvntsData.date != this.dateToday){
          await this.fetchAllEvents();
        }
      }else{
        await this.fetchAllEvents();
      }

      // check cinemas
      let cinemasStore = localStorage.getItem(l_strg.local_storage.cinemas);
      if(cinemasStore){
        let cinemasData = JSON.parse(cinemasStore);
        if (Object.keys(cinemasData.cinemas).length == 0 || cinemasData.date != this.dateToday){
          await this.fetchCinemas();
        }
      }else{
        await this.fetchCinemas();
      }

  }

  returnMovieCategories(): Observable<any>{
    // return movie categories
    let endpoint: string = this.apiService.getEndpoints().movies.movie_categories;
    return this.apiService.get(endpoint);
  }

  fetchallMovies():any {
    // fetch all movies, limit to 30 (old data doesn't help much)
    let endpoints: any = this.apiService.getEndpoints();
    this.apiService.get(endpoints.movies.all_movies).subscribe(
      response => {
        
        if ('data' in response) {
          // console.log('dataSvc - ALL MOVIES RESP >', response.data);
          
          let allMvs = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
          let l_strg = this.apiService.getEndpoints();
          let allMovies = {
            date: this.dateToday,
            all_movies: allMvs
          }
          
          localStorage.setItem(l_strg.local_storage.movies.all, JSON.stringify(allMovies));
          
        }
        
      },
      error => { console.log('All Movies Err >', error); }
    );
  }

  fetchComingSoonMovies():any {
    // fetch the coming soon movies
    let endpoints: any = this.apiService.getEndpoints();
    this.apiService.get(endpoints.movies.coming_soon).subscribe(
      response => {
        
        if ('data' in response) {
          // console.log('dataSvc - COMING SOON RESP >', response.data);
          
          let cSoon = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
          let l_strg = this.apiService.getEndpoints();
          let comingSoonMovies = {
            date: this.dateToday,
            coming_soon_movies: cSoon
          }
          
          localStorage.setItem(l_strg.local_storage.movies.coming_soon, JSON.stringify(comingSoonMovies));
          
        }
        
      },
      error => { console.log('Coming Soon Err >', error); }
    );
  }

  returnComingSoonMovies(): Observable<any>{
    // return coming soon movies
    let endpoint: any = this.apiService.getEndpoints();
    return this.apiService.get(endpoint.movies.coming_soon);
  }

  fetchNowShowingMovies():any {
    // fetch the now showing movies
    let endpoints: any = this.apiService.getEndpoints();
    this.apiService.get(endpoints.movies.now_showing).subscribe(
      response => {
        
        if ('data' in response) {
          // console.log('dataSvc - NOW SHOWING RESP >', response.data);
          
          let nShowing = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
          let l_strg = this.apiService.getEndpoints();
          let nowShowingMovies = {
            date: this.dateToday,
            now_showing_movies: nShowing
          }

          localStorage.setItem(l_strg.local_storage.movies.now_showing, JSON.stringify(nowShowingMovies));
          
        }
        
      },
      error => { console.log('Now Showing Err >', error); }
    );
  }

  returnNowShowingMovies(): Observable<any>{
    // return now showing movies
    let endpoint: any = this.apiService.getEndpoints();
    return this.apiService.get(endpoint.movies.now_showing);
  }

  fetchFeaturedMovies():any {
    // fetch the featured movies
    let featuredMovies:any = {};
    let endpoints: any = this.apiService.getEndpoints();
    let featuredMoviesResp = this.apiService.get(endpoints.movies.featured_movies).subscribe(
      response => {
        
        if ('data' in response) {
          // console.log('dataSvc - FEATURED RESP >', response.data);
          
          let featured = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
          let l_strg = this.apiService.getEndpoints();
          featuredMovies.date = this.dateToday;
          featuredMovies.featured_movies = featured;

          localStorage.setItem(l_strg.local_storage.movies.featured, JSON.stringify(featuredMovies));
          return featuredMovies;
          
        }
        
      },
      error => { console.log('Featured Movies Err >', error); return featuredMovies; }
    );
    return Promise.resolve(featuredMoviesResp);
    
  }

  returnTicketedEvents(): Observable<any>{
    // return movie categories
    let endpoint: string = this.apiService.getEndpoints().events.ticketed_events;
    return this.apiService.get(endpoint);
  }

  fetchHomeEvents():any {
    // fetch events for the home slider
    let endpoints: any = this.apiService.getEndpoints();
    this.apiService.get(endpoints.events.home_events).subscribe(
      response => {
        
        if ('data' in response) {
          // console.log('dataSvc - HOME EVENTS RESP >', response.data);
          
          let hmEvents = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
          let l_strg = this.apiService.getEndpoints();
          let homeEvents = {
            date: this.dateToday,
            home_events: hmEvents
          }
          
          localStorage.setItem(l_strg.local_storage.events.home, JSON.stringify(homeEvents));
          
        }
        
      },
      error => { console.log('Home Events Err >', error); }
    );
  }

  fetchFeaturedEvents():any {
    // fetch the featured events
    let endpoints: any = this.apiService.getEndpoints();
    this.apiService.get(endpoints.events.featured_events).subscribe(
      response => {

        if(response){
          if ('data' in response) {
            // console.log('dataSvc - FEATURED EVENTS RESP >', response.data);
            
            let featured = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
            let l_strg = this.apiService.getEndpoints();
            let featuredeEvents = {
              date: this.dateToday,
              featured_events: featured
            }
            
            localStorage.setItem(l_strg.local_storage.events.featured, JSON.stringify(featuredeEvents));
            
          }
        }
        
      },
      error => { console.log('Featured Events Err >', error); }
    );
  }

  returnFeaturedEvents(): Observable<any>{
    // return featured events
    let endpoint: any = this.apiService.getEndpoints();
    return this.apiService.get(endpoint.events.featured_events);
  }

  fetchAllEvents():any {
    // fetch the featured events
    let endpoints: any = this.apiService.getEndpoints();
    this.apiService.get(endpoints.events.all_events).subscribe(
      response => {
        
        if ('data' in response) {
          // console.log('dataSvc - ALL EVENTS RESP >', response.data);
          
          let allEvents = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
          let l_strg = this.apiService.getEndpoints();
          let events = {
            date: this.dateToday,
            all_events: allEvents
          }
          
          localStorage.setItem(l_strg.local_storage.events.all, JSON.stringify(events));
          
        }
        
      },
      error => { console.log('All Events Err >', error); }
    );
  }

  returnAllEvents(): Observable<any>{
    // return featured events
    let endpoint: any = this.apiService.getEndpoints();
    return this.apiService.get(endpoint.events.all_events);
  }

  fetchCinemas():any {
    // fetch the cinemas
    let cinemas:any = {};
    let endpoints: any = this.apiService.getEndpoints();
    let cinemasResp = this.apiService.get(endpoints.cinemas.get_cinemas).subscribe(
      response => {
        
        if ('data' in response) {
          // console.log('dataSvc - CINEMAS RESP >', response.data);
          
          let theaters = (Array.isArray(response.data) ? response.data : []); // default to an empty arr if anything else is returned
          let l_strg = this.apiService.getEndpoints();
          cinemas.date = this.dateToday;
          cinemas.cinemas = theaters;

          localStorage.setItem(l_strg.local_storage.cinemas, JSON.stringify(cinemas));
          return cinemas;
          
        }
        
      },
      error => { console.log('Featured Movies Err >', error); return cinemas; }
    );
    return Promise.resolve(cinemasResp);
    
  }

  returnCinemas(): Observable<any>{
    // return cinemas
    let endpoint: any = this.apiService.getEndpoints().cinemas.get_cinemas;
    return this.apiService.get(endpoint);
  }

  getArticle(slug): Observable<any>{
    // return gallery album
    return this.apiService.get(this.apiService.getEndpoints().lifestyle.read_article + slug);
  }

  searchKB(phrase: string){
    /*
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      let endpoints: any = this.apiService.getEndpoints();
      this.apiService.get(endpoints.search + phrase).subscribe(
        response => {
          if ('data' in response) {
            // console.log(response);
            // show a dialog with the results
            const dialogConfig = new MatDialogConfig();
            this.dialog.open(SearchComponent, dialogConfig);

            var x = Array.from(document.getElementsByClassName("cdk-overlay-container") as HTMLCollectionOf<HTMLElement>);
            x[0].style.marginTop = "3%";

            this.searchSource.next(response);
          }
        },
        error => { console.log('Coming Soon Err >', error); }
      );
      
    }, 900);
    */
    
  }

  movieTicketJourneyModal(cinema: any, show:any, day:any, movie:any){
    /*
    // show a dialog with the results
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;

    let payload: any = {cinema:cinema,show:show,day:day,movie:movie};
    dialogConfig.data = payload;
    
    this.dialog.open(BuyComponent, dialogConfig);

    var x = Array.from(document.getElementsByClassName("cdk-overlay-container") as HTMLCollectionOf<HTMLElement>);
    x[0].style.marginTop = "3%";
    
    this.searchSource.next(payload);
    */
  }

}
