import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CognitoService } from './cognito.service';

import { Auth } from 'aws-amplify';

import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private route: ActivatedRoute, private router: Router, private cognitoService: CognitoService, public authenticator: AuthenticatorService) {
    this.navLinks = [
        {
            label: 'Welcome',
            link: './welcome',
            index: 0
        }, {
            label: 'Events',
            link: './events',
            index: 1
        }, {
            label: 'Lodging',
            link: './lodging',
            index: 2
        }, {
          label: 'Restaurants',
          link: './restaurants',
          index: 3
        }, {
          label: 'Our Story',
          link: './ourstory',
          index: 4
      }, 
    ];

    



  }


  ngOnInit(): void {

    

    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));

        
    });

    this.route.queryParams.subscribe(params => {
      if (this.authenticator.authStatus != 'authenticated') {
        if ('user' in params && 'pass' in params) {
          Auth.signIn(params['user'], params['pass']);
  
        }
      }
      
    });


  }


  signOut() {
    Auth.signOut();
  }


}
