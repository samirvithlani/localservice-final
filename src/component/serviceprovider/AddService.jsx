import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export const AddService = () => {
  const {register, handleSubmit} = useForm();
  const [categories, setcategories] = useState([])

    const submitHandler = async(data) => {
        console.log(data);
    }

  const loadCategories = async() => {

      const res = await axios.get('http://localhost:4000/categories/category');
      console.log(res.data.data);
      setcategories(res.data.data);

  }
  useEffect(() => {
    
    loadCategories();
    
  }, [])
  
  return (
    <div>
        <h1>AddProduct</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>name</label>
          <input type="text" {...register('name')} />
        </div>
        <div>
          <label>price</label>
          <input type="text" {...register('price')} />
        </div>
        <div>
          <label>qty</label>
          <input type="text" {...register('qty')} />
        </div>
        <select {...register('category')}>
        <option>SELECT CAT</option>
          {
            categories?.map((cat)=>{
              return <>
              
              <option value={cat._id}>{cat.name}</option>
              </>
            })
          }
        </select>
        <div>
          <input type="submit"  value="submit"/>
        </div>
        </form>
    </div>
  )
}
