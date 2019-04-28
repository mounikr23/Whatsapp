import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;
    :last-of-type {
        border-bottom: none;
    }
    &:hover{
        background-color: #f4f5f5;
    }
`;

const UserNameWrapper = styled.div`
    flex: 1;
    margin-left: 15px;
`;

const UserName = styled.p`
    font-size: 16px;
    line-height: 22px;
`;

const LastChatMessage = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
    line-height: 20px;
`;

const Time = styled.span`
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
`;

const CheckMark = styled.img`
    height: 16px;
    margin: 0 2px 3px 0;
`;

export {
    Container,
    UserNameWrapper,
    UserName,
    LastChatMessage,
    Time,
    CheckMark,
};
