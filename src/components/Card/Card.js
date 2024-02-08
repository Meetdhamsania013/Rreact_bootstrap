import styles from "./Card.module.scss";

const Card = (props) => {
  const { item, onCardClickHandler } = props;

  return (
    <>
      <div className={styles.card} onClick={onCardClickHandler}>
        <img src={item.url} alt={item.altText} />
        <div className={styles.title}>{item.text}</div>
      </div>
    </>
  );
};

export default Card;
