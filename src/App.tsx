
import './App.css';
import sMessage from './component/Notification/Notification';
import {SButton}  from './component/Button/sButton'
  function App() {
    return (
      <div className="App">
        <h1>Notification Demo</h1>
        <SButton type="default" size="middle" onClick={()=>sMessage.info("lallalal")} danger>Primary</SButton>
        <SButton type='primary' size="middle" onClick={()=>sMessage.info("lallalal")} danger>Primary</SButton>
        <SButton type="default" size="middle" onClick={()=>sMessage.info("lallalal")}>Primary</SButton>
        <SButton type="primary" size="middle" onClick={()=>sMessage.info("lallalal")}>Primary</SButton>
        <SButton type="default" size="middle" disabled>success</SButton>
      </div>
    );
  }

export default App;
