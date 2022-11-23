import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsImageHitComponent } from './hit-image-details.component';

describe('DatailsImageHitComponent', () => {
  let component: DatailsImageHitComponent;
  let fixture: ComponentFixture<DatailsImageHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailsImageHitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailsImageHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
