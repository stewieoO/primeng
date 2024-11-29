import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from '@stewie/primeng/button';
import { SplitButton, SplitButtonModule } from './splitbutton';

describe('SplitButton', () => {
    let splitbutton: SplitButton;
    let fixture: ComponentFixture<SplitButton>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RouterTestingModule, ButtonModule, SplitButtonModule]
        });

        fixture = TestBed.createComponent(SplitButton);
        splitbutton = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const splitButtonEl = fixture.debugElement.query(By.css('.p-splitbutton'));
        expect(splitButtonEl.nativeElement).toBeTruthy();
    });
});
