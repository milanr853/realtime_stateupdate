import React, { memo, useRef } from 'react'

function Card4({ setName, setAge, setOccupation, setTechArr }) {
    console.log('4')


    const techRef = useRef()

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateAge = (e) => {
        setAge(e.target.value)
    }

    const updateOccupation = (e) => {
        setOccupation(e.target.value)
    }


    const addNewTech = () => {
        const value = techRef.current.value
        setTechArr((prev) => [...prev, value])
        techRef.current.value = ""
    }


    return (
        <div className='cardWrapper' style={{ display: "flex", flexDirection: "column", gap: '2rem' }}>
            <div style={{ fontWeight: "bold" }}>FORM INPUT</div>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id="name" onChange={updateName} />
            </div>

            <div>
                <label htmlFor="age">Age: </label>
                <input type="text" name='age' id="age" onChange={updateAge} />
            </div>

            <div>
                <label htmlFor="occupation">Occupation: </label>
                <input type="text" name='occupation' id="occupation" onChange={updateOccupation} />
            </div>

            <div>
                <label htmlFor="tech">Tech: </label>
                <input type="text" name='tech' id="tech" ref={techRef} />
                <button onClick={addNewTech}>Add</button>
            </div>
        </div>
    )
}

export default memo(Card4)