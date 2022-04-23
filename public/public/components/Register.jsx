import React from 'react'
import image1 from '../components/img/logo2.png'
import '../components/styles/blur.css'
import '../components/styles/vendor/bootstrap/css/bootstrap.min.css'
import '../components/styles/vendor/css-hamburgers/hamburgers.min.css'
import '../components/styles/vendor/animsition/css/animsition.min.css'
import '../components/styles/vendor/select2/select2.min.css'
import '../components/styles/vendor/animate/animate.css'
import '../components/styles/util.css'
import '../components/styles/main.css'
import image2 from '../components/img/vectorback.png'


const Register = () => {
  return (
    <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
      <form className="login100-form validate-form">
        <img src={image1} style={{margin: '10px auto 20px', display: 'block'}} />
        <span className="login100-form-title p-b-33">
          Регистрация аккаунта
        </span>
        <div className="wrap-input100 validate-input m-t-20" data-validate="Valid email is required: ex@abc.xyz" style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
          <input className="input100" type="text" name="email" placeholder="Ваш email" />
          <span className="focus-input100-1" />
          <span className="focus-input100-2" />
        </div>
        <div className="wrap-input100 validate-input m-t-20" data-validate="Password is required" style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
          <input className="input100" type="password" name="pass" placeholder="Пароль" />
          <span className="focus-input100-1" />
          <span className="focus-input100-2" />
        </div>
        <div className="container-login100-form-btn m-t-20">
          <a href='/' className="login100-form-btn">
            Регистрация
          </a>
        </div>
        <br/>
        <div className="text-center">
          <span className="txt1">
            Уже есть аккаунт?
          </span>
          <a href="/login" className="txt2 hov1">
            Войдите
          </a>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Register