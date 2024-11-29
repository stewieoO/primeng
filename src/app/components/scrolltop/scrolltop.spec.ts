import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollTop, ScrollTopModule } from './scrolltop';

describe('ScrollTop', () => {
    let scrollTop: ScrollTop;
    let fixture: ComponentFixture<ScrollTop>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, ScrollTopModule]
        });

        fixture = TestBed.createComponent(ScrollTop);
        scrollTop = fixture.componentInstance;
    });

    it('should display by default', () => {
        scrollTop.visible = true;
        fixture.detectChanges();

        const scrollTopEl = fixture.debugElement.query(By.css('.p-scrolltop'));
        expect(scrollTopEl.nativeElement).toBeTruthy();
    });
});
