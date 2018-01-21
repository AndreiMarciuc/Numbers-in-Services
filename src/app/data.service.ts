import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  alphanumbers: number[] = [];
  betanumbers: number[]=[];
  constructor() { }

  retrieveAlphaNumbers(): number[]{
    return this.alphanumbers;
  }
  retrieveBetaNumbers(): number[]{
    return this.betanumbers;
  }

  addAlphaNumber(num:number){
    this.alphanumbers.push(num);
  }
  addBetaNumber(num:number){
    this.betanumbers.push(num);
  }
  sumAlphaNumbers(){
    let sum=0;
    for(let number of this.alphanumbers){
      sum=sum+number;
    }
    return sum;
  }
  sumBetaNumbers(){
    let sum=0;
    for(let number of this.betanumbers){
      sum=sum+number;
    }
    return sum;
  }
  subtract(){
    return this.sumAlphaNumbers() - this.sumBetaNumbers();
  }
}
