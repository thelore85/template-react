import React from 'react';
import './Product.css';

const Product = () => {
  return(
    <section id="product">
      <div className="wrapper">

          {/* <div className="row vertical-align">
            <h2 className="session-title">How we can help</h2>
          </div> */}

          <div className="row vertical-align">

            <div className="product-content-wrapper col-md-3">
              <h2><i class="fa-solid fa-laptop-code"></i> FRONT END</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>

            <div className="product-content-wrapper col-md-3">
              <h2><i class="fa-solid fa-code"></i> BACK END</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>

            <div className="product-content-wrapper col-md-3">
              <h2><i class="fa-solid fa-pencil"></i> CMS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>

            <div className="product-content-wrapper col-md-3">
              <h2><i class="fa-solid fa-cart-shopping"></i> E-COMMERCE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
            </div>

          </div>



          
          <div className="row vertical-align">
            <div className="button-wrapper">
              <button type="button" className="btn btn-secondary">View my Portfolio</button>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Product;