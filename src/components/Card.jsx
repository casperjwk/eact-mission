export default function Card({ name, price , brand }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{brand}</p>
    </div>
  );
}