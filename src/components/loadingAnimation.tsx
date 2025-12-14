import { ring } from 'ldrs';
import '../styles/main.scss';

ring.register();

function LoadingAnimation() {
    return (
        <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2" 
            color="#e0e0e0" 
        ></l-ring>        
    );
}

export default LoadingAnimation;
