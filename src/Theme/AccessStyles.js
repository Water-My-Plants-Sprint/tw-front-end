import styled from "styled-components";
import theme from "./index"


const AccessStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3%;

    img{
        border-radius: 50px;
        margin: 2%
    }
    h3{
        font-size: 2rem;
    }
    input{
        border:black solid 3px;
        border-radius: 6px;
        font-size: 1.5rem;
    }
    .none{
        display: none;
    }
    .edit{
        color: ${props => props.theme.buttonColor};
        background-color: ${props => props.theme.buttonBG};
        font-size: 1.5rem;
        padding: 2% 4%;
        border-radius: 10px;
    }
    .cancel{
        margin-left: 3%;
    }
    
`

export default AccessStyles;