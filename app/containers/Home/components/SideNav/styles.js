import styled from 'styled-components';

const SideBar = styled.aside`
    position: relative;
    z-index: 10;
    background-color: #ffffff;
    width: 430px;
    height: 100vh;
    border-right: 1px solid rgba(0, 0, 0, 0.08);
`;

const Header = styled.header`
    background-color: #eeeeee;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    width: 430px;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const RhsIconsContainer = styled.div`
    /* flex: 1; */
`;

const Icon = styled.img`
    margin: 0 10px;
`;

const Content = styled.div`
    /* padding: 10px 15px; */
`;

const ChatContent = styled.div`
    background-color: #FFFFFF;
`;

export {
    SideBar,
    Header,
    ImageContainer,
    RhsIconsContainer,
    Icon,
    Content,
    ChatContent,
};
