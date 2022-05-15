export class Customer {
    id: number;
    dni: string;
    name: string;
    lastName: string;
    typeDni: string;
    active: boolean;
    birthDay: string;
    createdAt: string;
    updatedAt: string;

    constructor(item?: Customer) {
        this.id = item?.id ?? 0;
        this.dni = item?.dni ?? '';
        this.name = item?.name ?? '';
        this.lastName = item?.lastName ?? '';
        this.typeDni = item?.typeDni ?? '';
        this.active = item?.active ?? false;
        this.birthDay = item?.birthDay ?? '';
        this.createdAt = item?.createdAt ?? '';
        this.updatedAt = item?.updatedAt ?? '';
    }
}