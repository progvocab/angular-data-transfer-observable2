import { Component, OnInit } from '@angular/core';
import { NgModel , NgForm } from '@angular/forms';  
import { MainService } from '../main.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(private service : MainService) { }
yearOfBirth = '';
  ngOnInit() {
  }
send(){
this.service.nextMessage(this.yearOfBirth);
}
}