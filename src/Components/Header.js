import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <div className="navbar bg-base-300">
  <Link className="btn btn-ghost normal-case text-xl" to='/shop'>Shop</Link>
  <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to='/cart' >Cart</Link>
            </div>
        </div>
    );
};

export default Header;