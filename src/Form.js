import React, { useState } from 'react'

const Form = (props) => {
    const [avenger, setAvenger] = useState([{
        name: "",
        heroName: "",
        superPower: ""
    }]);

    const handleChange = event => {
        setAvenger({
            ...avenger,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();


        props.addNewAvenger(avenger);
        setAvenger({
            name: "",
            heroName: "",
            superPower: ''
        });
    }
    console.log("form:", avenger)
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Name:&nbsp;
                <input
                        type="text"
                        name="name"
                        value={avenger.name}
                        onChange={handleChange}
                    /></label>
                <label>Hero Name:&nbsp;
                <input
                        type="text"
                        name="heroName"
                        value={avenger.heroName}
                        onChange={handleChange}
                    /></label>
                <label>Super Power:&nbsp;
                <input
                        type="text"
                        name="superPower"
                        value={avenger.superPower}
                        onChange={handleChange}
                    /></label>

                <button>Submit!</button>
            </form>
        </div>
    )
}


export default Form








