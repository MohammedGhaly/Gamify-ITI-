import { Box, Container,  Text,Stack,Input, Button,  } from '@chakra-ui/react';
import  { useState } from 'react'
import backGroundImage from '../assets/Vector.png'

function LoginPage() {

  const [formData,setormData]=useState({
    username: '',
    email: '',
    password: ''
  }) 
  const [errors,setErrors]=useState({})
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setormData({
        ...formData,[name] : value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const validationErrors={}
    if(!formData.username.trim()){
        validationErrors.username="username is required"
    }
    if(!formData.email.trim()){
        validationErrors.email="Email is required"
    }else if (!/\S+@\S+\.\S+/.test(formData.email))
    if(!formData.password.trim()){
        validationErrors.password="password is required"
    }
    setErrors(validationErrors)

    if(Object.keys(validationErrors).length===0){
        alert("Success !!")
    }
  }
  
  const [currentState,setcurrentState]=useState('Login');
  return (

    <Container 
    bgImage={`url(${backGroundImage})`}
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
    display='flex'
    justifyContent='flex-start'
    pt='50px' minHeight='100vh'
    minW='100%'
    >
    <Box m=' auto' alignItems='center' width='40%' height='600px' display='flex' justifyContent='space-around' bg='white'>
    <form onSubmit={handleSubmit} >
        <Box display="flex" justifyContent='center'  alignItems="center" mb="15px" mt="2px" >
            <Text fontWeight='bold' fontSize="6xl">{currentState}</Text> 
        </Box>
    
    <Stack spacing={5}>
       {currentState ==='Login' ? '' :
        <div>
            <Input
                margin='auto'
                display='flex' 
                name='username'
                width='350px'
                borderRadius="none"
                type="text"
                border='2px'
                borderColor='black'
                placeholder='Username'
                onChange={handleChange} 
                size='md'
            /> 
            {errors.username && <span>{errors.username}</span>}
        </div>}    
        <div>
            <Input
                margin='auto'
                display='flex'
                name='email'
                width='350px'
                borderRadius="none"
                type="email"
                border='2px'
                borderColor='black'
                placeholder='Email'
                onChange={handleChange}
                size='md' 
            /> 
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div> 
            <Input
                margin='auto'
                display='flex'
                name='password'
                width='350px'
                borderRadius="none"
                type="password"
                border='2px'
                borderColor='black'
                placeholder='Password'
                onChange={handleChange}
                size='md'
            />
            {errors.password && <span>{errors.password}</span>}
        </div>
    </Stack>
    <Box display="flex" justifyContent="space-between">
        <Text fontWeight='bold' pt='3px' pb='3px' fontSize='12px' cursor="pointer" >Forgot your password?</Text>
        {
            currentState === 'Login' 
            ? <Text pt='3px' pb='3px' fontWeight='bold' fontSize='12px' onClick={()=>setcurrentState('Sign Up')} cursor="pointer">Register Here</Text> 
            : <Text pt='3px' pb='3px' fontWeight='bold' fontSize='12px' onClick={()=>setcurrentState('Login')} cursor="pointer">Login Here</Text>
        }
    </Box>
    <Box>
        <Button type='submit' borderRadius="none" backgroundColor="#007AFF" color="white" width="100%">{currentState==='Login'? 'Sign In' :'Sign Up'}</Button>
    </Box>
    </form>
    </Box>
   </Container>
  )
}

export default LoginPage;