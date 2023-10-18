import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Invoice from './Screens/InvoiceList'
import InvoiceDetails from './Screens/InvoiceDetails';
import InvoiceList from './Screens/InvoiceList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<InvoiceList/>} />
        <Route path='/invoice_details' element={<InvoiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
