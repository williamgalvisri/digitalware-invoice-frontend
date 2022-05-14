import { MenuInterface } from '../models/interfaces/menu.interface';

export const menuOptions: MenuInterface[] = [
  {
    key: 'home',
    label: 'Inicio',
    route: '/home',
    data: {
      title: 'Home',
      description: '',
    },
  },
  {
    key: 'invoice',
    label: 'Facturación',
    route: '/invoice',
    data: {
      title: 'Facturación',
      description: 'Maestro de facturación',
    },
  },
];
