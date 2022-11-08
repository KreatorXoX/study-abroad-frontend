import React from 'react'
import { useHistory } from 'react-router-dom'
import data from '../dummyData/countries'
import './Countries.css'

const Countries = () => {
  const history = useHistory()
  const clickHandler = id => {
    history.push(`/countries/${id}`)
  }
  return (
    <div className='container'>
      <div className='bgSec'>
        <div className='content'>
          <div className='infoContent'>
            <h2>
              Bachelors/Masters Degree <br /> Programmes in Europe
            </h2>
            <div className='videoSection'>
              <iframe
                title='europe-info'
                width='100%'
                height='150'
                src='https://www.youtube.com/embed/tgbNymZ7vqY'
              />
            </div>
          </div>
          <div>
            <h2>Countries</h2>
            <div className='countriesContent'>
              {data.countries.map(country => (
                <div
                  key={country.id}
                  className='country'
                  data-label={country.name}
                  onClick={clickHandler.bind(null, country.id)}
                >
                  <img src={data.flag} alt='flag' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countries
