import {Wrapper} from "../../styles/global.styled.ts";
import {ListItemHeader, Status, TaskList, Title} from "./History.styled.ts";
import ListItem from "./ListItem.tsx";
import React from "react";
import {CyclesContext} from "../../contexts/CyclesContextProvider.tsx";

function History() {
    const {cycles} = React.useContext(CyclesContext)

    return (
        <Wrapper $marginTop={'3rem'} $maxWidth={'58rem'}>
            <Title> Histórico </Title>
            <TaskList>
                <ListItemHeader>
                    <h2>Nome</h2>
                    <p>Duração</p>
                    <p>Início</p>
                    <p>Status</p>
                </ListItemHeader>

                {cycles.map(item => {
                    let status: Status = 'em andamento'
                    if(item.finishedDate)
                        status = 'concluído'

                    if(item.interruptedDate)
                        status = 'interrompido'
                   return <ListItem
                        key={item.id}
                        taskName={item.task} taskDuration={item.minutes} taskBegin={item.dateStart} taskStatus={status}/>
                })}


            </TaskList>
        </Wrapper>
    );
}

export default History;