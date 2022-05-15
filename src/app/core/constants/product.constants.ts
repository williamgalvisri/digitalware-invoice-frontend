import { ColumnsInterface } from '../models/interfaces/table.interface';

export const productsColumns: ColumnsInterface[] = [
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'count',
    label: 'cantidad',
  },
  {
    key: 'price',
    label: 'U. Price',
  },
  {
    key: 'totalPrice',
    label: 'Price',
  },
];
