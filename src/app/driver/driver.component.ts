import { Component, EventEmitter, Input, OnInit,Output} from '@angular/core';
import { Driver } from'../module/klasa';
import {CommonModule} from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule,NgClass],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css'
})
export class DriverComponent implements OnInit {
  constructor(){}
  @Input()
  ime:String="";
  @Input()
  vozac:Driver={} as Driver;
  @Input()
  reden:Number={} as Number;
  @Output()
  shofer:Driver={} as Driver;
  @Output()
  cuci=new EventEmitter<any>();

  klasi(){
    return{'poz':this.vozac.category=="BEGINER",
            'poz1':this.vozac.category=="ADVANCED",
          'course-card':true}
  }
  klik(){
    var link=this.vozac.iconUrl;
    window.open(link,"_blank");
    console.log("me klikna");
    this.cuci.emit(this.vozac);
  }
  Stil(){
    if(this.vozac.category=="ADVANCED"){
      return {'background-color':'red','font-size':'20px','color':'black'}
    }
    else if(this.vozac.category=="BEGINER"){
      return{'background-color':'blue','font-size':'20px','color':'black'}
    }
    else{
      return{'background-color':'yellow','font-size':'20px','color':'black'}
    }
  }
  ngOnInit(): void {
    
  }

}
