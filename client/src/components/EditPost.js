import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditPost = () => {

    const params = useParams();

  const [state, setState] = useState({
    topic: "",
    description: "",
    postCategory: ""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setState({...state,[name]:value})
  }

  const onsubmit = (e) => {
    e.preventDefault();

    const {topic, description, postCategory} = state;

    const data = {
      topic: topic, 
      description: description,
      postCategory: postCategory
    }
    console.log(data);

    axios.put(`http://localhost:8000/post/update/${params.id}`, data)
    .then((res) => {
      alert("Post updated successfully")
      if(res.data){
        setState({
          topic: "",
          description: "",
          postCategory: ""
        })
      }
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/post/get/${params.id}`).then((res) => {
      if(res.data){
        setState({
          topic: res.data.topic,
          description: res.data.description,
          postCategory: res.data.postCategory
        })
        
      }
    })
  },[params.id]);

    return(
        <div className='container'>
            <h4 >Edit Post</h4>
            <div class="mb-3">
        <label  class="form-label">Topic</label>
        <input
        type="text" 
        class="form-control" 
        name="topic" 
        placeholder="Enter Topic"
        value={state.topic}
        onChange={handleChange}
        />
       
        </div>

       

        <div class="mb-3">
        <label  class="form-label">Description</label>
        <input type="text" 
        class="form-control" 
        name="description" 
        placeholder="Enter Description"
        value={state.description}
        onChange={handleChange}
        />
       
        </div>

        <div class="mb-3">
        <label class="form-label">Post Category</label>
        <input type="text" 
        class="form-control" 
        name="postCategory" 
        placeholder="Enter Post Category"
        value={state.postCategory}
        onChange={handleChange}
        />
        
        </div>

        <button className='btn btn-success' type='submit' onClick={onsubmit}>
        <i className='fas fa-check-square'>&nbsp; Update</i>
        </button>

        </div>
    )
}

export default EditPost