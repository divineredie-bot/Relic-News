import styles from './styles.module.css'
import Image from "../Image/Image.jsx";
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <Image image={item?.fields?.thumbnail} />
      <h3 className={styles.title}>{item.webTitle}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.webPublicationDate)}
        {item.fields?.byline ? ` by ${item.fields.byline}` : ""}
      </p>
    </div>
  )
}

export default NewsBanner