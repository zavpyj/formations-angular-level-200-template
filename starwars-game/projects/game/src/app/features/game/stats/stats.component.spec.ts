import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';

fdescribe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    // Arrange

    // Act
    //fixture.detectChanges();

    // Assert
    const domGenereDeMonComposant = fixture.nativeElement;
    const table = domGenereDeMonComposant.querySelector('table');
    expect(component).toBeTruthy();
    expect(table.rows.length).toBe(15);
  });
});
