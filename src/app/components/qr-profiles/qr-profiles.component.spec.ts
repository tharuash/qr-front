import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrProfilesComponent } from './qr-profiles.component';

describe('QrProfilesComponent', () => {
  let component: QrProfilesComponent;
  let fixture: ComponentFixture<QrProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
