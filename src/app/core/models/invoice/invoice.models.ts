
export class Invoice{
    id: number;
    dni: string;
    name: string;
    lastName: string;
    consecutive: string;
    datePurchase: string;
    constructor(item?: Invoice) {
        this.id = item?.id ?? 0;
        this.dni = item?.dni ?? '';
        this.name = item?.name ?? '';
        this.lastName = item?.lastName ?? '';
        this.consecutive = item?.consecutive ?? '';
        this.datePurchase = item?.datePurchase ?? '';
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