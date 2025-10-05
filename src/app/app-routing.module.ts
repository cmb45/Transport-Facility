import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rides',
    loadChildren: () => import('./Transport/transport.module').then(m => m.TransportModule)
  },
  {
    path :'',
    redirectTo :'rides',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo : 'rides'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
