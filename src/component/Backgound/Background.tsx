import React from 'react' 
import styles from './index.module.scss'
import cn from 'classnames'
                            
                           
export const Backgound:React.FC = ()=>{

   return(
       <ul className={styles.Background}>
           {[1,2,3,4,5,6,7,8].map(item=>{return <li key={item}></li>})}
       </ul>
   )
}
