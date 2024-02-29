import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemOrder } from "./types";
export const UseCardapio = () => {
    const [totalItem, setTotalItem] = useState<ItemOrder[]>([]);
    let navigate = useNavigate();
    const handleConfirm = () => {
        navigate("/order", { state: totalItem });
    };

    return { totalItem, setTotalItem, handleConfirm };
}