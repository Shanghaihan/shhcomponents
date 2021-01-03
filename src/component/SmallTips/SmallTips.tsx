import React, { CSSProperties, useState } from 'react' 
import styles from './index.module.scss'
import cn from 'classnames'
                            


interface Props{
    style?:CSSProperties
}
export const SmallTips:React.FC<Props> = ({style})=>{
    const [state,setState] = useState(false);

   return(
       <div className={styles.SmallTips} style={style}>
           <div className={
                            cn( styles.card,
                                {
                                    [styles.close]:!state
                                }
                            )
                }
            >
                <div style={{fontSize:'25px'}}>你好呀</div>

           </div>
            <div className={cn(styles.control,{[styles.close]:state})} onClick={()=>setState(state=>!state)}></div>


       </div>
   )
}
