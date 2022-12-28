import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CideBarComponent } from './cide-bar.component';

describe('CideBarComponent', () => {
  let component: CideBarComponent;
  let fixture: ComponentFixture<CideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
