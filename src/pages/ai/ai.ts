import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProgrammingPage } from '../programming/programming';
// import arr from '../../app/Array';
// import {Quetions} from '../../app/obj';

/**
 * Generated class for the AiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ai',
  templateUrl: 'ai.html',
})
export class AiPage {
  Quetion1;
  Quetion2;
  Quetion3;
  Quetion4;
  Quetion5;

  Score = 0;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AiPage');
  }

  Next() {

    
    if (this.Quetion1 == "1"){
      this.Score =this.Score + 1 ;      
      console.log(this.Score);
      
      }

      if (this.Quetion2 == "3"){
        this.Score =this.Score + 1 ;
        
        
        console.log(this.Score);
        
        }

        if (this.Quetion3 == "3"){
          this.Score =this.Score + 1 ;
        
          
          console.log(this.Score);
          
          }

          if (this.Quetion4 == "4"){
            this.Score =this.Score + 1 ;
         
            
            console.log(this.Score);
            
            }

            if (this.Quetion5 == "2"){
              this.Score =this.Score + 1 ;
              
              
              console.log(this.Score);
              
              } 
              
              if (this.Score >=5) {
                if(this.Score >5){
                  this.Score = 0;
                  this.Quetion1 =0;
                  this.Quetion2 =0;
                  this.Quetion3 =0;
                  this.Quetion4 =0;
                this.Quetion5 = 0;
                }

                console.log("Pass" + " "+ this.Score+" " + "  of 5",);
                this.navCtrl.push(ProgrammingPage);
                
            
              const alert = this.alertCtrl.create({
                title: 'Congratulations',
                subTitle:'Woowh!your have got  '+ this.Score +'out of 5'+'Your are a Genuous',
                buttons: ['OK']
              });
              
          
              
              alert.present();
            }else {

              if(this.Score <5){
                this.Quetion1 =0;
                this.Quetion2 =0;
                this.Quetion3 =0;
                this.Quetion4 =0;
              this.Quetion5 = 0;
              }

              console.log("Pass" + " "+ this.Score+" "+" of 5",);
                this.navCtrl.push(AiPage);
              let alert = this.alertCtrl.create({
                title: 'Opps!',
                subTitle: 'ooh! You have got '+this.Score+'out of 5',
                buttons: ['Retry']
              });
              alert.present();

            }
            
             
           
  }

}



