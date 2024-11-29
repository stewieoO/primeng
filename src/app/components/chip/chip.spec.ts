import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Chip, ChipModule } from './chip';

describe('Chip', () => {
    let button: Chip;
    let fixture: ComponentFixture<Chip>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, ChipModule]
        });

        fixture = TestBed.createComponent(Chip);
        button = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const chipEl = fixture.debugElement.query(By.css('.p-chip'));
        expect(chipEl.nativeElement).toBeTruthy();
    });
});
