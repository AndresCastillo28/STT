import './css/hero.css'

export const Hero = () => {
  return (
    <div className="container-fluid hero text-white" >
      <div className="container  message-container">
        <div className='text-white message container fs-1  border'>
          Unete
        </div>
      </div>
      <div className="container  mx-6 mt-4 fw-bold hero-title">
        HAZ QUE SEAS EL LUCHADOR
      </div>
      <div className="container">
        <button className='btn btn-danger  fs-2 mt-3'>Prueba un mes gratis</button>
      </div>
    </div>
  )
}
