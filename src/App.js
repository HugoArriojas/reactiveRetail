import './stylesheets/App.css';
import { useState } from 'react';
import SideNav from './components/SideNav';
import HeaderFooter from './components/HeaderFooter';
import ProductContainers from './components/ProductsSection';
import CreditSocials from './components/CreditSocials';
import ShopCart from './components/ShopCart';


function App() {
  // Holding selected category
  const [categoryInput, setCategoryInput] = useState("");
  // Holding current currency conversion
  const [currency, setCurrency] = useState("usd")

  // Handle category selection from sideNav component
  const handleCategory = (cat) => {
    setCategoryInput(cat);
  }

  // Handle currency selection from sideNav component
  const handleCurrency = (cur) => {
    setCurrency(cur);
  }

  return (
    <div className="App">
      <HeaderFooter />

      <ShopCart/>

      <main>
        <SideNav
          handleCurrency={handleCurrency}
          handleCategory={handleCategory}
        />
        <ProductContainers
          currency={currency}
          categoryInput={categoryInput}
          // handleAddToCart={handleAddToCart}
          // handleItemSelection={handleItemSelection}
        />
      </main>
      <HeaderFooter />
      <CreditSocials />

      {/* </App> */}
    </div>

  );
}

export default App;
