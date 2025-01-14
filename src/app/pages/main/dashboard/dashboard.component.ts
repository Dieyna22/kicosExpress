import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MenuService } from '../../../core/services/menu.service';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    RouterModule,
    BadgeModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Variables
  menus: any[] = [];
  userRole!: string;
  userInfo: any;
  isSidebarVisible: boolean = true;

  // Constructeur
  constructor(
    private menuService: MenuService,
    private router: Router,
  ) {}


  ngOnInit(): void {
    // Récupère les menus accessibles à l'utilisateur connecté
    const storedUserInfo = localStorage.getItem('userConnected');
    if (storedUserInfo) {
      this.userInfo = JSON.parse(storedUserInfo);
      this.userRole = this.userInfo.role;
      console.log('role userInfo: ' + this.userRole);
      if (this.userRole === 'admin') {
        this.menus = this.menuService.menus.admin;
      }else if (this.userRole === 'commerce') {
        this.menus = this.menuService.menus.commerce;
      }else{
        this.menus = this.menuService.menus.livreur;
      }
      
     
      console.log('Menus chargés:', this.menus);
    }
  }


  // sidebar toggle
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  // sidebar close
  closeSidebar() {
    this.isSidebarVisible = true;
  }

  // Méthode pour la déconnexion
  logout() {
    localStorage.removeItem('userConnected');
    this.router.navigate(['/login']);
    this.menus = [];
    this.userInfo = null;
    this.userRole = '';
    console.log('Déconnexion effectuée');
  }
}
