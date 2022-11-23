import { createReducer, on } from '@ngrx/store';
import { Hit } from 'src/app/core/model/hit.model';
import * as HitActions from '../actions/hits.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const hitsFeatureKey = 'hits';

//NGRX ENTITY ADAPTER PARA EL MANEJO DE LOS ESTADOS
//ESTADO
export interface State extends EntityState<Hit> {
  error: any;
  loading: boolean;
  filter: string;
  selectedHit: Hit;
}

export const adapter: EntityAdapter<Hit> = createEntityAdapter<Hit>({});
//ESTADO INICIAL
export const initialState: State = adapter.getInitialState({
  error: null,
  loading: false,
  filter: null,
  selectedHit: null,
});

//RECUCERS A IMPLEMENTAR SEGUN LAS ACCIONES
export const HitReducer = createReducer(
  //REDUCER PARA CARGAR TODOS LOS HIT
  initialState,
  on(HitActions.loadAllHits, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(HitActions.loadAllHitsSuccess, (state, action) => {
    return adapter.setAll(action.hits, state);
  }),
  on(HitActions.loadAllHitsError, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  //REDUCER PARA CARGAR TODOS LOS HIT POR BUSQUEDA INDIVIDUAL
  on(HitActions.loadHitsBySearch, (state, action) => {
    return {
      ...state,
      loading: true,
      filter: action.filter,
    };
  }),
  on(HitActions.loadHitsBySearchError, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),

  //REDUCER PARA CARGAR TODOS LOS HIT POR CATEGORIA
  on(HitActions.loadHitsByCategory, (state, action) => {
    return {
      ...state,
      loading: true,
      filter: action.filter,
    };
  }),
  on(HitActions.loadHitsByCategoryError, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  //REDUCER PARA CARGAR HIT POR ID
  on(HitActions.loadOneHitSucces, (state, action) => {
    return {
      ...state,
      selectedHit: action.hit,
    };
  }),
  on(HitActions.loadOneHitError, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
