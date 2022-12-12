import { useEffect } from "react";
import { useClientStore } from "../../hooks/"

export const ViewClients = () => {

  const { startLoadingAClients } = useClientStore();


  useEffect(() => {
    startLoadingAClients()
    
  }, [])

//   if (isLoadingAppointments === true) {
//     return (
//       <div className="text-center">
//         <div className="spinner-border" style={{ width: '6rem', height: '6rem' }} role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="container mt-5 text-white fs-1">
      Hola
    </div>
  )
}
