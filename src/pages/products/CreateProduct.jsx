/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '@mui/material'
import Input from '../../components/Input'
import Select from '../../components/Select'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';
import { useCategory } from '../../context/CategoryContext';
import Axios from '../../apiConfig';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const CreateProduct = () => {

  const [image,setImage] = useState('');
  const [productList,setProductList] = useState({
    title:"",
    category:"",
    price:"",
    description:"",
    image:""
  })
  const navigate = useNavigate();

  const {createProduct} = useProduct();
  const {category,getCategory} = useCategory();

  useEffect(()=>{
    getCategory()
  },[])

  const upload = async(event) =>{

      const files = event.target.files;
      const fileData = new FormData()

      fileData.append("file",files[0])
      await Axios.post("/upload",fileData).then((res)=>{
        setProductList((prev)=>(
          {
            ...prev,image:res.data
          }
        ))
      })


      if(files){
        const url = URL.createObjectURL(files[0])
        setImage(url)
      }
  }

  const productChange = (event) => {
    setProductList((prev)=>(
      {
        ...prev , [event.target.name] : event.target.value
      }
    ))
  }


  const cancelBtn = () =>{
    setProductList({
      title:"",
      category:"",
      price:"",
      description:"",
      image:""
    })
    navigate("/products")
  }

  const createBtn = async() =>{
    await createProduct(productList)
    setProductList({
      title:"",
      category:"",
      price:"",
      description:"",
      image:""
    })
    navigate("/products")
  }
  

  return (
    <div>
        <h3 className='text-2xl  p-4'>Create Products</h3>
       <div className='shadow-lg relative h-[72vh] mt-2 w-[90%] mx-auto rounded-md p-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Title">Title</label>
              <Input placeholder="Enter Title" value={productList.title} name="title" onChange={productChange}/>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Category">Category</label>
              <Select value={productList.category} name="category" onChange={productChange}>
                   {
                    category.map((cate)=>{
                      return (
                        <option key={cate.id} value={cate.id} className='mt-3 cursor-pointer'>{cate.name}</option>
                      )
                    })
                  }
              </Select>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Price">Price</label>
              <Input placeholder="Enter Price" value={productList.price} name="price" onChange={productChange} type="number"/>
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="Description">Description</label>
              <Input placeholder="Enter Description" value={productList.description} name="description" onChange={productChange}/>
            </div>
            <div className='flex flex-col mt-5'>
                <label htmlFor="Image Cover" className='mb-3'>Image Cover Upload</label>
                 <Button
                    component="label"
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload files
                    <VisuallyHiddenInput
                      type="file"
                      onChange={upload}
                      name='image'
                      accept='.png,.jpeg,.jpg,.svg'
                    />
                  </Button>
            </div>
            <div className='shadow-lg rounded-md w-[60%] h-[250px] mt-8 mx-auto'>
              {
                image !== '' && (
                  <img src={image} alt="upload_Image" className='w-[100%] h-[100%]'/>
                )
              }
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

export default CreateProduct
