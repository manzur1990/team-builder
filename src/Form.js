//In `Form.js` build out your markup
import React, { useState } from 'react'


const Form = (props) => {
    console.log("formprops", props)
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
        // console.log(avenger.name);
        // console.log(avenger.heroName)
        // console.log(avenger.superPower)

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
                <label>Full Name
                <input
                        type="text"
                        name="name"
                        value={avenger.name}
                        onChange={handleChange}
                    /></label>
                <label>Hero Name
                <input
                        type="text"
                        name="heroName"
                        value={avenger.heroName}
                        onChange={handleChange}
                    /></label>
                <label>Super Power
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








