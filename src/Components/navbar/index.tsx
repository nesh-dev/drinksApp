import React from 'react'; 
import styled from 'styled-components'; 

const ThemedNavBar = styled.nav`
    background-color: #E1B8A0; 
    height: 50px;
    color: #ffff; 
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`; 


const Title = styled.p`
    color: #fff; 
   c
    font-weight: 800;
    font-size: 26px;
`;

const NavBar = ()  => {
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
