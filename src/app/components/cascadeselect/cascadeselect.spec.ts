import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CascadeSelect, CascadeSelectModule } from './cascadeselect';

describe('CascadeSelect', () => {
    let cascadeSelect: CascadeSelect;
    let fixture: ComponentFixture<CascadeSelect>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, CascadeSelectModule]
        });

        fixture = TestBed.createComponent(CascadeSelect);
        cascadeSelect = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const cascadeEl = fixture.debugElement.query(By.css('.p-cascadeselect-trigger'));
        expect(cascadeEl.nativeElement).toBeTruthy();
    });
});
