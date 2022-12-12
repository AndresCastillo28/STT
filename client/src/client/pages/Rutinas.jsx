import { Navbar } from '../';
import ReactPlayer from 'react-player'

export const Rutinas = () => {
  return (
    <>
        <Navbar/>
        <div className="container mt-5 text-white">
            <div className="row">
                <div className="col-6   ">
                    <h1 className='text-white text-center'>Ejercicios de Pecho</h1>
                    <ReactPlayer url='https://www.youtube.com/watch?v=HzJJ755gULQ' width='90%' />
                </div>
                <div className="col">
                    <h1 className='text-center'>Ejercicios de Espalda</h1>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ocmgqJ3eJwI' width='90%' />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1 className='text-center'>Ejercicios de Pierna</h1>
                    <ReactPlayer
                     url='https://www.youtube.com/watch?v=SXxM-2gXkiE'
                     width='90%'
                    />
                </div>
                <div className="col">
                    <h1 className='text-center'>Ejercicios de Hombro</h1>
                    <ReactPlayer url='https://www.youtube.com/watch?v=90Y3R9LOg6s' width='90%' />
                </div>
            </div>
        </div>
    </>
  )
}
