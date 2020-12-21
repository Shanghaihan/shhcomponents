import React from 'react';
import styles from './index.module.scss'
import cn from 'classnames'
import ReactDOM from 'react-dom';
export enum Color {
    info = 'info',
    success = 'success',
    warning = 'warning',
    error = 'error'
}
export interface NotificationProps{
    color?:Color,
    onDelete:Function,
}
export const Notification:React.FC<NotificationProps> = ({color = Color.info,children,onDelete})=>{
    return ReactDOM.createPortal(
        <div className={cn([styles.notification,styles[color]])}>
            {children}
            <button className={styles.closeButton} onClick={()=>onDelete()}>
                x
            </button>
        </div>
    ,document.body)
}


