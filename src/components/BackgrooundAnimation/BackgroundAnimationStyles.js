import styled from "styled-components"

export const ParticlesDiv = styled.div`
    width: 100vw;
    height: 80vh;
    max-height: 800px;

    @media ${props => props.theme.breakpoints.md}{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 100vh;
    }
    
`