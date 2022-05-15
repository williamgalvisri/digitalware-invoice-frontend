export class ProductWithPrice {
    id: number;
    name: string;
    price: number;
    constructor(item?: ProductWithPrice) {
        this.id = item?.id ?? 0;
        this.name = item?.name ?? ''
        this.price = item?.price ?? 0;
    }
}


export class ProductWithPriceWithCount extends ProductWithPrice{
    count: number;
    totalPrice: number;
    constructor(item?: ProductWithPriceWithCount) {
        super(item);
        this.count = item?.count ?? 0;
        this.totalPrice = item?.totalPrice ?? 0;
    }
}