export type Menu = {
    name: string;
    image: string;
    options: Option[];
};

export type Option = {
    name: string;
    description: string;
    value: number;
    image: string;
};

export type ItemOrder = {
    name: string;
    value: number;
    amount: number;
    image: string;
};