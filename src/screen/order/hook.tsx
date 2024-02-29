import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Orders } from "./types";

export const useOrder = () => {
    const { state } = useLocation();
    const [total, setTotal] = useState<number>(0);
    const [request, setRequest] = useState<String>("");
    const navigate = useNavigate();

    const data = state as Orders[];

    useEffect(() => {
        if (data !== null) {
            data.forEach((order) => {
                setTotal(
                    (total) => total + (order.amount > 0 ? order.amount : 1) * order.value
                );
            });
        }
    }, [data]);

    return { total, request, data, setTotal, setRequest, navigate };
}