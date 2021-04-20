import React from 'react'
import './Header.css';
import img from '../../../Images/hero.jpg';
const Header = () => {
    return (
        <>
            <section className="header-main-area">
            <div className="overly">
                <div className="container">
                        <div className="header-main-flex">
                        <div className="header-info">
                            <h6>Quality Service</h6>
                            <h1>Wanna clean</h1>
                            <h2>Here we are to clean</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing. <br></br> elit Explicabo, praesentium?</p>

                            <button className='btn style'>Get started</button>
                        </div>

                        <div className="header-hero-img">
                            <img src={img} alt="img"/>
                        </div>
                        </div>

                    </div>
            </div>
            </section>   
        </>
    )
}

export default Header
