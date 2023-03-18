import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './Details'



function Header() {
  return (
    <>
   <section className='top'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 d-flex'>
                <h9 className='hf pt-2'>Connect with Us</h9>
                <nav>
                    <ul className='d-flex gap-3'>
                        <li><Link to=''><i class="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link to=''><i class="fa-brands fa-instagram"></i></Link></li>
                        <li><Link to=''><i class="fa-brands fa-twitter"></i></Link></li>
                    </ul>
                </nav>
            </div>
            <div className='col-lg-6 text-end'>
                    <h9 className='hf pt-4'>SELL ON SASTODEAL | RAISE A TICKET | TRACK ORDER</h9>
            </div>
        </div>
    </div>
   </section>
   
   <section className='logo mb-3'>
    <div className='con'>
        <div className='row'>
            <div className='col-lg-9'>
                <Link to=''><img src={require('../img/logo.png')} width='27%'/></Link>
                <Link to='' className='btn'>Search entire store here...</Link><i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='col-lg-3 d-flex gap-5'>
                     <div className='d-flex py-2'>
                        <i class="fa-solid fa-user py-2"></i><Link to='' className='hf px-2'>Namaste, Sign In<br/>My Account<i class="fa-solid fa-angle-down angled"></i></Link>
                        </div> 
                        <div className='d-flex py-2 px-2'>
                        <Link to='' className='hf px-2 position-relative'><i class="fa-solid fa-cart-shopping py-2"></i>
                        <span class="position-absolute top-0 start-70 translate-middle p-2 bg-success text-white border border-light rounded-circle">0
  </span>My Cart<i class="fa-solid fa-angle-down angled"></i></Link>
                    </div>
            </div>
        </div>
    </div>
   </section>

   <section className='menu'>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          DAILY NEEDS
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item colr" href="#">FOOD ESSENTIALS</a></li>
                <li><a class="dropdown-item" href="#">RICE & RICE PRODUCTS</a></li>
            <li><a class="dropdown-item" href="#">COOKING OILS & VINEGAR</a></li>
            <li><a class="dropdown-item" href="#">FLOUR PRODUCTS</a></li>
            <li><a class="dropdown-item" href="#">BEANS & LENTILS PRODUCTS</a></li>
            <li><a class="dropdown-item" href="#">HOT BEVERAGES</a></li>
            <li><a class="dropdown-item" href="#">BISCUIT & COOKIES</a></li>
            <li><a class="dropdown-item" href="#">SALTY SNACKS & NAMKEENS</a></li>
            <li><a class="dropdown-item" href="#">BREAKFAST ESSENTIALS</a></li>
            <li><a class="dropdown-item" href="#">NOODLES & PASTA</a></li>
            <li><a class="dropdown-item" href="#">INSTANT SOUP</a></li>
            <li><a class="dropdown-item" href="#">SAUCE SPREAD & SYRUP</a></li>
            <li><a class="dropdown-item" href="#">PICKLES & CHUTNEY</a></li>
            <li><a class="dropdown-item" href="#">DRY FRUITS</a></li>
            <li><a class="dropdown-item" href="#">SUGAR SALT MASALAS & SPICES</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ELECTRONICS & APPLIANCES
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          LIFESTYLE
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          MENS FASHION
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          WOMENS FASHION
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          BOOKS
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          MYNTRA
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
        <li class="nav-item dropdown-has-megamenu">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          DIGITAL GOODS
          </a>
          <ul class="dropdown-menu megamenu">
           <div className='row'>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='col-lg-3'>
                <ul>
                <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
           </div>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </section>
   <Routes>
    <Route path='/detail/:id' element={<Details/>}></Route>
   </Routes>
    </>
  )
}

export default Header