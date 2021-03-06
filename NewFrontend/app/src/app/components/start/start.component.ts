import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {
  public scrobblers : any;

  constructor(
    private Global: GlobalService
  ) { }

  ngOnInit() {
    this.Global.isLoading = false;
    this.scrobblers = [
      {
        name: 'Chrome Extension (Bandcamp, Google Play, Pandora)',
        link: 'https://github.com/ModalSeoul/Weeb-Chrome-Scrobbler'
      },
      {
        name: 'Foobar2000',
        link: '/static/Foobar.exe'
      },
      {
        name: 'MPD',
        link: 'https://github.com/ModalSeoul/mpd-scrobbler'
      },
      {
        name: 'MusicBee',
        link: '/static/MusicBee.exe'
      },
      {
        name: 'RipFM (From Last.fm to Wilt)',
        link: '/static/ripfm.exe'
      }
    ];
  }

}
