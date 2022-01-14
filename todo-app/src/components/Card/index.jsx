import { useState } from "react";
import * as axios from 'axios';
import { Container } from "./styles";

export function Card(props) {
    
    
    function handleDelete(id){
        axios.delete(`http://localhost:3030/delete/${id}`).then(() => {
            props.setListTask(props.listCard.filter((p) => 
                p.idtodo !== id
                )
            )
        })
        

        
    }
    
    return (
        <Container >
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>{props.name}
                            <div>
                                <button onClick = {() => handleDelete(props.id)} type="submit">Deletar</button>
                              
                            </div>

                        </td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}