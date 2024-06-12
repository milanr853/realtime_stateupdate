import React, { useState } from 'react'

import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import Card3 from "../components/Card3"
import Card4 from "../components/Card4"


function AfterLogin() {
    const [name, setName] = useState("Milan")
    const [age, setAge] = useState("22")
    const [occupation, setOccupation] = useState("FD")
    const [techArr, setTechArr] = useState(["React"])



    return (
        <div className="App" style={{ padding: '1rem', display: "flex", gap: "8px" }}>
            <Card1 name={name} age={age} />
            <Card2 occupation={occupation} />
            <Card3 techArr={techArr} />
            <Card4 setName={setName} setAge={setAge} setOccupation={setOccupation} setTechArr={setTechArr} />
        </div>
    )
}

export default AfterLogin