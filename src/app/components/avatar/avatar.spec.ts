import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Avatar, AvatarModule } from './avatar';

describe('Avatar', () => {
    let avatar: Avatar;
    let fixture: ComponentFixture<Avatar>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, AvatarModule]
        });

        fixture = TestBed.createComponent(Avatar);
        avatar = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const avatarEl = fixture.debugElement.query(By.css('.p-avatar'));
        expect(avatarEl.nativeElement).toBeTruthy();
    });
});
