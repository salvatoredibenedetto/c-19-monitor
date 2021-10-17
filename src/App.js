import React, {useEffect, useState} from 'react';
import logo from './assets/logo.png';
import { getRegions } from './services/dashboard';
import Filters from './Filters';
import './App.css';

function App() {
    const [regions, setRegions] = useState()

    useEffect(() => {
        getRegions({onSuccess, onError})
    }, [])

    const onSuccess = response => {
        setRegions(response.data)
    }

    const onError = error => {
        console.log(error)
    }
    
    const onRegionSelectionChange = (evt, value, reason) => {
        console.log(evt, value, reason)
    }

    return (
        <div className={'app'}>
            <header className={'app-header'}>
                <a
                    className={'logo-link'}
                    href={'https://www.datahow.ch/'}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    <img src={logo} className={'app-logo'} alt={'logo'} />
                </a>
            </header>
            <div className={'wrapper'}>
                <Filters regions={regions} onChange={onRegionSelectionChange}/>
            </div>
            <footer>
                <p>COVID-19 pandemic progression monitor</p>
            </footer>
        </div>
    );
}

export default App;
