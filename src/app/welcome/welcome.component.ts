import { Component } from '@angular/core';
import { APIService, UserSettings } from '../API.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  /* declare restaurants variable */
  public userSettings: Array<UserSettings> = [];

  constructor(private api: APIService) {

  }

  async ngOnInit() {
    this.api.ListUserSettings({user: {eq: 'weddinggmail'}}).then(event => {
      this.userSettings = event.items as UserSettings[];
      console.log(this.userSettings)
    });
  

  }



}
