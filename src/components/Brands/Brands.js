import React from 'react';
import './Brands.css';

const Brands = () => {
  return(
    <section id="brands">
      <div className="wrapper">

          <div className="row vertical-align">
            <h2 className="session-title">The best technology at your support</h2>
            <p> We stay up to date to the latest developing tecnology. <br/>
            To delivery the best, for you.</p>
          </div>


          <div className="row vertical-align">

            <div className="icon-wrapper">
              <i className="fa-brands fa-square-js"></i>
              <h2 className="brands-name">Javascript</h2>
            </div>

            <div className="icon-wrapper">        
              <i className="fa-brands fa-html5"></i>     
             <h2 className="brands-name">HTML/CSS</h2>
            </div>

            <div className="icon-wrapper">
              <i className="fa-brands fa-react"></i>
             <h2 className="brands-name">react</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-brands fa-github"></i>
             <h2 className="brands-name">Git hub</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-brands fa-node-js"></i>
             <h2 className="brands-name">Node Js</h2>
            </div>

            <div className="icon-wrapper">
            <i class="fa-solid fa-server"></i>
             <h2 className="brands-name">Express js</h2>
            </div>

            <div className="icon-wrapper">
            <i class="fa-solid fa-database"></i>
             <h2 className="brands-name">Mongo db</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-brands fa-python"></i>
             <h2 className="brands-name">Python</h2>
            </div>

            <div className="icon-wrapper">
            <i class="fa-solid fa-database"></i>
             <h2 className="brands-name">SQL</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-brands fa-bootstrap"></i>
             <h2 className="brands-name">Bootstrap</h2>
            </div>

            <div className="icon-wrapper">
              <i class="fa-solid fa-wind"></i>
              <h2 className="brands-name">Tailwind</h2>
            </div>

            <div className="icon-wrapper">
              <i class="fa-brands fa-wordpress"></i>
              <h2 className="brands-name">Wordpress</h2>
            </div>          
          

          </div>

      </div>
    </section>
  )
}

export default Brands;