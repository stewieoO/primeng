import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Knob, KnobModule } from './knob';

describe('Knob', () => {
    let knob: Knob;
    let fixture: ComponentFixture<Knob>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, KnobModule]
        });

        fixture = TestBed.createComponent(Knob);
        knob = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const knobEl = fixture.debugElement.query(By.css('.p-knob'));
        expect(knobEl.nativeElement).toBeTruthy();
    });
});
