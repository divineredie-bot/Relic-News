import styles from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import NewsItem from "../NewsItem/NewsItem.jsx";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.slice(1).map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList