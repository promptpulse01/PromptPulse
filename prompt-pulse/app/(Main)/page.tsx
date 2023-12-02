"use client"
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import Loader from '@/utils/Loader'
import axios from 'axios'
import { useEffect, useState } from 'react'


type Props = {}

const Page = (props: Props) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    axios.get('/api/me').then((res) => {
      setLoading(false)
      setUser(res.data.user)
    }).catch((error) => {
      setLoading(true)
      console.log(error)
    })
  }, [])


console.log(user)

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="banner">
            <Header activeItem={0} user={user} />
            <Hero />
          </div>
        </>
      )}
    </>
  )
}

export default Page