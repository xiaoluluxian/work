export interface IPage {
    propaddr: string;
    assetnum: string;
    startdate: string;
    billTo: string;
    city: string;
    stage: string;
    invoice: string;
    completionDate: string;
    invoiceDate: Date;
    item: IItem[];
}

export interface ITask {
    propaddr: string;
    assetnum: string;
    startdate: string;
    city: string;
}

export interface IItem{
    description: string;
    unique: string;
    amount: number;
    taxable: boolean;
    before: string[];
    during: string[];
    after: string[];
}