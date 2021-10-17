import logo from './assets/logo.png';
import './App.css';

function App() {
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
          <p>grafico</p>
      </div>
      <footer>
          <p>COVID-19 pandemic progression monitor</p>
      </footer>
    </div>
  );
}

export default App;
