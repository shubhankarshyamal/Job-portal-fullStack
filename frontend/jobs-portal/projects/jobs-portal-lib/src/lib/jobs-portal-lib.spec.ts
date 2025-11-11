import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPortalLib } from './jobs-portal-lib';

describe('JobsPortalLib', () => {
  let component: JobsPortalLib;
  let fixture: ComponentFixture<JobsPortalLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsPortalLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsPortalLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
