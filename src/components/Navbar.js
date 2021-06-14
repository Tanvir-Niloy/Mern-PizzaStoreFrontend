import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

export default function Navbar() {

    const cartstate = useSelector(state => state.cartReducer)

          return (

            <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
   <div className="container-fluid">
    <a className="navbar-brand" href='/' >Pizza<span>King</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">Login</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href='/cart'>Cart {cartstate.cartItems.length}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>       
                    </div>
          )
}
