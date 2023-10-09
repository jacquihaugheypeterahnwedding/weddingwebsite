/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  import { I18n } from 'aws-amplify';

//I18n.setLanguage('ko');
const translation_dict = {
  ko: {
    'Sign In': 'Se connecter',
    'Sign Up': "S'inscrire",
    'Test String!': 'Korean Test str'
  },
  es: {
    'Sign In': 'Registrarse',
    'Sign Up': 'Regístrate',
    'Test String!': 'Span Test String!'
  }
};

I18n.putVocabularies(translation_dict);