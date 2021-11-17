import styled from "styled-components";



const AccessPlants = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    background-color: ${props => props.theme.buttonBG};

        img{
            border-radius: 20px;
            margin: 2%;
            height: 17vh;
            transition: .5s;
        }
        img:hover{
            opacity: 0.6;
        }
        h3{
            font-size: 4rem;
            font-weight: bold;
            color: ${props => props.theme.buttonColor};
            text-shadow: black 2px 2px 2px;
        }
        h4{
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 5%;
        }
        h5{
            font-size: 1.2rem;
        }
        .myPlants{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            margin: 3% 1%;   
            background-color: ${props => props.theme.buttonColor};  
            border-radius: 30px;   
        }
        .each{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3%;
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
        .addPlant{
            font-size: 2rem;
            color: ${props => props.theme.buttonColor};
            text-shadow: black 2px 2px 2px;
            text-decoration: underline;
            margin: 0;
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
            font-size: 4rem;
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
            width: 85%;
        }
        .each{
            width: 100%;
            margin: 5%;
        }
        .info{
            padding: none;
        }
    @media(max-width:500px){
        h3{
            font-size: 3rem;
        }
        h4{
            font-size: 2rem;
        }
        h5{
            font-size: 1.5rem;
        }
    }
    }
    
`

export default AccessPlants;