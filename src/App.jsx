import Card from './components/Card';
import ProductCard from './components/ProductCard';
const product = { name: "무선 키보드", price: 39000, brand: "EZTECH"};
const {name, price, brand} = product;

  console.log(name,price,brand);

  
  
  function App() {
    
    
    const products = [
        { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
        { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
        { id: 3, name: "모니터", price: 199000, brand: "EZTECH" }
      ];
      

    
    const listbyMap = products.map(product => <ProductCard key={product.id} name={product.name} price={product.price} brand={product.brand}/>);
    
    return (
      
    <>
    <Card name={name} price={price} brand={brand} />

  {listbyMap}
  </>
  );
}

export default App;
