import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Tutorial} from '../home';
import { Dashboard, Doctors, Rutinas, Trainers } from '../client';
import { DashboardTrainer } from '../trainer';

import { useAuthStore } from '../hooks';
import { Clientes } from '../trainer/';


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
                    <Route path="/tutorial" element={<Tutorial />} />
                </>
            </Routes>
        )
    }

    if( status === 'authenticated' ) {
        if (user.rol === 'trainer') {
            return(
                <Routes>
                    <Route path='/*' element={ <DashboardTrainer/> } />
                    <Route path='/clientes' element={ <Clientes/> } />
                </Routes>
            )
        }else if (user.rol === 'client'){
            return ( 
                <Routes>
                    <Route path='/' element={ <Dashboard /> }/>
                    <Route path='/doctors' element={ <Doctors /> }/>
                    <Route path='/rutina' element={ <Rutinas /> } />
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