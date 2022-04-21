import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  public user ={
    userName: '',
    password: '',
    firstnName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    //alert("submit");

    console.log(this.user);
    if(this.user.userName == '' || this.user.userName == null){
      //alert('UserName is required !!');
      //this.snack.open('Username is required !!');
     // this.snack.open('Username is required !!', 'ok');
      this.snack.open('Username is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //sucess message
        console.log(data);
        //alert('Success');
        Swal.fire('Successfully done !!', 'User registered with Username '+data.userName , 'success' );
        //Swal.fire("Oops!", "Something went wrong!", "error");
      },
      (error)=>{
        console.log(error);
        //alert('Somerthing went wrong !!');
        this.snack.open('Something went wrong !!', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    )

  }

}
