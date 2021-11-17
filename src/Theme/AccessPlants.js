import styled from "styled-components";



const AccessPlants = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 3%;
    width: 100%;
    text-align: center;
    width: 90%;
    background-color: ${props => props.theme.buttonBG};
    border-radius: 20px;

    .myPlants{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.theme.buttonColor};
        margin: 2%;
        border-radius: 30px;
        
    }
    .each{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width:23%;
        margin: 0 2%;
        background-color: ${props => props.theme.buttonColor};
        border-radius: 30px;
    }
    img{
        border-radius: 20px;
        margin: 2%;
        height: 15vh;
    }
    h3{
        font-size: 4rem;
        font-weight: bold;
        color: ${props => props.theme.buttonColor};
        text-shadow: black 2px 2px 2px;
    }
    h4{
        font-size: 1.5rem;
        font-weight: bold;
    }
    h5{
        font-size: 1.2rem;
    }
    input{
        border:${props => props.theme.buttonBG} solid 3px;
        border-radius: 6px;
        font-size: 1.5rem;
        margin: 3% 1%;
        color:black;
        box-shadow: ${props => props.theme.buttonBG} 3px 2px 2px;
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
    @media(max-width:800px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3{
            font-size: 2.7rem;
        }
        h4{
            font-size: 2.5rem;
        }
        h5{
            font-size:1.7rem;
        }
        .myPlants{
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            width: 60%;
        }
        .each{
            width: 100%;
            margin: 5%;
        }

    }
    
`

export default AccessPlants;