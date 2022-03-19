import React from 'react'

const Dail = (props) => {
    return (
        <div style={{ border: "3px solid salmon", margin: "20px" }}>
            <h2>This is Dail</h2>
            <p>Steps so far {props.steps}</p>
        </div>
    )
}

export default Dail