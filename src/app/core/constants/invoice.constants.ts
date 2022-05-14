import { ColumnsInterface } from '../models/interfaces/table.interface';

export const columnsInvoices: ColumnsInterface[] = [
  { key: 'consecutive', label: 'Consecutivo' },
  { key: 'fullName', label: 'Nombre completo' },
  { key: 'dni', label: 'DNI' },
  { key: 'parseDate', label: 'Fecha de Facturación', sort: 'desc' }
];
