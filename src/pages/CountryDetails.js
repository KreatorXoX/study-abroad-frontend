import React from 'react'
import { useParams } from 'react-router-dom'
const CountryDetails = () => {
  const cId = useParams().cid

  return <div>sex {cId}</div>
}

export default CountryDetails
