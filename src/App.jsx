import Navbar from './components/Navbar'
import RouterView from './router'
import Footer from './components/Footer'
import './styles/style.css'

export default function App(){
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <RouterView />
      </div>
      <Footer />
    </>
  )
}