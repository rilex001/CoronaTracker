import React, { useState, useEffect} from 'react'

function Data() {

    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://covid19.mathdro.id/api')
            .then( res => res.json())
            .then( data => setData(data))
    }, [])

    let k = data && <div className='main'>
                        <p>Confirmed: {data.confirmed.value / 1000000}</p>
                        <p>Deaths: {data.deaths.value / 1000000}</p>
                        <p>Recovered: {data.recovered.value / 1000000}</p>
                    </div>

    return (

        

        <div>
           {k} 
        </div>
    )
}

export default Data
