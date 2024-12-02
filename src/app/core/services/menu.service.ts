import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  menus: any = [
    {
      title: 'Dashboard',
      route: './accueil-stock',
      icon: 'bi bi-speedometer',
      access: ['admin', 'vendeur', 'aide-vendeur'],
    },
    {
      title: 'Produits',
      route: './produit',
      icon: 'pi pi-tags',
      access: ['vendeur', 'aide-vendeur'],
    },
    {
      title: 'Ventes',
      route: './vente',
      icon: 'bi bi-receipt',
      access: ['vendeur', 'aide-vendeur'],
    },
    {
      title: 'MvtStocks',
      route: './mvtStock',
      icon: 'bi bi-boxes',
      access: ['vendeur', 'aide-vendeur'],
    },
    {
      title: 'Boutique',
      route: './boutique',
      icon: 'pi pi-shop',
      access: ['vendeur', 'aide-vendeur'],
    },
    {
      title: 'Apprmvt',
      route: './approvisionnement',
      icon: 'pi pi-truck',
      access: ['vendeur', 'aide-vendeur'],
    },
    {
      title: 'Dépenses',
      route: './depense',
      icon: 'pi pi-dollar',
      access: ['vendeur', 'aide-vendeur'],
    },
    {
      title: 'Paiements',
      route: './paiement',
      icon: 'pi pi-wallet',
      access: ['vendeur', 'aide-vendeur'],
    },
    {
      title: 'Clients',
      route: './clients',
      icon: 'pi pi-users',
      access: ['vendeur', 'aide-vendeur'],
    },
  ];

  // fgjdfgjd
  // getMenusByRole(role: string) {
  //   return this.menus.filter((menu: any) => menu.access.includes(role));
  // }

  // Méthode pour récupérer les menus en fonction du rôle et des permissions
  getMenusByUser(userInfo: any) {
    // Filtrer les menus accessibles en fonction du rôle de l'utilisateur connecté
    let accessibleMenus = this.menus.filter((menu: any) =>
      // Vérifie si le rôle de l'utilisateur est inclus dans la liste des rôles autorisés pour ce menu
      menu.access.includes(userInfo.role.name)
    );

    // Si l'utilisateur a des permissions spécifiques
    if (userInfo.permissions) {
      // Filtrer les menus pour n'inclure que ceux dont la route est dans les permissions de l'utilisateur
      accessibleMenus = accessibleMenus.map((menu: any) => {
        const menuPermissions = userInfo.permissions[menu.route];
        return {
          ...menu,
          canView: menuPermissions?.canView || false,
          canAdd: menuPermissions?.canAdd || false,
          canEdit: menuPermissions?.canEdit || false,
          canDelete: menuPermissions?.canDelete || false,
        };
      });
    }

    // Retourner la liste des menus accessibles à l'utilisateur
    return accessibleMenus;
  }

  // Vérifier si l'utilisateur a la permission pour une action spécifique
  // hasPermission(user: User, menuTitle: string, action: string) {
  //   const menuPermissions: any = user.permissions[menuTitle];
  //   return menuPermissions ? menuPermissions[action] : false;
  // }
}
