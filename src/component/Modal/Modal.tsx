import { fireEvent } from '@testing-library/react';
import React, { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cn from 'classnames'
import styles from './index.module.scss'
import ReactDOM from 'react-dom';


type ModalProps =  Partial<{
    visible:    boolean;
    title:      string
    footer:     React.ReactNode
}>
const SModal:React.FC<ModalProps> = (({visible,title,children,footer}) => {
    const firstUpdate = useRef(true)
    const [modalVisible,setModalVisible] = useState(visible);
    useEffect(() => {
        if(!firstUpdate.current){
            setModalVisible(modalVisible=>!modalVisible)
        }
        else{
            firstUpdate.current =false;
        }
    }, [visible])
    return ReactDOM.createPortal(
        <div>
            <div className={cn(
                            styles.Modal,
                            {
                                [styles.modalVisible]:!modalVisible,
                            }
                         )
                        }
            onClick={():void=>{setModalVisible(modalVisible=>!modalVisible);document.body.style.overflow='hidden'}}
            >
        </div>
        <div className={cn( styles.modalBox,
                            {    [styles.vislible]:!modalVisible,   
                                 [styles.slideIn]:modalVisible,
                                 [styles.slideOut]:!modalVisible
                            }
                        )}>
                <div className = {styles.boxHeader}>{title}</div>
                <div className = {styles.boxContent}>{children}</div>
                <div className = {styles.boxFooter}> {footer}</div>
            </div>
        </div>       
    ,document.body)
})

export default SModal;