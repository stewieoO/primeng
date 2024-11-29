import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Galleria, GalleriaModule } from './galleria';

describe('Galleria', () => {
    let galleria: Galleria;
    let fixture: ComponentFixture<Galleria>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, GalleriaModule]
        });

        fixture = TestBed.createComponent(Galleria);
        galleria = fixture.componentInstance;
    });

    it('should not display by default', () => {
        fixture.detectChanges();

        const galleriaEl = fixture.debugElement.query(By.css('.p-galleria'));
        expect(galleriaEl).toBeNull();
    });
});
