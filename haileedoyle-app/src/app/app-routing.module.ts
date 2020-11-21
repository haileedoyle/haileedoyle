import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { WorkComponent } from './modules/general/work/work.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { NotFoundComponent } from "./modules/general/not-found/not-found.component";


const routes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'work', component: WorkComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
