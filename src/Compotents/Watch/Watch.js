import React, { useEffect, useState } from 'react'

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () => {
        const newStepsCounts = steps + 1
        setSteps(newStepsCounts)
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div>
            <h2>This is my smart watch</h2>
            <h3> My current steps: {steps}</h3>
            <button onClick={increaseSteps}>De dour......................</button>
        </div>
    )
}


export default Watch