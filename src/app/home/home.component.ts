import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Data, User } from './interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Data[];

  constructor( readonly data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe((data: User) => {
        this.users = data.data
        console.log(data)
      }, err => {
        alert(JSON.stringify(err))
      }
    );
  }

}
