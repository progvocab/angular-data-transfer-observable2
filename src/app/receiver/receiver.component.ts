import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

   constructor(private service : MainService) { }
data = '';
  ngOnInit() {
    this.service.sharedMessage.subscribe (
      res => this.data = res ,
      err => console.log(err)

    );

  }

}