import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Password, PasswordModule } from './password';

describe('Password', () => {
    let password: Password;
    let fixture: ComponentFixture<Password>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, PasswordModule]
        });

        fixture = TestBed.createComponent(Password);
        password = fixture.componentInstance;
    });

    it('should not display by default', () => {
        fixture.detectChanges();

        const passworOverlaydEl = fixture.debugElement.query(By.css('.p-password-panel-overlay'));
        expect(passworOverlaydEl).toBeNull();
    });
});
