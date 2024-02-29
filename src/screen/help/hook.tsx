import { useState } from "react";
export const UseHelp = () => {
    const [callWaiter, setCallWaiter] = useState<boolean>(false);
    const handleCallWaiter = () => {
        setCallWaiter(true);
    };

    return { callWaiter, handleCallWaiter };
}