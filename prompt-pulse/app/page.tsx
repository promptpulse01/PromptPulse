"use client"
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import React, { useEffect, useState } from 'react'

type Props = {}

const Page = (props: Props) => {



  return (
    <>
    <div className="banner">
      <Header activeItem={0} />
      <Hero/>
    </div>
    </>
  )
}

export default Page