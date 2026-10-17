import React, { useContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const MAX_SIZE = 2 * 1024 * 1024 // 2MB

function Profile() {
  const { token, setToken, backendurl, navigate } = useContext(ShopContext)

  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [loading, setLoading] = useState(false)
  const fileRef = useRef(null)

  // reload dile token context-e ashte ektu somoy lage, tai localStorage-o dekhi
  const authToken = token || localStorage.getItem('token')

  useEffect(() => {
    if (!authToken) {
      navigate('/login')
      return
    }
    if (!token) setToken(authToken)

    const loadProfile = async () => {
      try {
        const res = await axios.post(backendurl + '/api/user/profile', {}, { headers: { token: authToken } })
        if (res.data.success) {
          setUser(res.data.user)
          setName(res.data.user.name)
        } else {
          toast.error(res.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
    loadProfile()
  }, [authToken])

  // preview-er object URL memory theke clean kora
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  const onImageChange = (e) => {
    const picked = e.target.files[0]
    if (!picked) return

    if (!picked.type.startsWith('image/')) {
      toast.error('Shudhu image file dao')
      return
    }
    if (picked.size > MAX_SIZE) {
      toast.error('Image 2MB er cheye boro hobe na')
      return
    }

    setFile(picked)
    setPreview(URL.createObjectURL(picked))
  }

  const onSaveHandler = async (e) => {
    e.preventDefault()
    if (!file && name.trim() === user.name) {
      toast.info('Kono change nai')
      return
    }

    try {
      setLoading(true)
      const formData = new FormData()
      formData.append('name', name.trim())
      if (file) formData.append('image', file)

      const res = await axios.post(backendurl + '/api/user/update-profile', formData, {
        headers: { token: authToken },
      })

      if (res.data.success) {
        setUser(res.data.user)
        setFile(null)
        setPreview('')
        toast.success('Profile updated')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!user) return <div className='border-t pt-14 text-gray-500'>Loading...</div>

  const shownImage = preview || user.image

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-8'>
        <Title text1={'MY'} text2={'PROFILE'} />
      </div>

      <form onSubmit={onSaveHandler} className='flex flex-col items-center gap-6 w-full sm:max-w-96 m-auto text-gray-700'>
        {/* avatar */}
        <div className='relative'>
          {shownImage ? (
            <img
              src={shownImage}
              alt='Profile'
              className='w-32 h-32 rounded-full object-cover border'
            />
          ) : (
            <div className='w-32 h-32 rounded-full border bg-gray-100 flex items-center justify-center text-4xl font-medium text-gray-500'>
              {user.name?.charAt(0).toUpperCase()}
            </div>
          )}

          <button
            type='button'
            onClick={() => fileRef.current.click()}
            className='absolute bottom-0 right-0 w-9 h-9 rounded-full bg-black flex items-center justify-center cursor-pointer'
            title='Change photo'
          >
            <img src={assets.profile_icon} alt='' className='w-4 invert' />
          </button>

          <input
            ref={fileRef}
            type='file'
            accept='image/*'
            hidden
            onChange={onImageChange}
          />
        </div>

        <p className='text-xs text-gray-400 -mt-3'>JPG / PNG / WEBP, max 2MB</p>

        {/* name */}
        <div className='w-full'>
          <p className='text-sm mb-1'>Name</p>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 border border-gray-800'
            required
          />
        </div>

        {/* email (change kora jabe na) */}
        <div className='w-full'>
          <p className='text-sm mb-1'>Email</p>
          <input
            type='email'
            value={user.email}
            disabled
            className='w-full px-3 py-2 border border-gray-300 bg-gray-100 text-gray-500'
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-black text-white font-light px-8 py-2 mt-2 cursor-pointer disabled:opacity-50'
        >
          {loading ? 'Saving...' : 'Save changes'}
        </button>
      </form>
    </div>
  )
}

export default Profile
