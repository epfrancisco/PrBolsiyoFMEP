import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as HitActions from '../../state/actions/hits.actions';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
})
export class SearchContainerComponent implements OnInit {
  public formSearch: FormGroup;
  categorySearch: string = '';

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      search: ['', [Validators.maxLength(100), Validators.required]],
      category: [''],
    });
  }

  toSearch() {
    let filter = this.formSearch.get('search').value;
    this.store.dispatch(HitActions.loadHitsBySearch({ filter }));
    this.formSearch.reset();
  }

  changeCategory(e: Event) {
    let categoryInput = (<HTMLInputElement>e.target).value;
    if (categoryInput !== null || categoryInput !== '') {
      this.categorySearch = categoryInput;
      this.store.dispatch(
        HitActions.loadHitsByCategory({ filter: this.categorySearch })
      );
    }
  }

  getInputText(){
    return this.formSearch.get('search')
  }
}
