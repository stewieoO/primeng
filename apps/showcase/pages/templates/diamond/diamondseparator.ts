import { TemplateSeparatorModule } from '@/components/template/templateseparator';
import { AppConfigService } from '@/service/appconfigservice';
import { Component, inject } from '@angular/core';

@Component({
    standalone: true,
    selector: 'diamond-separator',
    imports: [TemplateSeparatorModule],
    template: `
        <template-separator>
            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1004_106792)">
                    <path
                        d="M37.7352 20.6899C37.7352 20.6516 37.7352 20.6516 37.773 20.6133C37.8109 20.575 37.8109 20.4985 37.8109 20.4602C37.8109 20.3836 37.8109 20.3071 37.773 20.2305L37.7352 20.1922C37.7352 20.154 37.6974 20.154 37.6974 20.1157L32.0217 12.4594C31.9839 12.4211 31.946 12.3829 31.9082 12.3446C31.8703 12.3063 31.8325 12.3063 31.7568 12.268H31.719C31.6812 12.268 31.6055 12.2297 31.5676 12.2297H16.4325C16.3947 12.2297 16.319 12.2297 16.2812 12.268H16.2433C16.2055 12.268 16.1676 12.3063 16.092 12.3446C16.0541 12.3829 16.0163 12.4211 15.9785 12.4594L10.3028 20.1157C10.3028 20.154 10.2649 20.154 10.2649 20.1922L10.2271 20.2305C10.2271 20.2688 10.1893 20.3071 10.1893 20.3071C10.1514 20.4219 10.1514 20.4985 10.1893 20.6133C10.1893 20.6516 10.1893 20.6516 10.2271 20.6899C10.2271 20.7282 10.2649 20.7282 10.2649 20.7665L10.3028 20.8047L23.546 36.1172H23.6217C23.6595 36.1555 23.6595 36.1555 23.6974 36.1938L23.7352 36.2321L23.8109 36.2704H23.8487C23.9244 36.3086 24.0379 36.3086 24.1514 36.2704H24.1893L24.2649 36.2321L24.3028 36.1938C24.3406 36.1555 24.3785 36.1555 24.3785 36.1172L24.4163 36.079L37.6595 20.7665L37.6974 20.7282C37.7352 20.7282 37.7352 20.6899 37.7352 20.6899ZM17.3406 20.9961H30.6217L24.0001 34.4711L17.3406 20.9961ZM24.0001 13.5696L30.2055 19.8477H17.7947L24.0001 13.5696ZM36.1082 19.8477H32.1352V14.4883L36.1082 19.8477ZM31.0001 13.3399V19.0438L25.3622 13.3399H31.0001ZM17.0001 19.0438V13.3399H22.6379L17.0001 19.0438ZM15.8649 14.4883V19.8477H11.892L15.8649 14.4883ZM16.092 20.9961L21.5406 31.9829L12.0055 20.9961H16.092ZM26.4974 31.9829L31.946 20.9961H36.0325L26.4974 31.9829Z"
                        [attr.fill]="fillColor"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1004_106792">
                        <rect width="28" height="24.5" fill="white" transform="translate(10 12)" />
                    </clipPath>
                </defs>
            </svg>
        </template-separator>
    `
})
export class DiamondSeparator {
    configService = inject(AppConfigService);

    get fillColor() {
        return this.configService.appState().darkTheme ? 'var(--p-surface-0)' : 'var(--p-surface-900)';
    }
}
