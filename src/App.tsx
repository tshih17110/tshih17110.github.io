import { useState, useEffect } from 'react';

import Stars from './components/stars';
import Layout from './components/layout';
import LoadingAnimation from './components/loadingAnimation';



function App() {
    const [isLoading, setIsLoading] = useState(true);

    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
            setIsContentVisible(true); 
        }, 1000); 

        return () => clearTimeout(loadingTimer);
    }, []);
    
    return (
        <>
            <Stars />

            {isLoading ? (
                <div className="loading-page">
                    <LoadingAnimation />
                </div>
            ) : (
                <div className={`main-content ${isContentVisible ? 'fade-in' : ''}`}>
                    <Layout>
                        <title>Thomas Shih</title>
                    </Layout>                    
                </div>

            )}
        </>
    )
}

export default App;
