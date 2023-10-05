import * as styles from "./BannerButton.css"

function BannerButton({children}) {
  return <button className={styles.button}>{children}</button>;
}

export default BannerButton