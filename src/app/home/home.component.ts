import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHidden: boolean = false;
  mainTitle: string = 'Bonjour !!!';
  name: string = '';

  newDate: Date = new Date(2010, 10, 20);

  styleObject: any = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  };


  constructor() {}

  ngOnInit(): void {
    // this.name = ""
    // document.querySelector('h1').hidden = true;
  }

  toggleTitle() {
    this.isHidden = !this.isHidden;
    document.querySelector('h1').hidden = this.isHidden;
  }

  setCssClasses() {
    let myCssClasses = {
      'long-name': this.name.length > 5,
      'short-name': this.name.length <= 5
    }
    return myCssClasses;
  }

}
