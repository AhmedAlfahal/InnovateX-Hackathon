import React, { createContext, useState, useContext } from 'react';
import Falcon from '../Screens/falcon';

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
	const [mssg, setMssg] = useState ('');
	const [ispVisible, setIspVisible] = useState(false);
	const [isgVisible, setIsgVisible] = useState(false);
	const [istVisible, setIstVisible] = useState(false);
	const [dir, setDir] = useState ('');
    const [gifName, setGifName] = useState('Close_Wings');

    const showOverlay = () => setIsVisible(true);
    const hideOverlay = () => setIsVisible(false);
	const setMg =(text) => setMssg(text);
    const changeGif = (newGifName) => setGifName(newGifName);


    return (
        <OverlayContext.Provider value={{ showOverlay, hideOverlay ,setMg, mssg , setIspVisible, ispVisible, dir, setDir,isgVisible, setIsgVisible,istVisible, setIstVisible, changeGif}} >
            {children}
            {isVisible && <Falcon msg = {mssg} gifName={gifName}/>}
        </OverlayContext.Provider>
    );
};

export const useOverlay = () => useContext(OverlayContext);
