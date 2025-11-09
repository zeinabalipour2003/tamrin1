import { Routes } from '@angular/router';
import { Homepage } from './+pages/homepage/homepage';
import { Aboutmepage } from './+pages/aboutmepage/aboutmepage';
import { Contacpage } from './+pages/contacpage/contacpage';

export const routes: Routes = [
    { path: 'home', component: Homepage},
    { path: 'aboutme', component: Aboutmepage},
    {path: 'contact', component: Contacpage},
    { path: '', redirectTo: '/home',pathMatch:'full'},
    {path:'**', redirectTo:'/home'}
    
];
