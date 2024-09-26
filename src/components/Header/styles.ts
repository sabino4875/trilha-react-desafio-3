import styled  from 'styled-components';

export const Container = styled.div<object>`
   
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div<object>`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const Wrapper = styled.div<object>`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display:flex
    justify-content: center;
    align-items: center
`

export const BuscarInputContainer = styled.div<object>`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display:flex;
`

export const Menu = styled.a.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
`

export const MenuRight = styled.a.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img.attrs<object>({})`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
`

export const Input = styled.input.attrs<object>({})`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`