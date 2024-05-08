import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './component/AboutUs'
import ContactUs from './component/ContactUs'
import Main from './component/Main'
import Product from './component/Product'
import ProductDes from './component/ProductDes'
import { apiUrl } from './config/apiUrls'
import { getRequest } from './config/httpRequest'
import { addWebDetails } from './redux/webDetailsSlicer'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    getWebDetails()
  }, [])

  const getWebDetails = () => {

    const url = apiUrl.webDetails.getWebDetails

    getRequest(url).then((data) => {
   
      dispatch(addWebDetails(data.data.webData))
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/productDetails/:id' element={<ProductDes />} />
      </Routes>
      <Footer />

      <Toaster />
    </>
  )
}

export default App
