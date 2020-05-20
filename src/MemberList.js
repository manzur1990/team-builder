import React from 'react'

const MemberList = (props) => {
   
    return (
        <div>
            {
                props.avenger.map(name => (
                    <div key={name.id}>
                        <h2>{name.name}</h2>
                        <p>{name.heroName}</p>
                        <p>{name.superPower}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default MemberList;
