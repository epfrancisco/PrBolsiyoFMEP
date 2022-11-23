import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllHits } from 'src/app/state/selectors/hits.selector';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  page!: number;
  hits$: Observable<any> = new Observable();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.hits$ = this.store.pipe(select(selectAllHits));
  }

  detailCard(e: string) {
    let idImage = e;
    console.log('CLICKEADO ' + idImage);
    this.router.navigate(['/details/' + idImage]);
  }
}
