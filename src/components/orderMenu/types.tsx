export type Order = {
    name: string;
    value: number;
    amount: number;
    image: string;
};

export interface OrderMenuInterface {
    data: Order;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}