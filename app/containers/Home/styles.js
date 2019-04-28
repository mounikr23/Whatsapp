import styled, { css } from 'styled-components';
const backgroundImg = require('images/chatbackground.png')

const Container = styled.div`
    display: flex;
`;

const MainContent = styled.div`
    width: 100%;
    padding-bottom: 190px;
    height: 100vh;
    background-color: #f7f9fa;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 460px;
    margin: 20px auto 0;
    ${({ hasContent }) => hasContent && css`
        width: 100%;
        max-width: 100%;
        display: block;
        padding: 2% 9%;
        height: calc(100vh - 120px);
        background-color: #e5ddd5;
        margin: 0;
    `}
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:url(${backgroundImg});
    background-size: 366.5px 666px;
    background-repeat: repeat repeat;
    opacity: 0.06;
    z-index: 0;
`;

const Header = styled.header`
    height: 60px;
    z-index: 1;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const MainWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    background-color: #eeeeee;
`;

const ChatInputWrapper = styled.div`
    height: 60px;
    z-index: 1;
    position: absolute;
    width: 100%;
`;

const FooterWrapper = styled.div`
    display: flex;
    height: 100%;
    padding: 5px 10px;
    background-color: #efefef;
`;

const Image = styled.img`
    padding: 5px 10px;
    &:nth-child(2), &:nth-child(3){
        margin-left: 10px
    }
    ${({ height }) => height && css`
        height: ${height}px;
        padding: 0;
        margin-top: 25px;
    `};
`;

const ChatInput = styled.input`
    width: 100%;
    border-radius: 20px;
    background-color: #FFFFFF;
    padding: 9px 12px 11px 12px;
    margin: 5px 10px;
`;

const IconsWrapper = styled.div`

`;

const Heading = styled.h1`
    color: #4b5961;
    font-size: 32px;
    font-weight: 300;
    margin: 38px 0 20px;
`;

const SubHeading = styled.p`
    font-size: 14px;
    color: #929fa6;
    line-height: 20px;
    text-align: center;
`;

const UserName = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: black;
    padding-left: 15px;
`;

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export {
    Container,
    MainContent,
    Background,
    Header,
    MainWrapper,
    HeaderWrapper,
    ChatInputWrapper,
    FooterWrapper,
    Image,
    ChatInput,
    IconsWrapper,
    Heading,
    SubHeading,
    UserName,
    UserInfoContainer,
};
