import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StoreComponent } from '../store/store.component';
import { BaseComponent } from './base.component';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'store', component: StoreComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'home' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BaseRoutingModule {}
