import {Item, Status, StatusItem} from "./History.styled.ts";
import {formatDistanceToNow} from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

interface ListItemProps {
    taskName: string,
    taskDuration: number,
    taskBegin: Date,
    taskStatus: Status
}
function ListItem({taskName, taskDuration, taskBegin, taskStatus} : ListItemProps) {
    return (
        <Item>
            <h2>{taskName}</h2>
            <p>{taskDuration} minutos.</p>
            <p>{formatDistanceToNow(new Date(taskBegin), {addSuffix: true, locale: ptBR})}</p>
            <StatusItem $status={taskStatus}>
                {taskStatus}
            </StatusItem>
        </Item>
    );
}

export default ListItem;