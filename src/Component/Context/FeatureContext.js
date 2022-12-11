import React, { createContext, useState } from 'react';

export const featureProvider = createContext();

const FeatureContext = ({children}) => {
    const [singleProject, setSingleProject] = useState([]);

    const userInfo = {
        setSingleProject,
        singleProject,
        
    }

    return (
        <featureProvider.Provider value={userInfo}>
            {children}
        </featureProvider.Provider>
    );
};

export default FeatureContext;