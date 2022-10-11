import React from 'react';
import Home from './Routes/Home';
import { Routes, Route } from 'react-router-dom';
import Collections from './Routes/Collections';

export default function App() {
    return (
        <div className='w-full'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Collections' element={<Collections />} />
            </Routes>
        </div>
    );
}
