import React, { useState } from 'react';

const UiContext = React.createContext([{}, () => { }]);


const UiContextProvider = ({children}) => {
    let isMobile = typeof document != 'undefined' ? window.matchMedia('(max-width: 760px)').matches : false;
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setUiState((state)=> ({...state, editDrawerOpen:open}))
    };


    const [uiState, setUiState] = useState({
        randomeImageNumber:1,
        style: {
            isMobile:isMobile,
            selectedPage:"/index",
            standard:{
                text:"#535353",
                headline:"#535353",
                border:"#EBD5B3"
            },
            christian:{
                menu:{
                    text:"#535353",
                    headline:"#535353",
                },
                border:{
                    color:"#EBD5B3",
                    width:"0.5em"
                },
            }
        }
    });

    

    return (
        <UiContext.Provider value={[uiState, setUiState]}>
            {children}
        </UiContext.Provider>
    );
}

export { UiContext, UiContextProvider};