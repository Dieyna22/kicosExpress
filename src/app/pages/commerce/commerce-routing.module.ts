import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilCommerceComponent } from './accueil-commerce/accueil-commerce.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';
import { GestionAvisComponent } from './gestion-avis/gestion-avis.component';




const routes: Routes = [
    {path: 'dashboard', component:AccueilCommerceComponent},
    {path: 'articles', component: GestionArticlesComponent}, 
    {path: 'commandes', component: GestionCommandesComponent},
    {path: 'avis', component: GestionAvisComponent},
    {path: '**', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }