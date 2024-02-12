import React from 'react'

type Props = {
  ispro:any
}

const SettingPage = ({ispro}: Props) => {
  return (
    <>
    {ispro ? <h1>Pro</h1> : <h1>Free</h1>}
    </>
  )
}

export default SettingPage