import { Component } from '@angular/core';
import { AccessibilityDoc } from '@doc/chart/accessibilitydoc';
import { BasicDoc } from '@doc/chart/basicdoc';
import { ChartjsDoc } from '@doc/chart/chartjsdoc';
import { ComboDoc } from '@doc/chart/combodoc';
import { DoughnutDoc } from '@doc/chart/doughnutdoc';
import { HorizontalBarDoc } from '@doc/chart/horizontalbardoc';
import { ImportDoc } from '@doc/chart/importdoc';
import { LineDoc } from '@doc/chart/linedoc';
import { LineStyleDoc } from '@doc/chart/linestyledoc';
import { MethodsDoc } from '@doc/chart/methodsdoc';
import { MultiAxisDoc } from '@doc/chart/multiaxisdoc';
import { PieDoc } from '@doc/chart/piedoc';
import { PolarAreaDoc } from '@doc/chart/polarareadoc';
import { PropsDoc } from '@doc/chart/propsdoc';
import { RadarDoc } from '@doc/chart/radardoc';
import { StackedBarDoc } from '@doc/chart/stackedbardoc';
import { VerticalBarDoc } from '@doc/chart/verticalbardoc';

@Component({
    templateUrl: './chartdemo.html'
})
export class ChartDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'chartjs',
            label: 'Chart.js',
            component: ChartjsDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'pie',
            label: 'Pie',
            component: PieDoc
        },
        {
            id: 'doughnut',
            label: 'Doughnut',
            component: DoughnutDoc
        },
        {
            id: 'verticalbar',
            label: 'Vertical Bar',
            component: VerticalBarDoc
        },
        {
            id: 'horizontalbar',
            label: 'Horizontal Bar',
            component: HorizontalBarDoc
        },
        {
            id: 'stackedbar',
            label: 'Stacked Bar',
            component: StackedBarDoc
        },
        {
            id: 'line',
            label: 'Line',
            component: LineDoc
        },
        {
            id: 'multiaxis',
            label: 'MultiAxis',
            component: MultiAxisDoc
        },
        {
            id: 'linestyles',
            label: 'Line Styles',
            component: LineStyleDoc
        },
        {
            id: 'polararea',
            label: 'Polar Area',
            component: PolarAreaDoc
        },
        {
            id: 'Radar',
            label: 'Radar',
            component: RadarDoc
        },
        {
            id: 'combo',
            label: 'Combo',
            component: ComboDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDoc
        },
        {
            id: 'methods',
            label: 'Methods',
            component: MethodsDoc
        }
    ];
}
