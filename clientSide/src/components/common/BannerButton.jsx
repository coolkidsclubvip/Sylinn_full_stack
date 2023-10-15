import * as styles from "../../styles/components/BannerButton.css"

function BannerButton({children}) {
  return <button className={styles.button}>{children}</button>;
}

export default BannerButton