import { Component, OnInit } from '@angular/core';
import { HackerRankService } from 'src/app/services/hacker-rank.service';

@Component({
  selector: 'app-hacker-rank',
  templateUrl: './hacker-rank.component.html',
  styleUrls: ['./hacker-rank.component.scss']
})
export class HackerRankComponent implements OnInit {
  list:any = [];
  constructor(private _HackerRankService:HackerRankService) { }

  ngOnInit(): void {
    this._HackerRankService.get().subscribe((data) => {
      this.list= data;
      console.log(this.list.length);
    },(err)=>{
      console.log(err);
    })
  }

  delete(_id:string):void{
    this._HackerRankService.delete(_id).subscribe((data) => {
      this.list= data;
      console.log(this.list.length);
    },(err)=>{
      console.log(err);
    });
  }
}
