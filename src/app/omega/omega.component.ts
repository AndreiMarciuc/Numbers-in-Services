import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-omega',
  templateUrl: './omega.component.html',
  styleUrls: ['./omega.component.css']
})
export class OmegaComponent implements OnInit {
  Omeganumbers:number;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    
  }
  Subtract() {
    this.Omeganumbers = this._dataService.subtract();
  }
}
