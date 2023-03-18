import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Ndata from './Pdata';

function Nslider() {
  return (
    <>
    <section className='winter text-center mt-5 mb-3 pt-5 pb-2'>
    <h5>BE READY FOR WINTER</h5>
    <div className='container mx-5'></div>
    <hr/>
    <OwlCarousel className='owl-theme' loop margin={10} nav items={7} dots={false}>
        {Ndata.map((b)=>(
        <div class='item'>
        <Link to={`detail/${b.id}`}><img src={b.cover} className="d-block w-100" alt="..." />
            <h8 className='py-3 hf'>{b.name}</h8></Link>
        </div>
        ))}
    
  
</OwlCarousel>;
    </section>
    </>
  )
}

export default Nslider