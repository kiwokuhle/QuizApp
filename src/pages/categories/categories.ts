import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AiPage } from '../ai/ai';
import { ProgrammingPage } from '../programming/programming';
import { BiologyPage } from '../biology/biology';
import { MathsPage } from '../maths/maths';
import { PhysicsPage } from '../physics/physics';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  // Firststage(){
  //   this.navCtrl.push(AiPage);
  // }
  // Secondstage(){

    
 
  //   const alert = this.alertCtrl.create({
  //     title: 'Message',
  //     subTitle: 'this is a second stage start from stage one',
  //     buttons: ['OK']
  //   });
    

    
  //   alert.present();
  // }
  
  // Thirdstage(){

    
 
  //   const alert = this.alertCtrl.create({
  //     title: 'Message',
  //     subTitle: 'this is a third stage start from stage one',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
  
  // Fourthstage(){

    
 
  //   const alert = this.alertCtrl.create({
  //     title: 'Message',
  //     subTitle: 'this is a fourth stage start from stage one',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
  
  // Fivestage(){

    
 
  //   const alert = this.alertCtrl.create({
  //     title: 'Message',
  //     subTitle: 'this is a firth stage start from stage one',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
  


  
  
  Secondstage(){
    this.navCtrl.push(ProgrammingPage);
  }
  Thirdstage(){
    this.navCtrl.push(BiologyPage)

  }

  Firststage(){
    this.navCtrl.push(AiPage)
   }
  Fourthstage(){
    this.navCtrl.push(PhysicsPage)
  }
  Fivestage(){
    this.navCtrl.push(MathsPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }


}
