import React from "react";
import {
    TimerBody,
    CounterButton,
    InterruptButton,
    // ErrorMessage
} from "./Timer.styled.ts";
import {ReactComponent as PlayIcon} from '../../assets/body/playIcon.svg'
import {Wrapper} from "../../styles/global.styled.ts";
import {ReactComponent as HandIcon} from '../../assets/body/handIcon.svg'
import NewCycleForm from "./NewCycleForm/NewCycleForm.tsx";
import Countdown from "./Countdown/Countdown.tsx";
import * as zod from "zod";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CyclesContext} from "../../contexts/CyclesContextProvider.tsx";

const validationCycleForm = zod.object({
    taskName: zod.string().min(1, 'Informe a tarefa'),
    taskMinutes: zod.number().min(1).max(60)
})

type CycleFormData = zod.infer<typeof validationCycleForm>

function Timer() {
    const CycleForm= useForm<CycleFormData>({
        resolver: zodResolver(validationCycleForm),
        defaultValues: {
            taskName: '',
            taskMinutes: 0
        },
    })
    const {
        handleSubmit,
        watch,
        reset,
    } = CycleForm
    const {handleData, handleInterruptCycles, activeCycle } = React.useContext(CyclesContext)

    function createCycle(data: CycleFormData){
        handleData(data)
        reset()
    }


    const taskName = watch('taskName')

    return (
        <form onSubmit={handleSubmit(createCycle)}>
            <Wrapper $marginTop={'4.5rem'} $maxWidth={'41rem'}>
                <FormProvider {...CycleForm}>
                    <NewCycleForm/>
                </FormProvider>

                <TimerBody>
                    <Countdown/>

                    {activeCycle
                        ?
                        <InterruptButton onClick={handleInterruptCycles} type={'button'}>
                            <HandIcon/> Interromper
                        </InterruptButton>
                        :
                        <CounterButton disabled={!taskName} type={'submit'}>
                            {/*<ErrorMessage>Preencha o nome e a duração antes de começar.</ErrorMessage>*/}
                            <PlayIcon/> Começar
                        </CounterButton>
                    }
                </TimerBody>
            </Wrapper>
        </form>
    );
}

export default Timer;