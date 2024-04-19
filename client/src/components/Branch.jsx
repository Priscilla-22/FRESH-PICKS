import React from 'react'
function Branch({ name, location, image }) {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full object-cover" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{location}</p>
            </div>
      </div>
    )
}

export default Branch
