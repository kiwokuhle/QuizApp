import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { PhysicsPage} from '../../pages/physics/physics';

/**
 * Generated class for the BiologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biology',
  templateUrl: 'biology.html',
})
export class BiologyPage {
  Quetion1;
  Quetion2;
  Quetion3;
  Quetion4;
  Quetion5;
  Score = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  
  Next() {
    

    
    if (this.Quetion1 == "3"){
      this.Score =this.Score + 1 ;      
      console.log(this.Score);
      
      }

      if (this.Quetion2 == "1"){
        this.Score =this.Score + 1 ;
        
        
        console.log(this.Score);
        
        }

        if (this.Quetion3 == "4"){
          this.Score =this.Score + 1 ;
        
          
          console.log(this.Score);
          
          }

          if (this.Quetion4 == "3"){
            this.Score =this.Score + 1 ;
         
            
            console.log(this.Score);
            
            }

            if (this.Quetion5 == "4"){
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
                this.navCtrl.push(PhysicsPage);
                   
                
            
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
                this.navCtrl.push(BiologyPage);
              let alert = this.alertCtrl.create({
                title: 'Opps!',
                subTitle: 'ooh! You have got '+this.Score+'out of 5',
                buttons: ['Retry']
              });
              alert.present();

            }
            
             
           
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiologyPage');
  }

}
