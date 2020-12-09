import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
/*
{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
}
 */
const AddMovie = (props) => {
    // axios.post(http://localhost:5000/api/movies)
    const history = useHistory();
    const [formState, setFormState] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars1:'',
        stars2:'',
        stars3:''
    })

    const handleChange = (e) => {
        setFormState({...formState,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        const obj = {
            id:Date.now(),
            title:formState.title,
            director:formState.director,
            metascore:formState.metascore,
            stars:[formState.stars1,formState.stars2,formState.stars3]
        }
        axios.post('http://localhost:5000/api/movies',obj)
        .then(res => {
           console.log(res)
           history.push('/')
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    return (
        <div className="save-wrapper">
            <h1>Add Movie</h1>
            <form>
                Movie Title: <input type="text" name="title"
                onChange={handleChange} value={formState.title}/><br/>
                Movie Director: <input type="text" name="director"
                onChange={handleChange} value={formState.director}/><br/>
                Movie Metascore: <input type="number" name="metascore"
                onChange={handleChange} value={formState.metascoe}/><br/>
                <h2>Stars</h2>
                Star 1: <input type="text" name="stars1"
                onChange={handleChange} value={formState.stars1}/><br/>
                Star 2: <input type="text" name="stars2"
                onChange={handleChange} value={formState.stars2}/><br/>
                Star 3: <input type="text" name="stars3"
                onChange={handleChange} value={formState.stars3}/>
            </form>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddMovie
