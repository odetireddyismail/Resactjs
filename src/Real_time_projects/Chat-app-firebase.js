import React, { useEffect, useState } from 'react'
import './chat.css';
import { getDatabase,ref,push,set,onChildAdded} from "firebase/database";



const Chat = () => {

    const db = getDatabase();

    const [name, setName] = useState('');
    const [chat, setChat] = useState([])

    const [msg, setMsg] = useState('');

    const chatListRef = ref(db, 'chat');

    const scroll=()=>{

       const ele=document.getElementById('chat');
                if(ele){
                    ele.scrollTop=ele.scrollHeight;
                }
         }
    
 useEffect(()=>{
    onChildAdded(chatListRef, (data) => {
    
        // c.push(data.val()) 
       
        setChat(chat=>[...chat,data.val()]);
        setTimeout(()=>{
            scroll()
        },1000)
        
        });
        
        
 },[]);


    const sendChat = (e) => {

     const chatRef = push(chatListRef);
    set(chatRef, {
        name:name, message: msg
    });

        // const d = [...chat];
        // d.push();
        // setChat(d);
        setMsg('');
       
    }

    //console.log(chat)

    //creating another function
   

    return (
        <div>
            {name ? null : <div>
                <input type="text"
                    placeholder='Enter name to start'
                    onBlur={(e) => setName(e.target.value)}></input>
            </div>}

           

           { name?<div>
            <h3>User:{name}</h3>
                <div  id="chat" className='chat-container'>
                    {chat.map((items, i) =>
                        <div key={i} className={`container ${items.name === name ? 'me' : ''}`} >
                            <p className='chatbox'>
                                <strong>{items.name}:</strong>
                                <span>{items.message}:</span>
                            </p>
                        </div>

                    )}
                </div>

                <div className='btm'>
                    <input type="text"
                        value={msg}
                        name='message'

                        onChange={(e) => { setMsg(e.target.value) }}
                        placeholder='Chat/Enter your message' />
                    <button onClick={sendChat}>Send</button>
                </div>
            </div>:null}

        </div>
    )
}

export default Chat