import React , {useState ,useEffect} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; 
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";





const InfoUser = () => {

  const [data, setData] = useState('');
  const {id} = useParams();


 

  useEffect(()=>{
    if(id){
      console.log(id);
      getSingleUser(id)
    }
},[])



const getSingleUser = async (id)=>{
  const response = await axios.get(`http://localhost:3002/user/${id}`)
   if(response.status === 200){
       setData(response.data[0])

   }
}
console.log(data);

  return (
     
      <div className='w-full gap-2 flex justify-center mt-60'>

<Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
        <h2>Name : {data.name}</h2>
          <h2>Email : {data.email}</h2>
          <h2>Contact : {data.contact}</h2>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
       <Link to='/'>
       <Button>Home</Button>
       </Link>
      </CardFooter>
    </Card>
           
    </div>
     
  )
}

export default InfoUser