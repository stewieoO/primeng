import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Splitter, SplitterModule } from './splitter';

describe('Splitter', () => {
    let splitter: Splitter;
    let fixture: ComponentFixture<Splitter>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SplitterModule]
        });

        fixture = TestBed.createComponent(Splitter);
        splitter = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const splitterEl = fixture.debugElement.query(By.css('.p-splitter'));
        expect(splitterEl.nativeElement).toBeTruthy();
    });
});
