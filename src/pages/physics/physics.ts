import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides,AlertController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { MathsPage } from '../maths/maths';

/**
 * Generated class for the PhysicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-physics',
  templateUrl: 'physics.html',
})
export class PhysicsPage {
  Quetion1;
  Quetion2;
  Quetion3;
  Quetion4;
  Quetion5;
  Score = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysicsPage');
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


Next(){

    
  if (this.Quetion1 == 2){
    this.Score =this.Score + 1 ;      
    console.log(this.Score);
    
    }

    if (this.Quetion2 == 1){
      this.Score =this.Score + 1 ;
      
      
      console.log(this.Score);
      
      }

      if (this.Quetion3 == "1"){
        this.Score =this.Score + 1 ;
      
        
        console.log(this.Score);
        
        }

        if (this.Quetion4 == "2"){
          this.Score =this.Score + 1 ;
       
          
          console.log(this.Score);
          
          }

          if (this.Quetion5 == "1"){
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

              console.log("Pass" + " "+ this.Score+" "+" of 5",);
              this.navCtrl.push(MathsPage);
              
          
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

            console.log("Pass" + " "+ this.Score+" "+" of 6",);
              this.navCtrl.push(PhysicsPage);
            let alert = this.alertCtrl.create({
              title: 'Opps!',
              subTitle: 'ooh! You have got '+this.Score+'out of 5',
              buttons: ['Retry']
            });
            alert.present();

          }
          
           
         
}

}
