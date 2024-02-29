import { useState } from "react";
export const useHelp = () => {
    const [callWaiter, setCallWaiter] = useState<boolean>(false);
    const handleCallWaiter = () => {
        setCallWaiter(true);
    };

    return { callWaiter, handleCallWaiter };
}