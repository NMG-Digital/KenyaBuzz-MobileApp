import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  public movie:any;

  slideOpts = {
    slidesPerView: 3,
  };
  images;

  constructor(private dummy: DummyService, private router: Router) {
    this.images = this.dummy.images;
    // if(this.router.getCurrentNavigation().extras.state && "data" in this.router.getCurrentNavigation().extras.state) {
    //   this.movie = this.router.getCurrentNavigation().extras.state.data;
    //   console.log(this.movie);
    // } else {
    //   this.router.navigate(['/home']);
    // }

    this.movie = this.router.getCurrentNavigation().extras.state.data;
    this.movie.cast_data.cast.forEach(cast => {
      cast.profile_path = "https://image.tmdb.org/t/p/w342"+cast.profile_path;
    });
      console.log(this.movie);
    
    
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
