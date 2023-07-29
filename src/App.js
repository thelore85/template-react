import React, { Component } from 'react';
import Menu from './components/Menu/Menu.js';
import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';
import Product from './components/Product/Product.js';
import About from './components/About/About.js';

// css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      darkMode : false,
    }
  }

onDarkModeSwitch = (event) => {
  let darkModeChecked = event.target.checked;
  this.setState({ darkMode : darkModeChecked});
  
  if(darkModeChecked){
    document.documentElement.setAttribute('data-theme', 'dark')
  }else{
    document.documentElement.setAttribute('data-theme', 'light')
  }
  console.log('dark mode:', darkModeChecked)
}


	render(){
		return(
			<div className='app-container'>
				<Menu onDarkMode = {this.onDarkModeSwitch}/>
				<Hero />
				<Product />
				<About />
				<Footer />
			</div>
		)
	}
}

export default App