import { createAction, props } from '@ngrx/store';
import { Hit } from 'src/app/core/model/hit.model';

//ACCIONES PARA CARGAR TODOS LOS HITS
export const loadAllHits = createAction('[Hit Component] load All Hits');

export const loadAllHitsSuccess = createAction(
  '[Hit Effect] load All Hits Success',
  props<{ hits: Hit[] }>()
);

export const loadAllHitsError = createAction(
  '[Hit Component] load All Hits Error',
  props<{ error: any }>()
);

//ACCIONESPARA CARGAR POR BUSQUEDA
export const loadHitsBySearch = createAction(
  '[Hit By Search Component] load Hits By Search',
  props<{ filter: string }>()
);

export const loadHitsBySearchError = createAction(
  '[Hit Component] load Hits By Search Error',
  props<{ error: any }>()
);

//ACCIONES PARA CARGAR POR CATEGORIA

export const loadHitsByCategory = createAction(
  '[Hit By Category Component] load Hits By Category',
  props<{ filter: string }>()
);

export const loadHitsByCategoryError = createAction(
  '[Hit Component] load Hits By Category Error',
  props<{ error: any }>()
);

//ACCIONES PARA CARGAR POR ID
export const loadOneHit = createAction(
  '[Hit Component] load One Hit',
  props<{ idHit: string }>()
);

export const loadOneHitSucces = createAction(
  '[Hit Effect] load One Hit Success',
  props<{ hit: Hit }>()
);

export const loadOneHitError = createAction(
  '[Hit Component] load One Hit Error',
  props<{ error: any }>()
);
