import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcomponant',
  templateUrl: './productcomponant.component.html',
  styleUrls: ['./productcomponant.component.scss']
})
export class ProductcomponantComponent implements OnInit {
  productArr: Array<string> = ['SamSung', 'OPO', 'ViVO', 'Apple']
  constructor() { }

  ngOnInit(): void {
  }

}
