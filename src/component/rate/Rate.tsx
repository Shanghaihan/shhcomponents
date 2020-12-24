import React from 'react' 
import styles from './index.module.scss'
import cn from 'classnames'
                            
                           
export const SRate:React.FC = ()=>{

   return(
       <div className={styles.Rate}>
           <input type="radio" name="rate"></input>
           <input type="radio" name="rate"></input>
           <input type="radio" name="rate"></input>
           <input type="radio" name="rate"></input>
           <input type="radio" name="rate"></input>
       </div>
   )
}
