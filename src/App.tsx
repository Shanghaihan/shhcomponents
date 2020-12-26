
import './App.css';
import sMessage from './component/Notification/Notification';
import {SButton}  from './component/Button/sButton'
import React, { useState } from 'react';
import SModal from './component/Modal/Modal';
import SHover from './component/Horver-tips/SHover';
import { Shadow, SLoading, SSignal } from './component/Loading/Loading';
import { Backgound } from './component/Backgound/Background';
import { Cube } from './component/Cube/Cube';
import { SRate } from './component/rate/Rate';
import { ProgressBall } from './component/ProgressBall/ProgressBall';
import { Streamer } from './component/Streamer/Streamer';
  function App() {
    const [modalvis,setModalVis] =useState(false);
    const changeModalVis = ()=>{
        setModalVis(modalvis =>!modalvis);
    }
    return (
      <div className="App">
        <h1>Notification Demo</h1>
        <SButton type="default" size="middle" onClick={()=>sMessage.info("lallalal")} danger>Primary</SButton>
        <SButton type='primary' size="middle" onClick={()=>sMessage.info("lallalal")} danger>Primary</SButton>
        <SButton type="default" size="middle" onClick={()=>sMessage.info("lallalal")}>Primary</SButton>
        <SButton type="primary" size="middle" onClick={()=>sMessage.info("lallalal")}>Primary</SButton>
        <SButton type="default" size="middle" disabled>success</SButton>
        <SButton type="primary" size="middle" onClick={()=>changeModalVis()}>OpenModal</SButton>
        <div style={{display:'flex',height:'220px'}}>
            
            <div style={{display:'flex',height:'100%',flexDirection:'column'}}>
                <SHover/>
                <SLoading/>
                <SSignal/> 
            </div> 
            <div style={{display:'flex',height:'100%',flexDirection:'column'}}>
                <SRate/>
                <ProgressBall/>
            </div>
            <div style={{display:'flex',height:'100%',flexDirection:'column'}}>
               <Shadow></Shadow>
            </div> 
            <div style={{display:'flex',height:'100%',flexDirection:'column',margin:'50px'}}>
                <Streamer/>
            </div> 
            <Cube/>
        </div>
            
        <Backgound/>
        <SModal visible={modalvis}
            title="modalex"
            footer={
                [<SButton type='default'>cancel</SButton>,
                <SButton type='primary'>confirm</SButton>]
            }
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </SModal>
      </div>
    );
  }

export default App;
