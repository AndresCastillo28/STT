import { Navbar } from '../components/Navbar'
import { Login, Register } from '../../auth'
import { Hero } from '../'

export const Home = () => {
  return (
    <>
        <Navbar />
        <Login />
        <Register />
        <Hero/>
    </>
  )
}
