import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../components/ChatWindow";

const Main = ({user, activeUserId}) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user = {user} activeUserId = {activeUserId}/>
    } 
    return <ChatWindow user = {user} activeUserId = {activeUserId}/>
  }

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;