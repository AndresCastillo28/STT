import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from '../home';
import { Dashboard, Doctors, Trainers } from '../client';
import { DashboardTrainer } from '../trainer';

import { useAuthStore } from '../hooks';


export const AppRouter = () => {

    const { status, checkAuthToken, user } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])



    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }


    if (status === 'not-authenticated') {
        return (
            <Routes>
                <>

                    <Route path="/*" element={<Home />} />
                </>
            </Routes>
        )
    }

    if( status === 'authenticated' ) {
        if (user.rol === 'trainer') {
            return(
                <Routes>
                    <Route path='/*' element={ <DashboardTrainer/> } />
                </Routes>
            )
        }else if (user.rol === 'client'){
            return ( 
                <Routes>
                    <Route path='/' element={ <Dashboard /> }/>
                    <Route path='/doctors' element={ <Doctors /> }/>
                    <Route path='/trainers' element={ <Trainers /> }/>
                    <Route path='/*' element={ <Navigate to="/" /> } />

                </Routes>
             )
        }
    }

    // return (
    //     <Routes>
    //         {
    //             (status === 'not-authenticated')
    //                 ? (
    //                     <>
    //                         {/* <Route path="/auth/*" element={<Home />} /> */}
    //                         <Route path="/*" element={<Home />} />
    //                     </>
    //                 )
    //                 : (
    //                     <>
    //                         <Route path="/" element={<Dashboard />} />
    //                         <Route path="/doctors" element={<Doctors />} />
    //                         <Route path="/trainers" element={<Trainers />} />
    //                         <Route path="/*" element={<Navigate to="/" />} />
    //                     </>
    //                 )
    //         }

    //     </Routes>
    // )

}