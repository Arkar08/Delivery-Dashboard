/* eslint-disable react-hooks/exhaustive-deps */
import Input from '../../components/Input'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from '../../apiConfig';
import {useCategory} from '../../context/CategoryContext'

const EditCategory = () => {

    const navigate = useNavigate();
    const [editCategory,setEditCategory] = useState({
        name:"",
        _id:""
    })
              
      const {state} = useLocation()
      
      useEffect(()=>{
        getCategoryId()
      },[state])

      const {updateCategory} =useCategory()
    

      const getCategoryId = async()=>{
              try {
                  await Axios.get(`/category/${state.id}`).then((res)=>{
                      if(res.data.status === 200 || res.data.success === true){
                        console.log(res.data.data[0])
                          setEditCategory(res.data.data[0])
                      }
                  }).catch((error)=>{
                       alert(error.response.data.message)
                  })
              } catch (error) {
                  alert(error.response.data.message)
              }
          }
      
          const editChange = (event) =>{
              setEditCategory((prev)=>(
                  {
                      ...prev,[event.target.name]:event.target.value
                  }
              ))
          }

          const cancelBtn = () =>{
            setEditCategory({
                name:"",
                _id:""
            })
            navigate("/category")
          }

          const updateBtn = async() =>{
                const data = {
                    _id:editCategory._id,
                    data:{
                        name:editCategory.name
                    }
                }
                await updateCategory(data)
                navigate("/category")
          }

    

  return (
     <div>
        <h3 className='text-2xl p-4'>Update Category</h3>
       <div className='shadow-lg relative h-[72vh] mt-5 w-[90%] mx-auto rounded-md p-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Category">Category Name</label>
              <Input placeholder="Enter Category Name" value={editCategory.name} name="name" onChange={editChange} />
            </div>
          </div>
          <div className='absolute bottom-4 right-[42%] flex gap-5'>
            <Button variant='outlined' color='error' onClick={cancelBtn}>Cancel</Button>
            <Button variant='contained' color='primary' onClick={updateBtn}>Update</Button>
          </div>
       </div>
    </div>
  )
}

export default EditCategory
