import { MenuInterface } from '../models/interfaces/menu.interface';

export const menuOptions: MenuInterface[] = [
  {
    key: 'home',
    label: 'Inicio',
    route: '/home',
  },
  {
    key: 'invoice',
    label: 'Facturación',
    route: '/invoice'
  },
];
