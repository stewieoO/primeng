import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Badge, BadgeModule } from './badge';

describe('Badge', () => {
    let badge: Badge;
    let fixture: ComponentFixture<Badge>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, BadgeModule]
        });

        fixture = TestBed.createComponent(Badge);
        badge = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const badgeEl = fixture.debugElement.query(By.css('.p-badge'));
        expect(badgeEl.nativeElement).toBeTruthy();
    });
});
