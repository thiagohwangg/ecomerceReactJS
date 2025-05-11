import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import SideBar from '@components/SideBar/SideBar';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import './App.css';
import { StoreProvider } from '@/contexts/storeProdiver';

function App() {
    return (
        <StoreProvider>
            <ToastProvider>
                <SideBarProvider>
                    <BrowserRouter>
                    <SideBar />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                {routers.map((item, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={item.path}
                                            element={<item.component />}
                                        />
                                    );
                                })}
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </SideBarProvider>
            </ToastProvider>
        </StoreProvider>
    );
}

export default App;
