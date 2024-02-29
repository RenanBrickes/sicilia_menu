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

export interface MenuOptionInterface {
    data: Option;
    setTotalItem: React.Dispatch<React.SetStateAction<ItemOrder[]>>;
    totalItem: ItemOrder[];
}