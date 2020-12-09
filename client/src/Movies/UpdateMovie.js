import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

/*
{
  id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
} 
*/
const initialState = {
    id:"",
    title:"",
    director:"",
    metascore:"",
    stars:[]
}

const UpdateMovie = (props) => {
    console.log(props)
    const [item,setItem] = useState(initialState)
    const [error,setError] = useState('')
    const params = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${params.id}`)
        .then(res=>{
            console.log(res.data)
            setItem(res.data)
        })
        .catch(err=>{
            setError(err.response)
        })
    },[params.id])

    const handleChange = (e) => {
        e.persist()
        setItem({...item,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/api/movies/${params.id}`,item)
        .then(res => {
            console.log(res)
            props.addToSavedList(item)
        })
        .catch(err => {
            setError(err.response)
        })
    }
    return (
        <div className="save-wrapper">
         <form onSubmit={handleSubmit}>
             <input 
                type="text"
                name="title"
                id="title"
                value={item.title}
                onChange={handleChange}
             />
             <input 
                type="text"
                name="director"
                id="director"
                value={item.director}
                onChange={handleChange}
             />
             <input 
                type="number"
                name="metascore"
                id="metascore"
                value={item.metascore}
                onChange={handleChange}
             />
             <button className="md-button form-button">Update</button>
        </form>   
        </div>
    )
}

export default UpdateMovie
