import BlackSale from "../../components/BlackSale/BlackSale"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import TopNav from "../../components/TopNav/TopNav"
import Category from "../../components/category/Category"
import styles from "./homepage.module.css"
const Homepage = () => {
  return (
    <div className={styles.homepage_container}>
      <Navbar/>
      <Hero/>
      <Category/>
      <BlackSale/>
    </div>
  )
}

export default Homepage
