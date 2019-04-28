import styled from 'styled-components';

const SearchContainer = styled.div`
    width: 100%;
    padding: 10px 15px;
    height: 50px;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 20px;
    background-color: #FFFFFF;
    outline: none;
    padding: 0px 0 0 40px;
    &::-webkit-input-placeholder {
        color: #a0a0a0;
        font-size: 14px;
        font-weight: 300;
    }
`;

const Search = styled.img`
    position: absolute;
    left: 25px;
`;

export {
    SearchContainer,
    Input,
    Search,
};
