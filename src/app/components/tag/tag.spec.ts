import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Tag, TagModule } from './tag';

describe('Tag', () => {
    let tag: Tag;
    let fixture: ComponentFixture<Tag>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TagModule]
        });

        fixture = TestBed.createComponent(Tag);
        tag = fixture.componentInstance;
    });

    it('should display by default', () => {
        fixture.detectChanges();

        const tagEl = fixture.debugElement.query(By.css('.p-tag'));
        expect(tagEl.nativeElement).toBeTruthy();
    });
});
