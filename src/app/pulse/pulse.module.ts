import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { StorageService } from '../shared/services/storage.service';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import {
  PulseCpuRamChartComponent,
  PulseDiskChartComponent,
  PulseNetworkChartComponent,
} from './charts/';
import { AggregationSelectorComponent } from './charts/aggregation-selector.component';
import { ChartAreaComponent } from './charts/chart-area.component';
import { PulseService } from './pulse.service';
import { PulseParamsPersistence } from './vm-pulse/pulse-params-persistence';
import { VmPulseComponent } from './vm-pulse/vm-pulse.component';
import { BaseChartDirective } from './charts/chart.directive';

@NgModule({
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [BaseChartDirective, VmPulseComponent],
  providers: [
    PulseService,
    PulseParamsPersistence,
    {
      provide: StorageService,
      useExisting: LocalStorageService,
    },
  ],
  declarations: [
    BaseChartDirective,
    AggregationSelectorComponent,
    ChartAreaComponent,
    PulseCpuRamChartComponent,
    PulseNetworkChartComponent,
    PulseDiskChartComponent,
    VmPulseComponent,
  ],
  entryComponents: [VmPulseComponent],
})
export class PulseModule {}
