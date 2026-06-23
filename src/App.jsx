import Card from './components/Card'
const product = { name: "무선 키보드", price: 39000, brand: "EZTECH"};
const {name, price, brand} = product;

  console.log(name,price,brand);

function App() {


  return (
    <Card name={name} price={price} brand={brand} />
  )
}

export default App
