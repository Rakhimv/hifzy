
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    // useEffect(() => {
       
    //     window.scrollTo(0, 0);
    //     document.documentElement.scrollTop = 0;
    //     document.body.scrollTop = 0;
    
    //     const timeoutId = setTimeout(() => {
    //         window.scrollTo(0, 0);
    //     }, 100);

    //     return () => clearTimeout(timeoutId);
    // }, []);

    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
}

export default App;
