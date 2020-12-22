import React, { Children, useState } from 'react';
import styles from './index.module.scss'
import cn from 'classnames'
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import App from '../../App';
import { info } from 'console';
export enum Color {
    info = 'info',
    success = 'success',
    warning = 'warning',
    error = 'error'
}
export interface NotificationProps{
    color?:Color,
    onDelete?:Function,
    autoClose?:boolean,
}
export const Notification:React.FC<NotificationProps> = ({color = Color.info,autoClose=true,children,onDelete})=>{
    const [isClosing,setIsClosing] = useState(false);
    useEffect(() => {
        if(isClosing){
            const timer = setTimeout(()=>{
                let element = document.getElementById('notifyContainer');
                let elements = document.getElementById('5')
                if(element &&elements){
                    //@ts-ignore
                    document.body.removeChild(element);
                    //@ts-ignore
                    document.body.removeChild(elements);
                }
            },300);
            return () => {
                clearTimeout(timer);
              };
        }
      }, [isClosing]);
      useEffect(() => {
          if(autoClose){
            const timer = setTimeout(()=>{
               setIsClosing(true)
            },5000);
            return () => {
                clearTimeout(timer);
            }
        }
      }, [autoClose])
    return ReactDOM.createPortal(
        <div id="5"  className={cn([
            styles.container,
            {
              [styles.shrink]: isClosing,
            },
          ])}
        >
            <div className={cn([styles.notification,
                                styles[color],
                                {
                                    [styles.slideIn]:!isClosing,
                                    [styles.slideOut]:isClosing,            
                                }])}>
                {children}
                <button type="button" className={styles.closeButton} onClick={()=>{setIsClosing(true)}}>
                    x
                </button>
            </div>
        </div>
    ,document.body)
}
function createContainer(): Element {
    const portaId = "notifyContainer";
    let element = document.querySelector(`#${portaId}`)
    element = document.createElement('div');
    element.setAttribute('id', portaId);
    element.className = styles.container;
    document.body.append(element);
    return element;
  }
 
const sMessage =(function(){
   
    const info =(children:any)=>{ 
        let container = createContainer();
        ReactDOM.render(<Notification color={Color.info}>{children}</Notification>,container);  
    }
    const success =(children:any)=>{
        let container = createContainer();
        ReactDOM.render(<Notification color={Color.success}>{children}</Notification>,container);  
    }
    const warning =(children:any)=>{ 
        let container = createContainer();
        ReactDOM.render(<Notification color={Color.warning}>{children}</Notification>,container);  
    }
    const error =(children:any)=>{
        let container = createContainer();
        ReactDOM.render(<Notification color={Color.error}>{children}</Notification>,container);  
    }
    return{
        info,success,warning,error
    }
})()


export default sMessage;



