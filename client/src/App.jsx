import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components'

import './App.css';

const apiKey = 'rvqntjbgzkpa';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {

  if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
        <Chat client={client} theme='team light'>
            <ChannelListContainer
            
            />
            <ChannelContainer
            
            />

        </Chat>      
    </div>
  )
}

export default App
