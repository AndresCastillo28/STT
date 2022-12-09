import { NoPayments, Home, Navbar } from "../"
import { useAuthStore } from "../../hooks";



export const Dashboard = () => {
  const { user } = useAuthStore();

  if(user.pago === false) {
    return (
      <NoPayments/>
    )
  }
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}
