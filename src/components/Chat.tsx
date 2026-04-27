'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Chat.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! I\'m Rana\'s Digital Twin. Ask me anything about his career or expertise.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      const aiMessage: Message = { 
        role: 'assistant', 
        content: data.choices[0].message.content 
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      {isOpen && (
        <div className={`${styles.window} glass`}>
          <div className={styles.header}>
            <span style={{ fontWeight: 600 }}>Rana's Digital Twin</span>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
            >
              ×
            </button>
          </div>
          
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${msg.role === 'user' ? styles.user : styles.ai}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && <div className={styles.loading}>Digital Twin is thinking...</div>}
            <div ref={messagesEndRef} />
          </div>
          
          <div className={styles.inputArea}>
            <input 
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my career..."
            />
            <button className={styles.sendBtn} onClick={handleSend} disabled={isLoading}>
              Send
            </button>
          </div>
        </div>
      )}
      
      <div className={styles.bubble} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '💬' : '🤖'}
      </div>
    </div>
  );
};

export default Chat;
