import React, { useState } from 'react'
import './NewPost.css'
import { useNavigate } from 'react-router-dom'
import blogfatch from '../axios/config'

const NewPost = () => {

  const navigate = useNavigate()

  const [title,setTitle] = useState()
  const [body,setBody] = useState()

  const createPost = async (e)=>{
    e.preventDefault()

    const post = {title,body,userId: 1}

    await blogfatch.post('/posts',{
      body:post,
    })

    navigate('/')
  }

  return (
    <div className='new-post'>
      <h2>inserir new post</h2>
      <form action="" onSubmit={(e)=> createPost(e)}>
        <div className='form-control'>
          <label htmlFor='title'>Título:</label>
            <input 
            type="text" 
            id='title' 
            name='title' 
            placeholder='Digite o Titulo'
            onChange={(e)=> setTitle(e.target.value)}
            />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteudo:</label>
            <textarea 
            name="body" 
            id="body" 
            placeholder='Digite o conteudo'
            onChange={(e)=> setBody(e.target.value)}
            ></textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn' />
      </form>
    </div>
  )
}

export default NewPost