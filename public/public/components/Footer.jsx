import React from 'react'
import './styles/bulma.css'
import image1 from './img/vk.svg'
import image2 from './img/teleg.svg'
import image3 from './img/mail.svg'
import image4 from './img/ProgrezzzLogo.png'

const Footer = () => {
  return (
        <div className="columns all bottombar" style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'}}>
    <div className="column" style={{height: '100px', width: '100px', marginLeft: '450px'}}>
        <h1 style={{fontSize: '25px', paddingTop: '5px'}}>Социальные сети</h1>
        <div>
        <a href="https://vk.com/ecrowdfun" style={{marginLeft: '65px'}}><img src={image1} /></a>
        <a href="https://t.me/ecrowdfun"><img src={image2}/></a>
        </div>
    </div>
    <div className="column" style={{height: '100px', width: '100px'}}>
        <h1 style={{fontSize: '20px'}} className="column">Почта технической поддержки</h1>
        <a href="mailto:dgd.dogooddeeds@gmail.com" className="columns" style={{textDecoration: 'none'}}>
        <img src={image3} className="column" style={{height: '3em', width: '3em', marginTop: '-10px', marginRight: '-30px'}} /><h1 style={{fontSize: '20px', marginRight: '100px'}}>e-crowd@gmail.com</h1>
        </a>
    </div>
    <img src={image4} style={{width: '200px', height: '3.5rem', marginTop: '15px', marginRight: '500px'}} />
    </div>
  )
}

export default Footer