import React from 'react'
import styles from './index.module.scss'
import cn from 'classnames'




export const SLoading:React.FC = ()=>{
    return(
        <ul className={styles.SLoading}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

                           
export const SSignal:React.FC = ()=>{
   return(
       <ul className={styles.SSignal}>
           <li>
               <div></div>
           </li>
           <li>
                <em></em>
           </li>
           <li>
                <em></em>
           </li>
           <li>
                <em></em>
           </li>
           <li>
                <em></em>
           </li>
       </ul>
   )
}

                    

