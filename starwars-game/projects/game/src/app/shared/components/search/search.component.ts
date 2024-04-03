import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'game-search',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
// SCAM
// jusqu'à angular 14
@NgModule({
   declarations: [SearchComponent],
   imports: [
     CommonModule
   ],
   exports: [SearchComponent]
})
export class SearchModule { }
