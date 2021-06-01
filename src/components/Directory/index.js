import React from 'react';
import { Link } from 'react-router-dom';
import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomens.jpg';
import ShopGrocery from './../../assets/shopGrocery.jpg';
import ShopElectronics from './../../assets/shopElectronics.jpg';
import ShopHome from './../../assets/shopHome.jpg';
import ShopAppliances from './../../assets/shopAppliances.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <Link to="/search/womens">
            Shop Women
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
          <Link to="/search/mens">
            Shop Men
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopGrocery})`
          }}
        >
          <Link to="/search/grocery">
            Shop Grocery
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopElectronics})`
          }}
        >
          <Link to="/search/electronics">
            Shop Electronics
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopHome})`
          }}
        >
          <Link to="/search/home decor">
            Shop Home Decor
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopAppliances})`
          }}
        >
          <Link to="/search/appliances">
            Shop Appliances
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
