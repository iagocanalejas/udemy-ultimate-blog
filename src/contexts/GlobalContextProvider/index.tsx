import React, { createContext, useState } from "react";

type GlobalContextType = {
    isWriteModalOpen: boolean;
    setWriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const GlobalContext = createContext<GlobalContextType>(
    null as unknown as GlobalContextType
); // wtf is this shit UDEMY!!!

const GlobalContextProvider = ({ children }: React.PropsWithChildren) => {
    const [isWriteModalOpen, setWriteModalOpen] = useState(false);

    return (
        <GlobalContext.Provider value={{ isWriteModalOpen, setWriteModalOpen }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
