import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppConfigService } from '@service/appconfigservice';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './uikit.component.html',
    styleUrls: ['uikit.component.scss'],
    standalone: false
})
export class UIKitComponent {
    subscription: Subscription;
    constructor(
        private configService: AppConfigService,
        private titleService: Title,
        private metaService: Meta
    ) {
        this.titleService.setTitle('UI Kit - PrimeNG');
        this.metaService.updateTag({ name: 'description', content: 'PrimeNG Angular UI Kit' });
    }

    get isDarkMode(): boolean {
        return this.configService.config().darkMode;
    }
}
