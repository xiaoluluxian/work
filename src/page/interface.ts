export interface IPage {
    address: string;
    assetnum: string;
    startdate: string;
    duedate: string;
    billTo: string;
    city: string;
    stage: string;
    invoicenum: string;
    completiondate: string;
    invoicedate: string;
    totalcost: string;
    totalimage: number;
    item: IItem[];
}



export interface IItem{
    description: string;
    comment: string;
    unique: string;
    amount: number;
    taxable: boolean;
    tax: number;
    cost: number;
    qty: number;
    um: string;
    ppu: number;
    before: IPicture[];
    during: IPicture[];
    after: IPicture[];
}

export interface IPicture{
    src: string
}