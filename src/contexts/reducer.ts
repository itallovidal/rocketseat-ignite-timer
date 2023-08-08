export interface Cycle {
    id: string
    minutes: number
    task: string
    dateStart: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}



export enum ActionTypes {
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    ADD_CYCLE = 'ADD_CYCLE',
    FINISH_CYCLE = 'FINISH_CYCLE'
}

interface CycleState{
    cycles: Array<Cycle>
    activeCycleID: string | null
}

export function cyclesReducer(state: CycleState, action: any){
    if(action.type === ActionTypes.INTERRUPT_CYCLE){
        return {...state,
            cycles: state.cycles.map(cycle=>{
                if(cycle.id === state.activeCycleID){
                    return {...cycle, interruptedDate: new Date()}
                }
                else{
                    return cycle
                }
            }),
            activeCycleID: null
        }
    }

    if(action.type === ActionTypes.ADD_CYCLE){
        return {...state,
            cycles: [...state.cycles, action.payload],
            activeCycleID: action.payload.id
        }
    }

    if(action.type === ActionTypes.FINISH_CYCLE){
        return {...state,
            cycles:  state.cycles.map(cycle=>{
                if(cycle.id === state.activeCycleID){
                    return {...cycle, finishedDate: new Date()}
                }
                else{
                    return cycle
                }
            }),
            activeCycleID: null
        }
    }


    return state
}