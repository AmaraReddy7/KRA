"use client";

import { useEffect, useState } from "react";
import { socket } from "./lib/socket";

export default function ChatPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [typingUser, setTypingUser] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("typing", ({ name, isTyping }) => {
      setTypingUser(isTyping ? `${name} is typing...` : "");
    });

    return () => {
      socket.off("message");
      socket.off("typing");
    };
  }, []);

  const joinChat = () => {
    if (!name.trim()) return;
    socket.emit("join", name);
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("createMessage", {
      name,
      text: message,
    });

    setMessage("");
    socket.emit("typing", { isTyping: false });
  };

  const handleTyping = (value: string) => {
    setMessage(value);
    socket.emit("typing", { isTyping: value.length > 0 });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Real-time Chat</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={joinChat}>Join</button>

      <hr />

      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <b>{msg.name}:</b> {msg.text}
          </p>
        ))}
      </div>

      <p>{typingUser}</p>

      <input
        placeholder="Type message"
        value={message}
        onChange={(e) => handleTyping(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
