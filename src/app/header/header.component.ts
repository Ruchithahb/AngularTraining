import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string = 'Shop the Look, Own the Style.'
  source:string= '/assets/1.jpg'

  getTitle(){
    return "This is amazing";
  }

}
