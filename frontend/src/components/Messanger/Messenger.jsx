import ChatOnline from "../ChatOnline/ChatOnline"
import Conversation from "../Conversation/Conversation"
import Message from "../Message/Message"
import NavBar from "../NavBar/NavBar"
import "./Messanger.css"
import React from 'react'

const Messenger = () => {
  return (
    <>
    <NavBar/>
    <div className="messenger">
       
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder="Search for friends" className="chatMenuInput"/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
            <div className="chatBoxTop">
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
               
            </div>
            <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="Write a  message">
            </textarea>
            <button className="chatSubmitButton">send</button>
            </div>
            </div>
        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                <ChatOnline/>
            </div>
        </div>
    </div>
   
    </>
    
  )
}

export default Messenger