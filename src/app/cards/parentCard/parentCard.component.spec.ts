import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ParentCardComponent } from './parentCard.component';

describe('ParentCardComponent', () => {
  let component: ParentCardComponent;
  let fixture: ComponentFixture<ParentCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedParentCardDesc: string = "Your child can adopt a FREE pet!";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [ParentCardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCardComponent);
    component = fixture.componentInstance;
    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.desc = "Your child can adopt a FREE pet!";

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display parentCard desc', () => {
    expect(cardEl.textContent).toContain(expectedParentCardDesc);
  });

});