import styled from 'styled-components'

export const Container = styled.main`
    
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
`
export const Content = styled.div `

    text-align:center;    
    @media only screen and (max-width: 520px) {
        input {
                
                margin-bottom:1rem;
            }
        button{
            text-align:center
            margin: 0 auto;
        }
    }

  

    input{
        margin-top: 2rem ;
        padding-left:1rem ;
        width: 30rem;
        height: 2.8rem;
        background: #F0F2F5;;
        border: #FFF;
        color: #454545;
        border-radius: 1rem;

        &:focus{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
        
    }
    button{
        background: #454545;
        color: #F0F2F5;
        margin-left: -2rem;
        padding: 0.8rem;
        border: none;
        transitions: filter: 0.2s;

        
        &:hover{
            filter:brightness(0.9);
        }
   
}
`