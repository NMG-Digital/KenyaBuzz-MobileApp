import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseApiPath = 'https://api.kenyabuzz.com';

  constructor(private httpClient: HttpClient) {
    //
  }

  get(param: any): Observable<any> {
    return this.httpClient.get(`${this.baseApiPath}/${param}`)
  }

  get2(param: any): Observable<any> {
    return this.httpClient.get(`${this.baseApiPath}/${param}`)
  }

  externalGet(param: any): Observable<any> {
    return this.httpClient.get(`${param}`)
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(`${this.baseApiPath}`, data)
  }

  getEndpoints(){
    // let basePath = 'https://api.kenyabuzz.com/';
    return {
      home_slider: 'getHomeSlider',
      movies: {
        coming_soon: 'mvsComingSoon',
        now_showing: 'mvsNowShowing',
        all_movies: 'mvsAll',
        bollywood: 'mvsBollywood',
        featured_movies: 'mvsFeatured',
        movie_details: 'mvDetails/',
        movie_details_by_slug: 'mvDetailsBySlg/',
        movie_shows_with_tickets: 'mvShowTimesWithTicketTypes'
      },
      cinemas: {
        get_cinemas: 'getCinemas',
        cinema_movies: 'getCinemasMvs/',
        movie_show_times: 'mvCinemaShowTimes/',
        get_vista_seats: 'getVistaSeats/'
      },
      events: {
        all_events: 'evntsAll',
        featured_events: 'evntsFeatured',
        home_events: 'homeEvents',
        event_details: 'evntDetailsBi/',
        event_details_by_slug: 'evntDetailsBs/',
        event_seating_plan: 'evntDetailsAndSeatsBs/'
      },
      gallery: {
        main_gallery: 'getGallery/',
        view_album: 'getAlbum/'
      },
      kids: {
        get_kids: 'getKidsArticles',
        kids_article: 'kidsArticle/'
      },
      lifestyle: {
        all_articles: 'getLifestyleArticles',
        read_article: 'getArticle/',
        snippets: 'lifestyleSnippets',
        get_directory: 'getDirectoryLocation/'
      },
      search: 'srch/',
      local_storage: {
        movies: {
          all: 'locDat_KeNmgkbMvsAll',  // local_storage > we can make these anything unique rather than just "KenyaBuzz"
          now_showing: 'locDat_KeNmgkbMvsNowShowing',
          coming_soon: 'locDat_KeNmgkbMvsSoon',
          featured: 'locDat_KeNmgkbMvsFtrd'
        },
        events: {
          featured: 'locDat_KeNmgkbEvntsFtrd',
          all: 'locDat_KeNmgkbEvntsAll',
          home: 'locDat_KeNmgkbEvntsHme',
          buy_ticket: 'locDat_KeNmgkbEvntsBuy'
        },
        lifestyle: 'locDat_KeNmgKbLA',
        kids: 'locDat_KeNmgKbLKA',
        gallery: 'locDat_KeNmgKbGlry',
        cinemas: 'locDat_KeNmgKbCins',
        schedule: 'locDat_KeNmgkbSched',
        carousel: 'locDat_KeNmgkbHmeCrsel',
        newsletter: 'locDat_KeNmgkbNwsltr'
      }
    }
  }
}
