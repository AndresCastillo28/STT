import { Navbar, TutorialItem } from '../'
import { Login, Register } from '../../auth'

export const Tutorial = () => {
  return (
    <>
        <Navbar />
        <Login />
        <Register />
        <TutorialItem />
    </>
  )
}
