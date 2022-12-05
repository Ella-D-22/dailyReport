import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  date = formatDate(new Date(), 'hh:mm a', 'en-US');

  actionButton : String= "View Reports";

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.reportForm)

}


reportForm = new FormGroup({
  email : new FormControl('', [Validators.required, Validators.email]),
  creationDate : new FormControl ('', [Validators.required]),
  departmentEnum : new FormControl('', [Validators.required]), 
  reportCategory : new FormControl('', [Validators.required]),
  ticketId : new FormControl('', [Validators.required]),
  timeTaken : new FormControl(this.date),
  clientNameEnum : new FormControl('', [Validators.required]),
  productNameEnum : new FormControl('', [Validators.required]),
  report_description : new FormControl ('', [Validators.required])
})

addReport(){
  console.log(this.reportForm)

  this.router.navigate(['dash']);
}

}
