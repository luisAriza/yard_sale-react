// import React from 'react';
import "@style/login.scss";
import logo from "@logo/logo_yard_sale.svg";

const Login = () => {
	return (
	
	<main id="main">
		<section className="login-section login">
			<section className="login-section__container login__container">
				<a href="/" className="logo login__logo" >
					<img src={logo} alt="Logo"/>
				</a>
				<form className="form login__form">
					{/* Email */}
					<label htmlFor="email" className="label">Email address</label>
						<input type="text" id="email" placeholder="email@example.com" className="input login__input--email" />
					{/* Contraseña */}
					<label htmlFor="password" className="label">Password</label>
						<input type="password" id="password" placeholder="****************" className="input login__input--password" />
					{/* Boton de envío */}
					<input type="submit" value="Log in" className="primary-button login__button"/>
					<a href="/recovery-password" className="login__recovery-password">Forgot my password</a>
				</form>
			</section>
			<button className="secondary-button login__button--signup ">Sign Up</button>
		</section>
	</main>

	)
}

export default Login;
