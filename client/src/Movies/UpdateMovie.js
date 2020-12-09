import React from 'react'

/*
{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
} 
*/
const UpdateMovie = () => {
    return (
        <div className="save-wrapper">
         <form>
             <input 
                type="text"
                name="title"
                id="title"
             />
             <input 
                type="text"
                name="director"
                id="director"
             />
             <input 
                type="number"
                name="metascore"
                id="metascore"
             />
        </form>   
        </div>
    )
}

export default UpdateMovie
