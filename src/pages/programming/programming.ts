import { Component, ViewChild, } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides,AlertController } from 'ionic-angular';
import { BiologyPage } from '../biology/biology';


/**
 * Generated class for the ProgrammingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programming',
  templateUrl: 'programming.html',
})
export class ProgrammingPage {

  Quetion1;
  Quetion2;
  Quetion3;
  Quetion4;
  Quetion5;
  Quetion6;
  Score = 0;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgrammingPage');
  }
  
  




  @ViewChild(Slides) slides: Slides;
  goToSlide1(){
  this.slides.slideTo(1,1000);
}
goToSlide2(){
  this.slides.slideTo(2,1000);
}
goToSlide3(){
  this.slides.slideTo(3,1000);
}
goToSlide4(){
  this.slides.slideTo(4,1000);
}
goToSlide5(){
  this.slides.slideTo(5,1000);
}
goToSlide6(){
  this.slides.slideTo(6,1000);
}

Next(){

    
  if (this.Quetion1 == 3){
    this.Score =this.Score + 1 ;      
    console.log(this.Score);
    
    }

    if (this.Quetion2 == 4){
      this.Score =this.Score + 1 ;
      
      
      console.log(this.Score);
      
      }

      if (this.Quetion3 == "3"){
        this.Score =this.Score + 1 ;
      
        
        console.log(this.Score);
        
        }

        if (this.Quetion4 == "3"){
          this.Score =this.Score + 1 ;
       
          
          console.log(this.Score);
          
          }

          if (this.Quetion5 == "3"){
            this.Score =this.Score + 1 ;
            
            
            console.log(this.Score);
            
            } 
            

          if (this.Quetion6== "1"){
            this.Score =this.Score + 1 ;
            
            
            console.log(this.Score);
            
            } 
            
            if (this.Score >=6) {
              if(this.Score >6){
                this.Score = 0;
                this.Quetion1 =0;
                this.Quetion2 =0;
                this.Quetion3 =0;
                this.Quetion4 =0;
              this.Quetion5 = 0;
              this.Quetion6 = 0;
              }

              console.log("Pass" + " "+ this.Score+" "+" of 5",);
              this.navCtrl.push(BiologyPage);
              
          
            const alert = this.alertCtrl.create({
              title: 'Congratulations',
              subTitle:'Woowh!your have got  '+ this.Score +'out of 5'+'Your are a Genuous',
              buttons: ['OK']
            });
            
        
            
            alert.present();
          }else {

            if(this.Score <6){
              this.Quetion1 =0;
              this.Quetion2 =0;
              this.Quetion3 =0;
              this.Quetion4 =0;
            this.Quetion5 = 0;
            this.Quetion6 = 0;
            }

            console.log("Pass" + " "+ this.Score+" "+" of 6",);
              this.navCtrl.push(ProgrammingPage);
            let alert = this.alertCtrl.create({
              title: 'Opps!',
              subTitle: 'ooh! You have got '+this.Score+'out of 5',
              buttons: ['Retry']
            });
            alert.present();

          }
          
           
         
}
}
