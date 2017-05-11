import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'widgets', component: HomeComponent, children: [] },
    {
        path: 'apps',
        component: HomeComponent,
        data: { title: 'Heroes List' },
        children: [
            { path: 'sub-calander', component: HomeComponent },
            { path: 'sub-media', component: HomeComponent }
        ]
    },
    { path: 'apps/calander', component: HomeComponent },
    { path: 'apps/media', component: HomeComponent },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
