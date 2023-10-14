import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';
import { APIService, UserSettings } from './API.service';
import { CognitoService } from './cognito.service';


@Injectable({
  providedIn: 'root',
})
export class UserService {

    userSettings: Partial<UserSettings> = {};


  constructor(private api: APIService, private cognitoService: CognitoService) {

    console.log('csntruct')
    this.cognitoService.getUser().then(value => {
        console.log(value);
        const username = value.username;
        console.log(username);

        this.api.ListUserSettings({user: {eq: username}}).then(event => {
            this.userSettings = event.items[0] as UserSettings;
            console.log(this.userSettings)
        });
    })
    
  }



}