import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ServerInfo from './pages/server_info';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <ServerInfo/>
        </BrowserRouter>
    </div>
  );
}

export default App;
