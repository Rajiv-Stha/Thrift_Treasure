import { ThriftContext } from "../../context/Context"
import styles from "./navbar.module.css"
import {CiSearch,CiShoppingCart,CiBellOn} from "react-icons/ci"
import {useContext} from "react"
import SignOutPopover from "../popover/signout popover/SignOutPopover"
import { Link } from "react-router-dom"
import SearchModal from "../../layouts/modal/SeachModal/SearchModal"

const Navbar = () => {
    const {state:{user}} = useContext(ThriftContext)
  return (
    <div className={styles.navbar}>
    <Link to={"/"} className={styles.logo}>
        <img src="/images/logo.png" alt="logo" className={styles.logo_img} />
        {/* <h2>Thrift treasures</h2> */}
    </Link>

   
    <div className={styles.category}>

        <SearchModal full={true}>
 
        <div className={styles.searchBar}>
             <input type="text" placeholder="search" />
            <CiSearch className={styles.searchIcon} />
           
        </div>
        </SearchModal>
    </div>
    <div className={styles.others}>
        {/* <CiBellOn className={styles.other_icons}/> */}

       
        {user?
         <>
         {/* <p>{user.username}</p> */}
          <Link to={"/upload"} className={styles.sellButton}>
            
            Sell
        </Link>
        <Link to={"/transactions"} className={styles.myTransactions}> My Transactions</Link>

         <SignOutPopover>

         <div className={styles.profileImgWrapper}>
            <img className={styles.profileImg} src={user.image} alt="profile" />
         </div>
         </SignOutPopover>
        </> :
            <Link to={"/login"}>
        <button className={styles.authButton}>Login</button>
        </Link>
        }
        
    </div>
    </div>
  )
}

export default Navbar
