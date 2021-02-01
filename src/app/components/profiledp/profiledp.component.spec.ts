import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledpComponent } from './profiledp.component';

describe('ProfiledpComponent', () => {
  let component: ProfiledpComponent;
  let fixture: ComponentFixture<ProfiledpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiledpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
