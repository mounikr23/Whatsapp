/**
*
* SideNav
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import UserImage from 'components/UserImage';
import {
  SideBar,
  Header,
  ImageContainer,
  RhsIconsContainer,
  Icon,
  Content,
  ChatContent,
} from './styles';

import SearchBar from 'components/SearchBar';
import ChatItem from '../ChatItem';
const statusIcon = require('images/status.svg');
const chatIcon = require('images/chat.svg');
const dotsIcon = require('images/dots.svg');


function SideNav({ chats, onChatItemClick }) {
  return (
    <SideBar>
      <Header>
        <ImageContainer>
          <UserImage name="Mounik Reddy" />
        </ImageContainer>
        <RhsIconsContainer>
          <Icon alt="status" src={statusIcon} />
          <Icon alt="status" src={chatIcon} />
          <Icon alt="status" src={dotsIcon} />
        </RhsIconsContainer>
      </Header>
      <Content>
        <SearchBar />
        <ChatContent>
          {
            chats.map((chat) => (
              <ChatItem
                chat={chat}
                onChatItemClick={onChatItemClick}
              />
            ))
          }
        </ChatContent>
      </Content>
    </SideBar>
  );
}

SideNav.propTypes = {
  chats: PropTypes.array,
  onChatItemClick: PropTypes.func,
};

export default SideNav;
