import { OrderMenuInterface } from "./types";
import { useState } from "react";

export const UseOrderMenu = ({ data, total, setTotal }: OrderMenuInterface) => {
    const [counterItem, setCounterItem] = useState<number>(data.amount);
    const [showItem, setShowItem] = useState<boolean>(true);

    const handleAddTotal = () => {
        setCounterItem((counterItem) => counterItem + 1);
        setTotal(
            (total) => total + (data.amount > 0 ? data.amount : 1) * data.value
        );
    };

    const handleRemoveTotal = () => {
        const itemRemove = counterItem - 1;
        setCounterItem(itemRemove);
        setTotal(
            (total) => total - (data.amount > 0 ? data.amount : 1) * data.value
        );
        if (itemRemove === 0) setShowItem(false);
    };

    return { showItem, counterItem, handleAddTotal, handleRemoveTotal }
}