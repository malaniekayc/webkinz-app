import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalendarCardComponent } from './calendarCard.component';

describe('CalendarCardComponent', () => {
  let component: CalendarCardComponent;
  let fixture: ComponentFixture<CalendarCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedCalendarCardTitle: string = "Update #456: What's New!";
  let expectedCalendarCardDate: string = "Wed, 09 Feb 2022";
  let expectedCalendarCardDesc: string = "Check out this week's derby finalists!";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [CalendarCardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCardComponent);
    component = fixture.componentInstance;
    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.title = "Update #456: What's New!";
    component.date = "Wed, 09 Feb 2022";
    component.description = "Check out this week's derby finalists!";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display calendarCard title', () => {
    expect(cardEl.textContent).toContain(expectedCalendarCardTitle);
  });

  it('should display calendarCard date', () => {
    expect(cardEl.textContent).toContain(expectedCalendarCardDate);
  });

  it('should display calendarCard desc', () => {
    expect(cardEl.textContent).toContain(expectedCalendarCardDesc);
  });

});