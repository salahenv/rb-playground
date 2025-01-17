const { createContext, useEffect, useState, useContext } = require("react");

const getFeatureFlags = () => {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            resolve({
                'new-dashboard': true,
                'insurance-fc': true,
            })
        }, 2000)
    );
}

const FeatureFlagConext = createContext();

export const FeatureFlagProvider = ({children}) => {
    const [featureFlags, setFeatureFlags] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchFlags = async () => {
        setIsLoading(true);
        try {
            const flags = await getFeatureFlags();
            setFeatureFlags(flags);

        } catch (error) {
            
        } finally {
            setIsLoading(false);
        }
        
    }

    useEffect(() => {
        fetchFlags();
    }, []);

    return (
        <FeatureFlagConext.Provider value = {{isLoading, featureFlags}}>
            {children}
        </FeatureFlagConext.Provider>
    )
}

export const useFeatureFlags = () => {
    const contextValue = useContext(FeatureFlagConext);
    return contextValue;
}

