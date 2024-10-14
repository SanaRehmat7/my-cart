import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navabar.js';
import ProductList from './components/ProductList.js';
import React, {useState} from 'react';
import Product from './components/Product.js';
import Footer from './components/Footer.js';
import AddItem from './components/AddItem.js';


function App() {
  const products = [
    { price: 99999, name: "IPhone 10S", quantity: 0 },
    { price: 9999, name: "Redmi note 11S", quantity: 0 },
  ];

  const [productList, setProductList] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = productList.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount =
      totalAmount - newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1); 
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (product) => {
    let newProductList = [...productList];
    newProductList.push({
      name: product.productName,
      price: product.productPrice,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} /> 
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
