import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
//import DashboardPage from './pages/DashboardPage';
import OrderPage from './pages/OrderPage';
//import ProfilePage from './pages/ProfilePage';
//import NotFoundPage from './pages/NotFoundPage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes: React.FC = () => {
    return (
        //<Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
           {/*<Route path="/dashboard" element={<DashboardPage />} />*/}
            <Route path="/order" element={<OrderPage />} />
            <Route path="/menu" element={<MenuPage />} />
            {/*<Route path="/profile" element={<ProfilePage />} />*/}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
       // </Router>
    );
}

export default AppRoutes;