import styled from 'styled-components';

export const InputContainer = styled.div<object>`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display:flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div<object>`
    margin-right: 10px;
`

export const InputText = styled.input.attrs<object>({})`
    background-color: transparent;
    color: #FFFFFF;
    flex:1;
    border: 0;
    height: 30px;
    
`