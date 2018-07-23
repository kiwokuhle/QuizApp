import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BiologyPage } from '../pages/biology/biology';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoriesPage } from '../pages/categories/categories';
import { AiPage } from '../pages/ai/ai';
import { ProgrammingPage } from '../pages/programming/programming';
import { NextQ5Page } from '../pages/next-q5/next-q5';
import { MathsPage } from '../pages/maths/maths';
import { PhysicsPage} from '../pages/physics/physics';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    AiPage,
    ProgrammingPage,
    NextQ5Page,BiologyPage,
    MathsPage,PhysicsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    AiPage,
    ProgrammingPage,NextQ5Page,BiologyPage,MathsPage,PhysicsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
