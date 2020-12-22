
import './App.css';
import sMessage, { Color,Notification } from './component/Notification/Notification';

  function App() {
    return (
      <div className="App">
        <h1>Notification Demo</h1>
        <button onClick={()=>sMessage.info("hahhahahaha")}>Info</button>
        <button onClick={()=>sMessage.success("lallalal")}>Success</button>
        <button onClick={()=>sMessage.warning("lallalal")}>Warning</button>
        <button onClick={()=>sMessage.error("lallalal")}>Error</button>
      </div>
    );
  }

export default App;
