import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';
import { HomeComponent } from './home/home.component';
import { TeknofestComponent } from './teknofest/teknofest.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'teknofest', component: TeknofestComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
