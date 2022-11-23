import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppState } from '../app.state';
import * as ReducersHit from '../reducers/hits.reducers';

//ESTADO BASE
export interface State {
  users: ReducersHit.State;
}

export const reducers: ActionReducerMap<State> = {
  users: ReducersHit.HitReducer,
};

export const selectHitState = createFeatureSelector<ReducersHit.State>('hits');

//SELECTOR QUE DEVUELVE TODOS LOS HITS INDEPENDIENTEMENTE SI LA ACCION ES CARGAR TODOS,
//... POR BUSQUEDA INDIVIDUAL, O POR CATEGORIA
export const selectAllHits = createSelector(
  selectHitState,
  ReducersHit.selectAll
);

//SELECTOR QUE DEVUELVE UN HIT BUSCADO POR ID
export const selectOneHit = createSelector(
  selectHitState,
  (state: ReducersHit.State) => state.selectedHit
);
