import React from 'react'
import axios  from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {

    const params = useParams();
  
    const[state, setState] = useState({
      posts: []
    })
  
    useEffect(() => {
    axios.get(`http://localhost:8000/post/get/${params.id}`).then((res) => {
      if(res.data){
        setState({
          posts:res.data
        })
        
      }
    })
  },[params.id]);

    return(

        <div style= {{marginTop:'20px'}}>
          <h4 >Post Details</h4>
            <h4>{state.posts.topic}</h4>
            <hr/>

            <d1 className="row">
                <dt className="col-sm-3">Description</dt>
                <dd className="col-sm-9">{state.posts.description}</dd>

                <dt className="col-sm-3">Post Category</dt>
                <dd className="col-sm-9">{state.posts.postCategory}</dd>


            </d1>
            
        </div>
    )
}

export default PostDetails 