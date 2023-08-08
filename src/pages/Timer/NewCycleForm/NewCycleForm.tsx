import React from "react";
// import {ReactComponent as PlusIcon} from '../../../assets/Header/plusIcon.svg'
// import {ReactComponent as MinusIcon} from '../../../assets/Header/minusIcon.svg'
import { TimerHeader, TimerInput, WrapperMinutesTimer} from "./NewCycleForm.styled.ts";
import {useFormContext} from "react-hook-form";
import {CyclesContext} from "../../../contexts/CyclesContextProvider.tsx";


function NewCycleForm() {
    const {register} = useFormContext()
    const {activeCycle} = React.useContext(CyclesContext)

    return (
        <TimerHeader>
            <p>Vou trabalhar em </p>
            <TimerInput
                placeholder={'dê um nome para seu projeto'}
                type="text"
                {...register('taskName')}
                disabled={!!activeCycle}
            />
            <p> durante </p>

            <WrapperMinutesTimer>
                {/*<TimerButton>*/}
                {/*    <MinusIcon/>*/}
                {/*</TimerButton>*/}
                <TimerInput
                    disabled={!!activeCycle}
                    max={60}
                    min={1}
                    maxLength={2}
                    placeholder={'0'}
                    {...register('taskMinutes', {valueAsNumber: true})}
                />
                {/*<TimerButton>*/}
                {/*    <PlusIcon/>*/}
                {/*</TimerButton>*/}
            </WrapperMinutesTimer>

            <p> minutos. </p>
        </TimerHeader>
    );
}

export default NewCycleForm;