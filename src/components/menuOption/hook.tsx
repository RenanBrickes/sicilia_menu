import { useState } from "react";
import { MenuOptionInterface } from "./types";
export const useMenuOption = ({ data, totalItem, setTotalItem }: MenuOptionInterface) => {
    const { name, description, value, image } = data;
    const [counter, setCounter] = useState<number>(0);

    const handleCounter = () => {
        const ammoutItem = counter + 1;
        const itemSelected = totalItem.find((e) => e.name === name);
        if (itemSelected === undefined)
            setTotalItem([
                ...totalItem,
                { name: name, value: value, amount: ammoutItem, image: image },
            ]);
        else {
            itemSelected.amount = ammoutItem;
            setTotalItem([...totalItem]);
        }
        setCounter(ammoutItem);
    };

    return { name, description, value, image, counter, handleCounter };
}