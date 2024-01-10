import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      throw new Error('Method not implemented.');
    }
    title = 'AngularForms';
    defaultCountry = 'india';
   
    firstname!: string;
    lastname!: string;
    email!: string;
    gen!: string;
    country!: string;
   
    defaultGender = 'Male';
   
    gender = [
      {id: '1', value: 'Male'},
      {id: '2', value: 'Female'},
      {id: '3', value: 'Other'}
    ]
   
    @ViewChild('myForm')
    form!: NgForm;
   
    onSubmit(){
      console.log(this.form);
   
      this.firstname = this.form.value.personDetails.firstname;
      this.lastname = this.form.value.personDetails.lastname;
      this.email = this.form.value.personDetails.email;
      this.gen = this.form.value.gender;
      this.country = this.form.value.country;
   
      this.form.reset();
    }
   
    setDefaultValues(){
      // this.form.value.personDetails.firstname = 'John';
      // this.form.value.personDetails.lastname = 'smith';
      // this.form.value.personDetails.email = 'abc@example.com';
      // this.form.setValue({
      //   country: '',
      //   gender: '',
      //   hobbies: '',
      //   personDetails: {
      //     firstname: 'John',
      //     lastname: 'Smith',
      //     email: 'abc@example.com'
      //   }
      // })
   
      this.form.form.patchValue({
        personDetails: {
           firstname: 'John',
           lastname: 'Smith',
           email: 'abc@example.com'
        }
      })
    }
    

}
