/**
 *
 * Home
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import _size from 'lodash/size';
import _get from 'lodash/get';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ConversationItem from 'components/ConversationItem/';
import UserImage from 'components/UserImage';
import { makeSelectHome, selectChats } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SideNav from './components/SideNav';
import { getChats } from './actions';
import {
  Container,
  MainContent,
  Background,
  Header,
  MainWrapper,
  HeaderWrapper,
  ChatInputWrapper,
  FooterWrapper,
  ChatInput,
  Image,
  IconsWrapper,
  Heading,
  SubHeading,
  UserName,
  UserInfoContainer,
} from './styles';

const Mic = require('images/mic.svg');
const Emoji = require('images/smiley.svg');
const Clip = require('images/clip.svg');
const Search = require('images/search-large.svg');
const Dots = require('images/dots.svg');
const ZeroCaseImg = require('images/default.jpg');

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      activeChat: {},
    };
  }
  componentDidMount() {
    const { onGetChats } = this.props;

    onGetChats();
  }

  handleChatItemClick = (chat) => {
    this.setState({
      activeChat: chat,
    });
  }

  render() {
    const { chats } = this.props;
    console.log(chats)
    const { activeChat } = this.state;
    return (
      <Container>
        <SideNav
          chats={chats}
          onChatItemClick={this.handleChatItemClick}
        />
        <MainWrapper>
          {
            _size(activeChat) > 0 ? (
              <div>
                <Header>
                  <HeaderWrapper>
                    <UserInfoContainer>
                      <UserImage name={activeChat.recepient} />
                      <UserName>{activeChat.recepient}</UserName>
                    </UserInfoContainer>
                    <IconsWrapper>
                      <Image src={Search} />
                      <Image src={Clip} />
                      <Image src={Dots} />
                    </IconsWrapper>
                  </HeaderWrapper>
                </Header>
                <Background />
                <MainContent hasContent={_size(activeChat) > 0}>
                  {_size(activeChat) > 0 && activeChat.conversation.map((chat) => (
                    <ConversationItem
                      key={chat.message}
                      message={chat}
                      isUserMsg={_get(chat, 'isUserMessage', false)}
                    />
                  ))}
                </MainContent>
                <ChatInputWrapper>
                  <FooterWrapper>
                    <Image src={Emoji} />
                    <ChatInput placeholder="Type a message" />
                    <Image src={Mic} />
                  </FooterWrapper>
                </ChatInputWrapper>
              </div>
            ) : (
                <MainContent hasContent={_size(activeChat) > 0}>
                  <Image src={ZeroCaseImg} height={355} width={356} />
                  <Heading>Keep your phone connected</Heading>
                  <SubHeading>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</SubHeading>
                </MainContent>
              )
          }


        </MainWrapper>
      </Container>
    );
  }
}

Home.propTypes = {
  onGetChats: PropTypes.func,
  chats: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  chats: selectChats(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetChats: () => dispatch(getChats()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
