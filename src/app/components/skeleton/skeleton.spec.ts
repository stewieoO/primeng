import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Skeleton, SkeletonModule } from './skeleton';

describe('Skeleton', () => {
    let skeleton: Skeleton;
    let fixture: ComponentFixture<Skeleton>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SkeletonModule]
        });

        fixture = TestBed.createComponent(Skeleton);
        skeleton = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const skeletonEl = fixture.debugElement.query(By.css('.p-skeleton'));
        expect(skeletonEl.nativeElement).toBeTruthy();
    });
});
