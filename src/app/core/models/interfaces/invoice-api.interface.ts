import { ProductWithPriceWithCount } from "../product/product.model";

export interface InvoicePayloadInterface {
    consecutive: string;
    datePurchase: string;
    idCustomer: number;
    products: InvoiceDetailPayloadInterface[];
}

export interface InvoiceDetailPayloadInterface {
    id: number;
    count: number;
}