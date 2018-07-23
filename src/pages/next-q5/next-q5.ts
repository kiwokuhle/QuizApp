import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Slide } from 'ionic-angular';
import { BiologyPage } from '../biology/biology';
import { ProgrammingPage } from '../programming/programming';

/**
 * Generated class for the NextQ5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next-q5',
  templateUrl: 'next-q5.html',
})
export class NextQ5Page {
 

  @ViewChild('slides') slides: any;
  slideOptions: any;
  flashCardFlipped: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextQ5Page');
  }
 
  selectAnswer(){
    this.navCtrl.push(NextQ5Page);

}






}
