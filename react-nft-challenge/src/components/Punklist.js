import React from 'react'
import CollectionCard from './CollectionCard'
import './Punklist.css'

const Punklist = ({ punkListData, setSelectedPunk}) => {
    return (
        <div className='punkList'>
            {punkListData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.traits[1]?.value)}>
                    <CollectionCard 
                        key={punk.traits[1]?.value}
                        id={punk.traits[1]?.value}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_preview_url}
                    />
                </div>
            ))}
            
        </div>
    )
}

export default Punklist
