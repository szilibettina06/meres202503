import { Routes } from '@angular/router';
import { HomePageComponent } from './_components/home-page/home-page.component';
import { OffersComponent } from './_components/offers/offers.component';
import { AddNewComponent } from './_components/add-new/add-new.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'addnew', component: AddNewComponent }
    
    
];
