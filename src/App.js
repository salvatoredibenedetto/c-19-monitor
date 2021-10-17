import React, {useEffect, useState} from 'react';
import logo from './assets/logo.png';
import { getRegions, getReports } from './services/main';
import {getChartConfig} from './chart.utils';
import Filters from './Filters';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';
import './App.css';

function App() {
    const [regions, setRegions] = useState()
    const [report, setReport] = useState()
    const [chartConfig, setChartConfig] = useState()
    const [selectedCountry, setSelectedCountry] = useState()

    useEffect(() => {
        getRegions({
            onSuccess: response => setRegions(response.data), 
            onError: error => console.error(error)
        })
    }, [])

    useEffect(() => {
        if(report) {
            setChartConfig(getChartConfig({report, selectedCountry}))
        }
    }, [report])
    
    const onRegionSelectionChange = (evt, value, reason) => {
        if(value) {
            const date = moment().subtract(1, "days").format('YYYY-MM-DD')
            setSelectedCountry({...value, date })
            const params = {
                iso: value.iso,
                date
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
                {report && report.length > 0 && chartConfig && (
                    <div className={'chartContainer'}>
                        <div className={'chartSizer'}>
                            <Bar options={chartConfig.options} data={chartConfig.data}/>
                        </div>
                    </div>
                )}
            </div>
            <footer>
                <p>COVID-19 pandemic progression monitor</p>
            </footer>
        </div>
    );
}

export default App;
