import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjTreeComponent } from './obj-tree.component';

describe('ObjTreeComponent', () => {
  let component: ObjTreeComponent;
  let fixture: ComponentFixture<ObjTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
