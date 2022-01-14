import styled from "styled-components";

export const Container = styled.main`
    table {
        width: 100%;
        border-spacing: 0.5rem;

        th{
            color: var(--text-body);
            font-weight:400;
            padding: 1rem 2rem;
            text-align:left;
            line-height:1.5rem;
        }
        td {
            display: flex;
            justify-content:space-between;
            padding: 1rem 2rem;
            border: 0;
            background: #fff;
            color: var(--text-body);
            border-radius:0.25rem ;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2)  ; 
	        -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2)  ; 
	        -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2)  ; 

            &:first-child{
                color: var(--text-title);
            }
            &.deposit{
                color: var(--green); 
            }
            &.withdram{
                color: var(--red);
            }
            div {
                button{
                    margin-left:1rem ;
                    border: none;
                    background: #454545;
                    color: #fff;
                    padding: 0.3rem;
                    border-radius: 0.3rem ;
                    transitions: filter: 0.3s;

        
                    &:hover{
                        filter:brightness(0.9);
                    }
                }
                
            }
        }

       
  }

` 