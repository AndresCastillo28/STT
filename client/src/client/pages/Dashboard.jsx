import { NoPayments, Home, Navbar } from "../"
import { useAuthStore } from "../../hooks";



export const Dashboard = () => {
  const { user } = useAuthStore();

  if(user.pago === false) {
    return (
      <>
        <Navbar />
        <NoPayments/>
      </>
    )
  }
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}
