import { Component, NgZone } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { filter } from 'rxjs/operator/filter';
import { LoginPage } from '../login/login';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
// import { FilePath } from '@ionic-native/file-path';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { TabsPage } from '../tabs/tabs';


@Component({
    selector: 'user-profile',
    templateUrl: 'user-profile.html'
})

export class UserProfilePage{
    imageurl: any;
    avatar: any;
  
    
    moveon = true;
    afireauth: any;
   
    nativepath: any;
    firestore = firebase.storage();
    imgsource: any;
    
    profile: object = {
        firstname: null,
        lastname: null,
        address: null
    };
    userId: any;
    name: any;
    
    userData: firebase.database.Reference;
    fireAuth: firebase.auth.Auth;
    // public filePath: FilePath,
    constructor( public zone: NgZone, public loadingCtrl: LoadingController, public imgservice: ImghandlerProvider ,public file:File, public filechooser: FileChooser, public navCtrl: NavController, public toastCtrl: ToastController){
        this.fireAuth = firebase.auth();
        this.userData = firebase.database().ref('/userData');
        this.userId = firebase.auth().currentUser.uid
        this.getUserProfile();



    }
updateimage(imageurl) {
      var promise = new Promise((resolve, reject) => {
          this.afireauth.auth.currentUser.updateProfile({
              displayName: this.afireauth.auth.currentUser.displayName,
              photoURL: imageurl      
          }).then(() => {
              firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
              displayName: this.afireauth.auth.currentUser.displayName,
              photoURL: imageurl,
              uid: firebase.auth().currentUser.uid
              }).then(() => {
                  resolve({ success: true });
                  }).catch((err) => {
                      reject(err);
                  })
          }).catch((err) => {
                reject(err);
             })  
      })
      return promise;
  }



  chooseimage() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      loader.dismiss();
      this.zone.run(() => {
        this.imageurl  = uploadedurl;
        this.moveon = false;
      })
    })
  }
 
  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();

    this.userData.child(this.userId).update({"photoUrl" : this.imageurl}).then((res :any )=> {
        loader.dismiss();
        if (res.success) {

            this.navCtrl.setRoot(TabsPage);
        }
        else {

            alert(res);
        }
    })
    
  }

 
  loaduserdetails() {
    this.getUserProfile().then((res: any) => {
      this.zone.run(() => {
        this.imageurl  = res.photoURL;
      })
    })
  }

  



    logout(){
        const result = this.fireAuth.signOut();
        if (result) {
          console.log("success");
          this.navCtrl.setRoot(LoginPage);
        } 
          else {
            console.log("Failed");
          }
    
    }
    
    ionViewDidLoad(){ 
        this.loaduserdetails();
        this.getUserProfile();
    }


  ionViewWillEnter() {
    this.loaduserdetails();
    this.getUserProfile();
  }

    getUserProfile() {
        var promise = new Promise((resolve, reject) => {
          this.userData.child(this.userId).once('value', (snapshot) => {
            // let fname = snapshot.val() && snapshot.val().firstname;
            this.profile = snapshot.toJSON();
          }).catch((err) => {
            reject(err);
          })
        })
        return promise;
      }



    user_profile_update(profile){
        var toaster = this.toastCtrl.create({
            duration:2000,
            position: 'bottom'
        });

        console.log("Last Name: "+profile.lastname);
        console.log("First Name: "+profile.firstname);
        console.log("Address: "+profile.address);
        if(profile.lastname== "" && profile.firstname == "" && profile.address == ""){
            toaster.setMessage('Please fill all data');
            toaster.present();
        }else if(profile.lastname == ""){
            toaster.setMessage('Input Last Name');
            toaster.present();
        }else if(profile.firstname == ""){
            toaster.setMessage('Input First Name');
            toaster.present();
        }else if(profile.address == ""){
            toaster.setMessage('Input Address');
            toaster.present();
        }else{
            
           try {
               const result = this.userData.child(this.userId).update({lastname: profile.lastname, firstname: profile.firstname, address: profile.address});
               toaster.setMessage('User Profile Successfully Changed');
               toaster.present();
            } catch (e){
               console.error(e);
           }
       }
    }
}