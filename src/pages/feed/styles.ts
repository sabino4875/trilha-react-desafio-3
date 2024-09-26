import styled from 'styled-components';

export const Container = styled.main.attrs<object>({})`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

export const TitleHighlight = styled.h3.attrs<object>({})`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;

`
type ColumnProps = {
    flex: number,
}

export const Column = styled.div.attrs<ColumnProps>({})`
    flex:${({flex}) => flex};
    padding-right: 24px;

`


