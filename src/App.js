import React from 'react'
import "./Style.scss"
import { Link } from 'react-router-dom'
import Header from './Component/Header'
import Nslider from './Component/Nslider'
import Slider from './Component/Slider'
import Footer from './Component/Footer'

function App() {
  return (
    <>
     <Header/>
  <Slider/>
  <section className='time'>
    <h4>DEAL OF THE DAY</h4>
  </section>
  <section className='pic'>
    <div className='container-fluid'>
  <img src={require('./img/bath.png')} className="d-block w-100" alt="..." />
  </div>
  </section>
  <section className='images my-4'>
    <div className='image'>
      <div className='row'>
        <div className='col-lg-12'>
        <img src={require('./img/phone.jpg')} className="d-block w-100" alt="..." />
        </div>

        <div className='row'>
          <div className='col-lg-3 my-3'>
          <img src={require('./img/i1.jpg')} className="d-block w-100" alt="..." />
          </div>
          <div className='col-lg-4 my-3'>
            <div className='row'>
              <div className='col-lg-12 mb-4'>
              <img src={require('./img/i2.jpg')} className="d-block m-100" alt="..." />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 mt-4'>
              <img src={require('./img/i3.jpg')} className="d-block m-100" alt="..." />
              </div>
            </div>
          </div>
          <div className='col-lg-5 my-3'>
          <img src={require('./img/i4.jpg')} className="d-block s-100" alt="..." />
          </div>
        </div>
        <div className='col-lg-12'>
        <img src={require('./img/i5.jpg')} className="d-block w-100" alt="..." />
        </div>
      </div>
    
    </div>
  </section>

    <Nslider/>

    <div className='container py-3'>
      <div className='row'>
        <div className='col-lg-4'>
        <Link to=''><img src={require('./img/rs1.jpg')} className="d-block w-100 rs" alt="..." /></Link>
        </div>
        <div className='col-lg-4'>
        <Link to=''><img src={require('./img/rs2.jpg')} className="d-block w-100 rs" alt="..." /></Link>
        </div>
        <div className='col-lg-4'>
        <Link to=''><img src={require('./img/rs3.jpg')} className="d-block w-100 rs3" alt="..." /></Link>
        </div>
      </div>
    </div>

    <section className='stop'>
      <h5 className='text-center pt-4 pb-2'>ONE-STOP STORE</h5>
      <hr/>
      <div className='container pb-5 d-flex gap-5'>
        <div className='pubox'>
        <Link to=''><img src={require('./img/pu1.png')} className="d-block w-100" alt="..." /></Link>
        <h9 className='puf'>Salty Snacks & Namkeens</h9>
        </div>
        <div className='pubox text-center'>
        <Link to=''><img src={require('./img/pu2.png')} className="d-block w-100" alt="..." /></Link>
        <h9 className='puf'>AC</h9>
        </div>
        <div className='pubox text-center'>
        <Link to=''><img src={require('./img/pu3.png')} className="d-block w-100" alt="..." /></Link>
        <h9 className='puf'>Air Coolers</h9>
        </div>
        <div className='pubox'>
        <Link to=''><img src={require('./img/pu4.png')} className="d-block w-100" alt="..." /></Link>
        <h9 className='puf'>Nutriation & Supplements</h9>
        </div>
        <div className='pubox text-center'>
        <Link to=''><img src={require('./img/pu5.png')} className="d-block w-100" alt="..." /></Link>
        <h9 className='puf'>Sofa</h9>
        </div>
        <div className='pubox text-center'>
        <Link to=''><img src={require('./img/pu6.png')} className="d-block w-100" alt="..." /></Link>
        <h9 className='puf'>Flipkart Smartbuy</h9>
        </div>
        <div className='pubox text-center'>
        <Link to=''><img src={require('./img/pu7.png')} className="d-block w-100" alt="..." /></Link>
        <h9 className='puf'>Beauty Care & Grooming</h9>
        </div>
      </div>
    </section>

    <div className='container my-5 py-3'>
      <div className='row'>
        <div className='col-lg-4'>
        <Link to=''><img src={require('./img/shoes.jpg')} className="d-block w-100 rs" alt="..." /></Link>
        </div>
        <div className='col-lg-4'>
        <Link to=''><img src={require('./img/rice.jpg')} className="d-block w-100 rs" alt="..." /></Link>
        </div>
        <div className='col-lg-4'>
        <Link to=''><img src={require('./img/machine.jpg')} className="d-block w-100 rs3" alt="..." /></Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default App