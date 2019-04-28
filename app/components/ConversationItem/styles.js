import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: flex-start;
    ${({ isUserMsg }) => isUserMsg && css`
        justify-content: flex-end;
    `}
`;

const InnerWrapper = styled.div`
    z-index: 1;
    min-width: 110px;
    max-width: 65%;
    margin-bottom: 12px;
    padding: 6px 7px 6px 9px;
    background-color: #FFFFFF;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 8px;
    ${({ isUserMsg }) => isUserMsg && css`
        background-color: #dcf8c6;
        border-top-right-radius: 0px;
        border-top-left-radius: 8px;
    `}
`;

const Tail = styled.img`
    height: 20px;
    width: 12px;
    position: absolute;
    left: -12px;
    top: 0;
     ${({ img }) => img && css`
        background-image: url(${img})
    `}
     ${({ isUserMsg }) => isUserMsg && css`
        left: 100%;
    `}
`;

const Message = styled.div`
    font-size: 14px;
    /* line-height: 14px; */
    color: #262626;
    &::after{
        content: ' ';
        margin-right: 80px;
    }
`;

const Time = styled.span`
    float: right;
    font-size: 11px;
    margin: -10px 0 -5px 4px;
    color: rgba(0, 0, 0, 0.4);
`;

export {
    Container,
    Message,
    InnerWrapper,
    Tail,
    Time,
};
