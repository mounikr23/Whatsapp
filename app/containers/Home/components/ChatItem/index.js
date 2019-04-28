/**
*
* ChatItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import UserImage from 'components/UserImage';
import {
  Container,
  UserNameWrapper,
  UserName,
  LastChatMessage,
  Time,
  CheckMark,
} from './styles';

const doubleTick = require('images/doubletick.svg');


function ChatItem({ chat, onChatItemClick }) {

  const handleChatItemClick = () => {
    onChatItemClick(chat);
  }

  return (
    <Container onClick={handleChatItemClick}>
      <UserImage name={chat.recepient} />
      <UserNameWrapper>
        <UserName>
          {chat.recepient}
        </UserName>
        <LastChatMessage>
          {chat.isLastMessageFromUser ? (<CheckMark alt="tick" src={doubleTick} />) : null}{chat.lastMessage.message}
        </LastChatMessage>
      </UserNameWrapper>
      <Time>{chat.lastMessage.time}</Time>
    </Container>
  );
}

ChatItem.propTypes = {
  chat: PropTypes.object,
  onChatItemClick: PropTypes.func,
};

export default ChatItem;
