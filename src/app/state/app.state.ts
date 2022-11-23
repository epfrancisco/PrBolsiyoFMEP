import { EntityState } from '@ngrx/entity';
import { ActionReducerMap } from '@ngrx/store';
import { HitReducer, State } from './reducers/hits.reducers';

export interface AppState {
  hits: State;
}

//CONSTANTE QUE MAPEARA LOS REDUCERS QUE ALMACENAN LOS ESTADOS EN EL STORE
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  hits: HitReducer,
};
