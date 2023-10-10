import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';
import { APIService, UserSettings } from './API.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {

    userSettings: Partial<UserSettings> = {};


  constructor(private api: APIService) {

    console.log('csntruct')

    this.api.ListUserSettings({user: {eq: 'weddinggmail'}}).then(event => {
        this.userSettings = event.items[0] as UserSettings;
        console.log(this.userSettings)
      });
  }



}