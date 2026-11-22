import styles from './styles.module.css'
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper} style={{backgroundImage: `url(${item?.fields?.thumbnail})`}}></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.webTitle}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.webPublicationDate)}
          {item.fields?.byline ? ` by ${item.fields.byline}` : ""}
        </p>
      </div>

    </li>
  )
}

export default NewsItem