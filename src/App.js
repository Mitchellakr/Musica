import React from 'react';
import Home from './Routes/Home';
import { Routes, Route } from 'react-router-dom';
import Collections from './Routes/Collections';
import Charts from './Routes/Charts';

export default function App() {
    return (
        <div className='w-full'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Collections' element={<Collections />} />
                <Route path='/Charts' element={<Charts />} />
            </Routes>
        </div>
    );
}
