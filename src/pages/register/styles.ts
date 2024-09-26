import styled from 'styled-components';

export const RegisterContainer = styled.main.attrs<object>({})`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RegisterWrapper = styled.div.attrs<object>({})`
    max-width: 300px;
`

export const RegisterColumn = styled.div.attrs<object>({})`
    flex: 1;
`

export const RegisterRow = styled.div.attrs<object>({})`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const RegisterTitle = styled.h2.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const RegisterTitleInfo = styled.p.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const RegisterSubtitleInfo = styled.p.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`


export const RegisterTerms  = styled.p.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin-top: 15px;
` 

export const RegisterLogin =  styled.p.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #23DD7A;
`
