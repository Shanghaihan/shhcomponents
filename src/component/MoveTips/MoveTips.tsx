import React, { useEffect, useRef, useState } from 'react' 
import styles from './index.module.scss'
import cn from 'classnames'
import ReactDOM from 'react-dom';
                            
                           
export const MoveTips:React.FC = ()=>{
    const ref = useRef<HTMLDivElement>(null);
    const [state,setState] = useState<boolean>(true);
    useEffect(() => {
        let x:number = 0;
        let y:number = 0;
        let flagX:boolean=false;
        let flagY:boolean=false;
        const times:NodeJS.Timeout= setInterval(()=>{
            if(ref.current){
                ref.current.style.left = x + 'px';
                ref.current.style.top  = y + 'px';
                if(x===document.body.clientWidth - 100){
                    flagX = true;
                }else if(x === 0){
                    flagX = false;
                }
                if(y===document.body.clientHeight - 100){
                    flagY = true;
                }else if(y === 0){
                    flagY = false;
                }
                flagX===false?x++:x--;
                flagY===false?y++:y--;
            }
            if(state===false){
                clearInterval(times);
            }
        },10);
        return () => {
            clearInterval(times);
        }
    }, [state])
    return ReactDOM.createPortal(
        <div    ref={ref} 
                className={styles.MovetipsBox}
                onMouseOver={()=>{setState(state=>!state)}}
        >
        </div>
    ,document.body)
}

