import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {
    AuthenticationLayoutComponent,
    ErrorLayoutComponent,
    PortalLayoutComponent
} from './layout';


const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: '',
        component: AuthenticationLayoutComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/parents/parents.module').then(m => m.ParentsModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/teachers/teachers.module').then(m => m.TeachersModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/financial/financial.module').then(m => m.FinancialModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/management/management.module').then(m => m.ManagementModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/tools/tools.module').then(m => m.ToolsModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/communications/communications.module').then(m => m.CommunicationsModule)
    },
    {
        path: '',
        component: PortalLayoutComponent,
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: '',
        component: ErrorLayoutComponent,
        loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
    },
    
    { path: '**', redirectTo: 'auth' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        useHash: false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }