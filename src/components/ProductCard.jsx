import styles from "./ProductCard.module.css"

export default function ProductCard({ name, price , brand }) {
  return (
   <article className={styles.cardItem}>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{brand}</p>
   </article>
  );
}