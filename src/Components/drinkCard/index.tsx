import React from 'react'; 
import styled from 'styled-components'; 
import { ICocktail } from '../../Redux/types/drink'


const CardWrapper = styled.div`
display: flex;
background: #FFFFFF;
border: 1px solid #E1B8A0;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
flex-direction: column;
align-items: center;
`; 

const CardTitle = styled.div`
    fontsize: 36px; 
    margin-top: 2%; 
    font-weight: bold; 
`; 

const CardContent = styled.div`

`; 

const DrinkCard: React.FC<ICocktail> = ({idDrink, strAlcoholic, strDrinkThumb, strDrink}) => {
    return (
        <CardWrapper>
            <img alt={strDrink} src={strDrinkThumb}  width="100%" height="50%"/>
            <CardTitle> {strDrink}</CardTitle>
            <CardTitle>Type: {strAlcoholic}</CardTitle>
        </CardWrapper>
    )
}

export default  DrinkCard; 
