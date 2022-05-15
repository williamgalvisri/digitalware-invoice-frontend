import { ProductWithPriceWithCount } from "../product/product.model";

export class Invoice{
    id: number;
    dni: string;
    name: string;
    lastName: string;
    consecutive: string;
    datePurchase: string;
    idCustomerFk: number;
    constructor(item?: Invoice) {
        this.id = item?.id ?? 0;
        this.dni = item?.dni ?? '';
        this.name = item?.name ?? '';
        this.lastName = item?.lastName ?? '';
        this.consecutive = item?.consecutive ?? '';
        this.datePurchase = item?.datePurchase ?? '';
        this.idCustomerFk = item?.idCustomerFk ?? 0;
    }
}

export class InvoiceView extends Invoice{
    readonly parseDate: string;
    readonly fullName: string;
    constructor(item?: InvoiceView) {
        super(item);
        this.fullName = item?.fullName ?? '';
        this.parseDate = item?.parseDate ?? '';
    }
}

export class InvoiceWithDetail extends Invoice {
    products: ProductWithPriceWithCount[];
    constructor(item?: InvoiceWithDetail) {
        super(item);
        this.products = item?.products ?? [];
    }
}