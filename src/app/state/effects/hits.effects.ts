import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HitServiceService } from 'src/app/core/hit-service.service';
import * as HitActions from '../actions/hits.actions';

@Injectable()
export class HitEffects {
  //EFECTO PARA TRAER TODOS LOS HITS
  loadAllHits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HitActions.loadAllHits),
      mergeMap(() =>
        this.hitService.getAllHits().pipe(
          map((data) =>
            HitActions.loadAllHitsSuccess({ hits: Object.values(data) })
          ),
          catchError((error) => of(HitActions.loadAllHitsError({ error })))
        )
      )
    )
  );

  //EFECTO PARA TRAER TODOS LOS HITS POR BUSQUEDA INDIVIDUAL
  loadHitsBySearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HitActions.loadHitsBySearch),
      mergeMap((action) =>
        this.hitService.getHitsBySearch(action.filter).pipe(
          map((data) =>
            HitActions.loadAllHitsSuccess({ hits: Object.values(data) })
          ),
          catchError((error) => of(HitActions.loadHitsBySearchError({ error })))
        )
      )
    )
  );

  //EFECTO PARA TRAER TODOS LOS HITS POR CATEGORIA
  loadHitsByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HitActions.loadHitsByCategory),
      mergeMap((action) =>
        this.hitService.getHitsByCategory(action.filter).pipe(
          map((data) =>
            HitActions.loadAllHitsSuccess({ hits: Object.values(data) })
          ),
          catchError((error) =>
            of(HitActions.loadHitsByCategoryError({ error }))
          )
        )
      )
    )
  );

  //EFECTO PARA TRAER HIT POR ID
  loadHitById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HitActions.loadOneHit),
      mergeMap((action) =>
        this.hitService.getHitById(action.idHit).pipe(
          map((data) => HitActions.loadOneHitSucces({ hit: data })),
          catchError((error) => of(HitActions.loadOneHitError({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private hitService: HitServiceService
  ) {}
}
