import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <div style="float: left; margin: 10px; padding: 10px;"
        [style.background] = "vaccined ? 'green' : 'red'">
    <p>Name: {{name | uppercase}}</p>
    <p>Age: {{age}}</p>
    <p>Date: {{(date | strToDate)|date: 'dd/MM/yyyy'}}</p>
    <p *ngIf=!vaccined > Disease: {{disease | boolToYN}}<p>
    <p *ngIf=!vaccined > Vaccine Type: {{vaccineType}}<p>
    <p>Vaccined: {{vaccined | tOF}}</p>
    <p *ngIf=!vaccined > Doses: {{doses}}<p>
    <button *ngIf="!vaccined" 
              (click)="onVaccinate()"
              [disabled]="age < 18 || disease"
              >
        Vaccinate
      </button>
    </div>
  `
})
export class PersonComponent implements OnInit {

  @Input() name:string;
  @Input() age:number;
  @Input() date:string;
  @Input() disease:boolean;
  @Input() vaccineType:string;
  @Input() vaccined:number;
  @Input() doses:number;
  @Output() vaccinate = new EventEmitter();
  constructor() {
    this.name=""; 
    this.age=0;
    this.date='';
    this.disease=false;
    this.vaccineType='';
    this.vaccined=0;
    this.doses=0; 
  }


  ngOnInit() {
  }

  onVaccinate(){
    this.vaccinate.emit();
  }

}