import React from 'react';
import './Product.css';

const Product = () => {
  return(
    <section id="product">
      <div className="wrapper">

          <div className="row vertical-align">
            <div className="product-content-wrapper col-md-3">
              <h2>HTML</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>

            <div className="product-content-wrapper col-md-3">
              <h2>CSS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>

            <div className="product-content-wrapper col-md-3">
              <h2>JAVASCRIPT</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>


            <div className="product-content-wrapper col-md-3">
              <h2>REACT</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>
          </div>
          
          <div className="row vertical-align">
              <button type="button" className="btn btn-secondary">Start Now</button>
          </div>

      </div>
    </section>
  )
}

export default Product;