import { Component, OnInit } from '@angular/core';
import { ICat } from '../../cat';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  providers: [CatService]
})
export class CatComponent implements OnInit {

  public cats: ICat[];

  profile = {};

  constructor(private catService: CatService) { }

  ngOnInit() {
      this.catService.getCats().subscribe(data => {
        this.profile = data;
      });
  }

}
