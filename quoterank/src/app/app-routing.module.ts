import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { NewquoteComponent } from './newquote/newquote.component';
import {Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'quotes/:id', component: ViewComponent},
  { path: 'write/:id', component: NewquoteComponent},
  { path: '**', component: HomeComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
