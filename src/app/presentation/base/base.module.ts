import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { HomeComponent } from '../home/home.component';
import { StoreComponent } from '../store/store.component';

@NgModule({
    declarations: [BaseComponent, HomeComponent, StoreComponent],
    imports: [CommonModule, BaseRoutingModule],
    exports: [BaseComponent],
})
export class BaseModule {}
