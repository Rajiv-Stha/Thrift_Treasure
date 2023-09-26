
import styles from "./hero.module.css"
import {Link} from "react-scroll"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.hero_left}>
        <h1 className={styles.hero_heading}>THRIFT TREASURE</h1>
        <div className={styles.para}>
        <p>Explore Unique Vintage Pieces, Eco-Friendly</p>
        <p>Trends, and More.</p>
        <p>Join the Thrift revolution</p>
        </div>
        <Link  to={"scrollProduct"} smooth={true} duration={500} className={styles.hero_btn}>Start Shopping</Link>
      </div>
     
    </div>
  )
}

export default Hero
