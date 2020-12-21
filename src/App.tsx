import React, { useState } from 'react';
import './App.css';
import { Notification, Color } from './component/Notification/Notification';
interface NoteInterface {
    id: number;
    color?: Color;
  }
  
  function App() {
    const [notifications, setNotifications] = useState<NoteInterface[]>([]);
    const createNotification = (color: Color) => {
      setNotifications([
        ...notifications,
        {
          color,
          id: notifications.length,
        },
      ]);
    };
    
  const deleteNotification = (id: number) =>{
    setNotifications(notifications.filter(notification => notification.id !== id));
  }

    return (
      <div className="App">
        <h1>Notification Demo</h1>
        <button onClick={() => createNotification(Color.info)}>Info</button>
        <button onClick={() => createNotification(Color.success)}>Success</button>
        <button onClick={() => createNotification(Color.warning)}>Warning</button>
        <button onClick={() => createNotification(Color.error)}>Error</button>
        {notifications.map(({ id, color }) => {
            return<Notification key={id} color={color} onDelete={()=>deleteNotification(id)}>
                This is Notification
                </Notification>
        })}
      </div>
    );
  }

export default App;
