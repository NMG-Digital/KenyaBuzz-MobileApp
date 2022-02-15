import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit {
  public theEvent:any;
  public eventLoaded: boolean = false;

  slideOpts = {
    slidesPerView: 3,
  };
  images;

  constructor(private dummy: DummyService,
              private router: Router,
              private dataService: DataService)
  {
    
    if(this.router.getCurrentNavigation().extras.state && "data" in this.router.getCurrentNavigation().extras.state) {
      this.theEvent = this.router.getCurrentNavigation().extras.state.data;

      // this.theEvent.poster = (this.theEvent.poster ? 'https://www.kenyabuzz.com/public'+this.theEvent.poster : null);
      // this.theEvent.start_date = (this.theEvent.start_date ? this.dataService.readableDate(this.theEvent.start_date) : null);

      console.log('The Event >',this.theEvent);
      this.eventLoaded = true;
    } else {
      this.eventLoaded = false;
      // navigate back home if there's nothing to display
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
