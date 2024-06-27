export class Product {
    public name: string;
    public price: number;
    public description: string;
    public quantity: number;
    public serialNumber: string;
    public id: number;

    constructor(name: string, desc: string, serialNumber: string, price: number, quantity: number, id: number) {
        this.name = name;
        this.description = desc;
        this.price = price;
        this.serialNumber = serialNumber;
        this.quantity = quantity;
        this.id = id;
    }
}