import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Enquieries from './pages/Enquieries';
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcat from './pages/Addblogcat';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addproduct from './pages/Addproduct';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/admin" element={<MainLayout />} >
         <Route index element={<Dashboard />} />
         <Route path="enquiries" element={<Enquieries />} />
         <Route path="blog-list" element={<Bloglist />} />
         <Route path="Blog" element={<Addblog />} />
         <Route path="BLog-category-list" element={<Blogcatlist />} />
         <Route path="bLog-category" element={<Addblogcat />} />
         <Route path="Category" element={<Addcat />} />
         <Route path="Orders" element={<Orders />} />
         <Route path="customers" element={<Customers />} />
         <Route path="color-list" element={<Addcolor />} />
         <Route path="color" element={<Colorlist />} />
         <Route path="Category-list" element={<Categorylist />} />
         <Route path="product-list" element={<Productlist />} />
         <Route path="product" element={<Addproduct />} />

      </Route>
    </Routes>
   </Router>
  );
};

export default App;
