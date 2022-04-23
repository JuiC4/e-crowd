import React from 'react'
import './styles/bulma.css'
import image1 from './img/logo2.png'
import image2 from './img/evatar.svg'



const Navbar = () => {
  return (
    <div style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
        <nav className="navbar" role="navigation" aria-label="main navigation" >
            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="/">
                    <img src={image1} style={{padding: 0}}/> 
                </a>
                <a className="navbar-item" href="/" style={{fontSize: '20px', color: '#FAA43C', zIndex: 9}}>
                E
                </a><a className="navbar-item" href="/" style={{fontSize: '20px', color: '#235E7A', marginLeft: '-25px'}}>
                -Crowd
                </a>
                <a className="navbar-item" style={{fontSize: '20px'}} href="/category">
                Категории
                </a>
                <a className="navbar-item" style={{fontSize: '20px'}} href="/about">
                О нас
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-light" href="/login" style={{fontSize: '20px',marginBottom:'15px'}}>
                    <div className="navbar-item" style={{paddingRight: '10px'}}>
                        <img src={image2}/>
                    </div>
                    <strong>Войти</strong>
                    </a>
                    <a className="button is-light btn" href="/register" style={{fontSize: '20px'}}>
                    Зарегистрироваться
                    </a>
                </div>
                </div>
                </div>
                </div>
            </nav>
            <div>
        </div>
    </div>
  )
}

export default Navbar