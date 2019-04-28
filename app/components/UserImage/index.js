/**
*
* UserImage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider } from 'react-avatar';
import { Image } from './styles';

function UserImage({ name }) {
  return (
    <ConfigProvider >
      <Image name={name} size={40} />
    </ConfigProvider>
  );
}

UserImage.propTypes = {
  name: PropTypes.string,
};

export default UserImage;
