import {useState,useEffect} from 'react'
import * as styles from "../../styles/layout/BacktoTopBtn.css"




function BacktoTopBtn() {
  //a global scroll parameter and handleScroll function
  const [isShow, setIsShow] = useState(false);
  const [scrollTop, setScrollTop] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // get window scroll position
      setScrollTop(scrollTop);
       if (scrollTop >= 500) {
         setIsShow(true);
       } else {
         setIsShow(false);
       }
    };
   

    // Add scroll listener to window object
    window.addEventListener("scroll", handleScroll);



  }, []);
  
const handleClick=()=>{
  window.scrollTo({ top: 0, behavior: "smooth" });
}


  return <div style={{ display: `${isShow?'block':'none' }` }} className={styles.btn} onClick={handleClick}> </div>;
}

export default BacktoTopBtn