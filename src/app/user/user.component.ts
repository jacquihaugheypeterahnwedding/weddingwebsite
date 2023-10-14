import { ApplicationRef, Component } from '@angular/core';

import { I18n } from 'aws-amplify';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  I18n = I18n;

  text = 'one'
  x = 4

  constructor (private appRef: ApplicationRef) {
    
  }

  ngOnInit(): void {
    this.text = I18n.get('Test String!')
  }

  

  switchLanguage() {
    console.log('switch')
    I18n.setLanguage('ko-KR');
    //this.text = I18n.get('Test String!');
    this.x = 7
    this.appRef.tick();
    this.ngOnInit()
  }

}