import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.page.html',
  styleUrls: ['./view-movie.page.scss'],
})
export class ViewMoviePage implements OnInit {
  public movie:any;
  public movieLoaded: boolean = false;

  slideOpts = {
    slidesPerView: 3,
  };
  images;

  constructor(private dummy: DummyService, private router: Router) {
    
    if(this.router.getCurrentNavigation().extras.state && "data" in this.router.getCurrentNavigation().extras.state) {
      this.movie = this.router.getCurrentNavigation().extras.state.data;
      this.movie.cast_data.cast.forEach(cast => {
        cast.profile_path = "https://image.tmdb.org/t/p/w342"+cast.profile_path;
      });
      this.movieLoaded = true;
    } else {
      this.movieLoaded = false;
      // navigate back home if there's nothing to dispaly
      this.router.navigate(['/home']);
    }
    
  }

  ngOnInit() {
  }

  goTovideoList(val) {

    const navData: NavigationExtras = {
      queryParams: {
        id: val
      }
    };
    this.router.navigate(['/video-list'], navData);
  }

}
