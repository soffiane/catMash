import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  providers: [CatService]
})
export class CatComponent implements OnInit {

  public cats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catService.getCats().subscribe(catListResponse => {
      this.cats = catListResponse.images.map(item => new Cat(
       item.url,
       item.id,
      0
      ));
    });
  }

}
