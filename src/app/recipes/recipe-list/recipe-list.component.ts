import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe!', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a07_roasted_potatoes.jpg.rend.hgtvcom.826.620.suffix/1446840363593.jpeg'),
    new Recipe('Test Recipe', 'This is a test recipe!', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a07_roasted_potatoes.jpg.rend.hgtvcom.826.620.suffix/1446840363593.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
