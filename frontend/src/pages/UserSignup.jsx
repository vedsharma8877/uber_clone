import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, newUser)
    if(response.status === 201) {
      const data = response.data
      setUser(data.user)
      navigate('/home')
    }
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='uber_logo'></img>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            required
            type='email'
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            base='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            type='password'
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
            base='password'
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Create Account</button>
        </form>
        <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'> By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from Uber and
          its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup