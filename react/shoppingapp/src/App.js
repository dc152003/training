import React, { Component } from 'react';
import MaleProducts from './components/maleproducts';
import FemaleProducts from './components/femaleproducts';
import KidsProducts from './components/kidsproducts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        { pId: 1, pName: 'Men T-Shirt', pCategory: 'Male', pPrice: 25, pIsInStock: true },
        { pId: 2, pName: 'Women Dress', pCategory: 'Female', pPrice: 45, pIsInStock: true },
        { pId: 3, pName: 'Kids Shorts', pCategory: 'Kids', pPrice: 15, pIsInStock: false },
        { pId: 4, pName: 'Men Jeans', pCategory: 'Male', pPrice: 40, pIsInStock: true },
        { pId: 5, pName: 'Women Top', pCategory: 'Female', pPrice: 30, pIsInStock: true },
        { pId: 6, pName: 'Kids T-Shirt', pCategory: 'Kids', pPrice: 20, pIsInStock: true },
        { pId: 7, pName: 'Men Jacket', pCategory: 'Male', pPrice: 60, pIsInStock: false },
        { pId: 8, pName: 'Women Skirt', pCategory: 'Female', pPrice: 35, pIsInStock: true },
        { pId: 9, pName: 'Kids Hoodie', pCategory: 'Kids', pPrice: 25, pIsInStock: true },
        { pId: 10, pName: 'Men Shoes', pCategory: 'Male', pPrice: 70, pIsInStock: true },
        { pId: 11, pName: 'Women Heels', pCategory: 'Female', pPrice: 55, pIsInStock: false },
        { pId: 12, pName: 'Kids Sneakers', pCategory: 'Kids', pPrice: 30, pIsInStock: true },
      ],
    };
  }

  render() {
    const { productList } = this.state;
    const maleProducts = productList.filter(p => p.pCategory === 'Male');
    const femaleProducts = productList.filter(p => p.pCategory === 'Female');
    const kidsProducts = productList.filter(p => p.pCategory === 'Kids');

    return (
      <div className="App">
        <h1>Welcome to ShoppingApp</h1>
        <MaleProducts products={maleProducts} />
        <FemaleProducts products={femaleProducts} />
        <KidsProducts products={kidsProducts} />
      </div>
    );
  }
}

export default App;