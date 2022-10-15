import React from 'react';
import Home from './Routes/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Collections from './Routes/Collections';
import Charts from './Routes/Charts';

import { AnimatePresence } from 'framer-motion'

export default function App() {
    const location = useLocation()
    return (
        <div className='w-full'>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Collections' element={<Collections />} />
                    <Route path='/Charts' element={<Charts />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}
