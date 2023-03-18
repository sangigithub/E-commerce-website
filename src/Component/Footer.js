import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <section className='subscribe mb-5'>
    <div className='container text-center'>
        <h6>Keep updated & Get Unlimited Offers</h6>
        <p>Sign up for our newsletter to receive updates & exclusive offers</p>
        <input type='text' name='email' placeholder='Your Email Address' className='mail'/>
        <button>SUBSCRIBE</button>
    </div>
    </section>
    <section className='foot mt-5'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-2'>
                    <h6 className='py-4'>Download App</h6>
                    <img src={require('../img/qr.png')} className="d-block w-100 py-4" alt="..." />
                    <p>For better user experience<br/> please download SD App</p>
                    <Link to=''><img src={require('../img/play.png')} className="d-block w-100 py-3" alt="..." /></Link>
                    <Link to=''><img src={require('../img/apple.png')} className="d-block w-100 py-3" alt="..." /></Link>
                </div>
                <div className='col-lg-2'>
                    <h6 className='py-4'>About Us</h6>
                    <ul>
                        <li><a href=''>About Sastodeal</a></li>
                        <li><a href=''>Careers</a></li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                <h6 className='py-4'>Information</h6>
                    <ul>
                        <li><a href=''>FAQ</a></li>
                        <li><a href=''>Return & Refund Policy</a></li>
                        <li><a href=''>Privacy Policy</a></li>
                        <li><a href=''>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                <ul className='paaddd'>
                        <li><a href=''>Feature your Business</a></li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                    <h6 className='py-4'>Follow us on</h6>
                    <ul>
                        <li><a href=''><i class="fa-brands fa-square-facebook fb"></i>Facebook</a></li>
                        <li><a href=''><i class="fa-brands fa-instagram yt"></i>Instagram</a></li>
                        <li><a href=''><i class="fa-brands fa-youtube yt"></i>Youtube</a></li>
                    </ul>
                </div>
                <div className='col-lg-2'>
                <h6 className='py-4'>Customer Support</h6>
                    <ul>
                        <li className='fsize'>Sastodeal Customer Service<br/> Hours:</li>
                        <li className='fsize'>Sunday - Friday: 9 AM to 6 PM<br/> (Call Support)</li>
                        <li className='fsize'>You can also mail us at</li><a href='' className='nlink'>support@sastodeal.com</a>
                        <li className='fsize'>For more information, visit</li><a href='' className='nlink'>RAISE A TICKET</a>
                        <h5>Vendor Support</h5>
                        <li className='fsize'>Call us at</li><a href='' className='nlink'>015970000</a>
                        <li className='fsize'>Sunday - Friday: 9 AM to 6 PM</li>
                        <li className='fsize'>You can also mail us a</li><a href='' className='nlink'>vendorsupport@sastodeal.com</a>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section className='lfoot py-3'>
        <div className='container'>
            <p>Sastodeal Pvt. Ltd., <span>Nagpokahri, Kathmandu, Nepal</span></p>
        </div>
    </section>
    </>
  )
}

export default Footer