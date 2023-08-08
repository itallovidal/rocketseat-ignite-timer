import React from "react";
import {CountdownWrapper} from "./Countdown.styled.ts";
import {differenceInSeconds} from "date-fns";
import {CyclesContext} from "../../../contexts/CyclesContextProvider.tsx";


function Countdown() {
    const {activeCycle, activeCycleID, handleFinishedCycle, amountSecondsPassed, handleSecondsPassed } = React.useContext(CyclesContext)

    const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount  = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    React.useEffect(()=>{
        if(activeCycle){
            document.title = `Ignite Timer | ${minutes}:${seconds}`
        }
    },[minutes, seconds, activeCycle])

    React.useEffect(() => {
        let interval: number
        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.dateStart) )

                if (secondsDifference >= totalSeconds) {
                    handleFinishedCycle()
                    handleSecondsPassed(totalSeconds)
                    clearInterval(interval)
                } else {
                    handleSecondsPassed(secondsDifference)
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, totalSeconds, activeCycleID])

    return (
        <CountdownWrapper>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <p>:</p>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownWrapper>
    );
}

export default Countdown;