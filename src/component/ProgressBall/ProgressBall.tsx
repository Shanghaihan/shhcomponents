
import React, { CSSProperties } from 'react' 
import styles from './index.module.scss'
import cn from 'classnames'
export const ProgressBall:React.FC = ()=>{

   return(
       <div className={styles.Ball} >
           <div className={styles.wave}>

           </div>
       </div>
   )
}

