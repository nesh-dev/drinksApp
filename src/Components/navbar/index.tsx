import React from 'react'; 
import styled from 'styled-components'; 

const ThemedNavBar = styled.div`
    background-color: #E1B8A0; 
    height: 30px;
    color: #ffff; 
    width: 100%; 
    text-align: center;

`; 


const Title = styled.p`
    color: #fff; 
    font-family: Sansita;
    font-style: italic;
    font-weight: 800;
`;

const NavBar = ({}: any)  => {
    return (
        <div>
            <ThemedNavBar>
                <Title>
                    Cocktail Galore
                </Title>
            </ThemedNavBar>
        </div>
    )
}

export default NavBar; 
