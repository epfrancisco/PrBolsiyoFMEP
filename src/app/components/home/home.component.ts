import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectAllHits } from 'src/app/state/selectors/hits.selector';
import * as HitActions from '../../state/actions/hits.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public hits$: Observable<any> = new Observable();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(HitActions.loadAllHits());
    this.hits$ = this.store.pipe(select(selectAllHits));
    console.log(this.hits$);
  }
}
