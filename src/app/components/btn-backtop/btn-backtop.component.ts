import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-backtop',
  templateUrl: './btn-backtop.component.html',
  styleUrls: ['./btn-backtop.component.scss']
})
export class BtnBacktopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
