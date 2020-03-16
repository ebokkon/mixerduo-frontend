import React, { useState, useEffect } from "react";

export const DialogContext = React.createContext();

export const DialogProvider = props => {
    const [open, setOpen] = useState(false);

    return (
        <DialogContext.Provider value={{ open, setOpen }}>
            {props.children}
        </DialogContext.Provider>
    );
};