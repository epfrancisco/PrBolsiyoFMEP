import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {  Subscription } from 'rxjs';
import { Hit } from 'src/app/core/model/hit.model';
import { selectOneHit } from 'src/app/state/selectors/hits.selector';
import * as HitActions from '../../state/actions/hits.actions';

@Component({
  selector: 'app-hit-image-details',
  templateUrl: './hit-image-details.component.html',
  styleUrls: ['./hit-image-details.component.css'],
})
export class HitImageDatailsComponent implements OnInit, OnDestroy {
  subscription$: Subscription;
  hit: Hit;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.store.dispatch(HitActions.loadOneHit({ idHit: id }));
    this.subscription$ = this.store
      .pipe(select(selectOneHit))
      .subscribe((data) => {
        this.hit = data;
      });
  }

  onClic() {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    console.log('destruido');
  }
}
