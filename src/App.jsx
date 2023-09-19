import { useState } from 'react'
import Form from './components/Form/From'
import ProductList from './components/Products/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form/>
    <ProductList/>
    </>
  )
}

export default App
