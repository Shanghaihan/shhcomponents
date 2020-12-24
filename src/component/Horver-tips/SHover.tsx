import React from 'react';
import styles from './index.module.scss'
import cn from 'classnames'
const SHover:React.FC = ()=>{
    return(
        <ul className={styles.SHover}>
            <li data-name="姨妈红"></li>
            <li data-name="基佬紫"></li>
            <li data-name="箩底橙"></li>
            <li data-name="姣婆蓝"></li>
            <li data-name="大粪青"></li>
            <li data-name="原谅绿"></li>
        </ul>


    )
}

export default SHover;