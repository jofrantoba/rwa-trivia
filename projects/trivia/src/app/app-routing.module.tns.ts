import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard, CategoriesResolver, TagsResolver } from 'shared-library/core/route-guards';
export const routes: Routes = [

    { path: '', redirectTo: 'game-play', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'game-play',
        loadChildren: './game-play/game-play.module#GamePlayModule',
       canActivate: [AuthGuard],
       resolve: { 'categories': CategoriesResolver, 'tags': TagsResolver }
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
