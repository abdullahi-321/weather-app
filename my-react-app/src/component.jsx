import react, { useState } from 'react'

function Component(props) {

    let [temp, setTemp] = useState("");
    let [location, setLocation] = useState("");
    let [icon, setIcon] = useState("");

    async function getApi() {
        try {
            let raw;
            const sss = await fetch(`http://api.weatherapi.com/v1/current.json?key=0b0b7c9d31e5469a967173511240503&q=${props.city}}&aqi=no`)
                .then(data => data.json())
                .then(data => raw = data)
    
            console.log(raw);
            setTemp(raw.current.feelslike_c);
            setIcon(raw.current.condition.icon);
            setLocation(`${raw.location.name}`);
        } 
        catch(error) {
            console.log(error)
            setTemp(`Unable to fetch resources`);
            setLocation(`Unable to fetch resources`);
        }
        
    }

    getApi()
    return (
        <div className='div'>
            <h2>{location}</h2>
            <img src={icon} alt="" />
            <h2>{temp + ' °C'}</h2>
        </div>
    )
}

export default Component