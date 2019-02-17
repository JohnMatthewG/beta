import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
  email: string;
  pass: string;
  data: any;

  constructor(private http: HttpClient, private router: NavController) { }

  login(){
    console.log(this.email);
    console.log(this.pass);

    let logindetails = {
      email: this.email,
      pass: this.pass,
    };

   
   var url = 'https://lifegiver.000webhostapp.com/api/login.php';
   /*let login = new FormData();
   login.append('email', 'pass');
   login.append(this.email, this.pass);*/

   this.data = this.http.post(url, logindetails);
   this.data.subscribe((data) => {
     console.log(data);
     if(data==true){
      this.router.navigateRoot(['/login']);
     }
   }) 
   
   
   
   
   
   
   
   
    /*let reqOpts = {
      headers : { 
        'Accept': 'application/json',
        'Content-Type': 'x-www-form-urlencoded'
      }
    }
    let logindetails = {
      email: this.email,
      pass: this.pass,
    };
    console.log(logindetails);
    const login = "https://lifegiver.000webhostapp.com/includes/api.php";
    this.http.post(login,logindetails).subscribe((res) => {
      console.log(res);
      if(res==true){
        this.router.navigateRoot(['/login']);
      }
    });
  }*/
}

}
