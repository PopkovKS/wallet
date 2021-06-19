import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c/c.component';
import { CategoryComponent } from './category.component';



@NgModule({
  declarations: [
    CComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
