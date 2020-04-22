import React, { useState } from 'react'


const Form = (props) => {
    console.log("formprops", props)
    const [avenger, setAvenger] = useState([{
        name: "",
        herName: "",
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
        // console.log(avenger.herName)
        // console.log(avenger.superPower)

        props.addNewName(avenger);
        setAvenger({
            name: "",
            herName: "",
            superPower: ''
        });
    }
    console.log("form:", avenger)
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={avenger.name}
                    onChange={handleChange}

                />
                <label>Hero Name</label>
                <input
                    type="text"
                    name="herName"
                    value={avenger.herName}
                    onChange={handleChange}
                />
                <label>Super Power</label>
                <input
                    type="text"
                    name="superPower"
                    value={avenger.superPower}
                    onChange={handleChange}
                />
                <button>Submit!</button>
            </form>
        </div>
    )
}


export default Form








