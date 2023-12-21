import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Invoice from './Screens/InvoiceList'
import InvoiceDetails from './Screens/InvoiceDetails';
import InvoiceList from './Screens/InvoiceList';
import BasicModal from './Screens/BasicModal';
import Dashboard from './Screens/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Dashboard/>} />
        <Route path='/invoice_details' element={<InvoiceDetails />} />
        <Route path='/modal' element={<BasicModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
