/**
*
* ConversationItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Message,
  InnerWrapper,
  Tail,
  Time,
} from './styles';
const whiteTail = require('images/whiteConv.png');
const userTail = require('images/userConv.png');


class ConversationItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      message,
      isUserMsg,
    } = this.props;
    return (
      <Container isUserMsg={isUserMsg}>
        <InnerWrapper isUserMsg={isUserMsg}>
          <Tail isUserMsg={isUserMsg} src={isUserMsg ? userTail : whiteTail} />
          <Message>{message.message}</Message>
          <Time>{message.time}</Time>
        </InnerWrapper>
      </Container>
    );
  }
}

ConversationItem.propTypes = {
  message: PropTypes.object,
  isUserMsg: PropTypes.bool,
};

export default ConversationItem;
