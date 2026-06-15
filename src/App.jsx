import useProducts from './hooks/useProducts'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {

const { products, addProduct, deleteProduct, updateProduct } = useProducts();
    

  return (
    <>
    <div>Bonjour</div>
    </>
  )
}

export default App
