import React, { useState } from 'react';
import christianText from '../i18n/christianText.json'
import workText from '../i18n/workText.json'
import menuText from '../i18n/menuText.json'
import resumeText from '../i18n/resumeText.json'
import interestsText from '../i18n/interestsText.json'

const DataContext = React.createContext([{}, () => { }]);

const DataContextProvider = ({children}) => {
    const [data,setDataState] = useState({
        language:"en",
        christian:christianText,
        work:workText,
        menu:menuText,
        resume:resumeText,
        interests:interestsText
    })
    return (
        <DataContext.Provider value={[data,setDataState]}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataContextProvider};

//imagemagick commands
/*

magick wizard.png -size -quality 70 wizard.webp

magick wizard.png wizard.webp


magick wizard.png -resize 200 wizard.webp


*/ 