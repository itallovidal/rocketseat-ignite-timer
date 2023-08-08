import React, {ReactNode} from 'react';
import {ActionTypes, Cycle, cyclesReducer} from "./reducer.ts";
import {differenceInSeconds} from "date-fns";

interface CycleFormData{
    taskName: string
    taskMinutes: number
}
interface CyclesContextProps {
    activeCycle: Cycle | undefined,
    activeCycleID: string | null,
    handleFinishedCycle: ()=> void,
    amountSecondsPassed: number,
    handleSecondsPassed: (a: number) => void
    handleData: (a: CycleFormData)=> void,
    handleInterruptCycles: ()=> void,
    cycles: Array<Cycle>
}
export const CyclesContext = React.createContext({} as CyclesContextProps)

function CyclesContextProvider({children} : {children: ReactNode}) {
    const [cyclesState, dispatch] = React.useReducer( cyclesReducer, {
        cycles: [],
        activeCycleID: null
    }, (initialState)=>{
        const localStorageData = localStorage.getItem('@igniteTimer:cycles-data')

        if(localStorageData){
            return JSON.parse(localStorageData)
        }

        return initialState
    })



    const {cycles, activeCycleID} = cyclesState
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleID)
    const [amountSecondsPassed, setAmountSecondsPassed] = React.useState(()=>{
        if(activeCycle){
            return  differenceInSeconds(new Date(), new Date(activeCycle.dateStart) )
        }

        return 0
    })

    React.useEffect(()=>{
        const cyclesJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@igniteTimer:cycles-data', cyclesJSON)
    }, [cyclesState])

    function handleInterruptCycles(){
        dispatch({
            type: ActionTypes.INTERRUPT_CYCLE,
            payload: activeCycleID
        })
    }

    function handleData(data: CycleFormData){
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id: id,
            minutes: data.taskMinutes,
            task: data.taskName,
            dateStart: new Date()
        }

        dispatch({
            type: ActionTypes.ADD_CYCLE,
            payload: newCycle
        })

        setAmountSecondsPassed(0)
    }

    function handleFinishedCycle(){
        dispatch({
            type: ActionTypes.FINISH_CYCLE,
            payload: activeCycleID
        })
    }

    function handleSecondsPassed(seconds: number){
        setAmountSecondsPassed(seconds)
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                handleData,
                handleInterruptCycles,
                activeCycle,
                activeCycleID,
                amountSecondsPassed,
                handleFinishedCycle,
                handleSecondsPassed}}>
            {children}
        </CyclesContext.Provider>
    );
}

export default CyclesContextProvider;