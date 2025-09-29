import React from 'react';
import './globals.css';
import Header from '../components/layout/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-4">
                © {new Date().getFullYear()} Friend Connection Baptist Church
            </footer>
        </div>
    );
};

export default Layout;