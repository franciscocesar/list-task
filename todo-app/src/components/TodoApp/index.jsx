import { useEffect, useState } from "react";
import Axios from 'axios';


import { Container, Content } from "./styles";
import { Main } from "../Main";
import { Card } from "../Card";

export function TodoApp(){

    const [listTask, setListTask] = useState();
  
    

    const [values, setValues] = useState();

    

    const handleClickButton = () => {
       
        Axios.post("http://localhost:3030/add",{
            tarefa: values.name
            
        }).then(() => {
            Axios.post("http://localhost:3030/search", {
                tarefa: values.name
            })
            
            .then((response) =>{
                setListTask([...listTask,
                {
                    id:response.data[0].idtodo,
                    tarefa: values.name
                    
                }])
                window.location.reload()
            })
        })
       
       
    }

      
    useEffect(() => {
        Axios.get("http://localhost:3030/getTask")
        .then((response) => {
            setListTask(response.data);
        })
    },[])

    const handlerChangeValues = (value) =>{
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
        
    }


    return (
      <Container>
          
        <Main />
    
        <Content>
            <input type="text" name="name" placeholder="Adicionar Tarefa" onChange={handlerChangeValues}/>
            <button type="button" onClick={handleClickButton}>Adicionar</button>
        </Content>

          {typeof listTask !== "undefined" && 
          listTask.map((value) => {
              return (
                <Card 
                key = {value.idtodo}
                id = {value.idtodo}
                listCard={listTask}
                setListTask = {setListTask}
                name = {value.tarefa}/>
              )
              
          })}
      </Container>
    )
}