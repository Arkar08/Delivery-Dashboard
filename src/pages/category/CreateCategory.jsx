import Input from '../../components/Input'
import { Button } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useCategory } from '../../context/CategoryContext';

const CreateCategory = () => {

  const navigate = useNavigate();
  const [category,setCategory] = useState({
    name:""
  })

  const {createCategory} = useCategory();

  const categoryChange = (event) =>{
      setCategory((prev)=>
       (
          {
            ...prev,[event.target.name]:event.target.value
          }
       )
    )
  }

  const cancelBtn = () =>{
    setCategory({
      name:""
    })
    navigate("/category")
  }

  const createBtn = async() =>{
    await createCategory(category)
    setCategory({
      name:""
    })
    navigate("/category")
  }

  return (
    <div>
        <h3 className='text-2xl p-4'>Create Category</h3>
       <div className='shadow-lg relative h-[72vh] mt-5 w-[90%] mx-auto rounded-md p-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Category">Category Name</label>
              <Input placeholder="Enter Category Name" value={category.name} name="name" onChange={categoryChange}/>
            </div>
          </div>
          <div className='absolute bottom-4 right-[42%] flex gap-5'>
            <Button variant='outlined' color='error' onClick={cancelBtn}>Cancel</Button>
            <Button variant='contained' color='primary' onClick={createBtn}>Create</Button>
          </div>
       </div>
    </div>
  )
}

export default CreateCategory
