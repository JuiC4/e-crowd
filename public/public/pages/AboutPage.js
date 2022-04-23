import React from 'react'
import Navbar from '../components/Navbar'
import '../components/styles/about.css'
import Dju from '../components/img/Дьу.jpg'
import Neko from '../components/img/Никита.jpg'
import Tosha from '../components/img/Толян.jpg'
import Silva from '../components/img/кумир.jpg'
const AboutPage = () => {
  return (
    <>
    <Navbar/>
        <div>
  <div style={{display: 'flex', marginLeft: '40px', marginTop: '40px'}}>
    <div className="block-mate">
      <img className="ava" src={Dju} />
      <h3>Бысыев</h3>
      <h3>Дьулустаан</h3>
      <p>Разработчик<br />+79961202171<br />dbysyev@gmail.com</p>
    </div>
    <div className="block-mate">
      <img className="ava" src={Neko} />
      <h3>Поляков</h3>
      <h3>Никита</h3>
      <p>
        Менеджер<br />
        +79141030300<br />
        polyanchik681@gmail.com</p>
    </div>
    <div className="block-mate" style={{height: '20px', width: '500px'}}>
      <h4>Наша деятельность направлена на поддержку экологии нашей страны путём нахождения финансовой помощи эко-проектам. Вложения осуществляются зачет элементов краудфандинга.</h4>
    </div>
  </div><br />
  <div style={{display: 'flex', marginLeft: '40px'}}>
    <div className="block-mate">
      <img className="ava" src={Tosha} />
      <h3>Афанасьев Анатолий</h3>
      <p>Дизайнер<br />
        +79992451253<br />
        tolaafanasev4@gmail.com</p>
    </div>
    <div className="block-mate">
      <img className="ava" src={Silva} />
      <h3>Сильвестр Сталлоне</h3>
      <p>
        Бета-тестер<br />
        88005553535<br />
        silverstali@gmail.com
      </p>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutPage