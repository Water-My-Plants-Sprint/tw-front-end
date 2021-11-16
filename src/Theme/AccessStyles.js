import styled from "styled-components";



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
        margin: 3% 1%;
        color:black;
        box-shadow: black 3px 2px 2px;
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