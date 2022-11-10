import React from 'react'
import { useParams } from 'react-router-dom'

const University = () => {
  const uId = useParams().uid
  return <div>{uId}</div>
}

export default University
