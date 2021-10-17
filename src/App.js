import React, {useEffect, useState} from 'react';
import logo from './assets/logo.png';
import { getRegions, getReports } from './services/main';
import Filters from './Filters';
import moment from 'moment';
import './App.css';

function App() {
    const [regions, setRegions] = useState()
    const [report, setReport] = useState()

    useEffect(() => {
        getRegions({
            onSuccess: response => setRegions(response.data), 
            onError: error => console.error(error)
        })
    }, [])

    
    const onRegionSelectionChange = (evt, value, reason) => {
        if(value) {
            const params = {
                iso: value.iso,
                date: moment().subtract(1, "days").format('YYYY-MM-DD')
            }
    
            return getReports({
                params, 
                onSuccess: response => setReport(response.data), 
                onError: error => console.error(error)
            })
        }
        return setReport([])
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
                {report && report.length > 0 && (
                    <ul className={'report'}>
                        {report.map(r => (
                            <li>
                                <span style={{marginRight: 20}}>{`Data: ${r.date}`}</span>
                                <span style={{marginRight: 20}}>{`Regione: ${r.region.province || r.region.name}`}</span>
                                <span>{`Contagi: ${r.confirmed}`}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <footer>
                <p>COVID-19 pandemic progression monitor</p>
            </footer>
        </div>
    );
}

export default App;
