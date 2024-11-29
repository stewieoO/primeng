import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Divider, DividerModule } from './divider';

describe('Divider', () => {
    let divider: Divider;
    let fixture: ComponentFixture<Divider>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, DividerModule]
        });

        fixture = TestBed.createComponent(Divider);
        divider = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const dividerEl = fixture.debugElement.query(By.css('.p-divider'));
        expect(dividerEl.nativeElement).toBeTruthy();
    });
});
