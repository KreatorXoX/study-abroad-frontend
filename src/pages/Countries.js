import React from 'react'
import { useHistory } from 'react-router-dom'
import { data } from '../dummyData/countries'
import Team from '../assets/images/Team.svg'
import Handshake from '../assets/images/Handshake.svg'
import Mortarboard from '../assets/images/Mortarboard.svg'

import styles from './Countries.module.css'

const Countries = () => {
  const history = useHistory()
  const clickHandler = id => {
    history.push(`/countries/${id}`)
  }
  console.log(data.countries[0].image)
  return (
    <div className='container'>
      <div className={styles.bgSec}>
        <div className={styles.content}>
          <div className={styles.contentInfo}>
            <h2>Shoot For the Stars</h2>
            <div>
              <iframe
                title='europe-info'
                width='100%'
                height='150'
                src='https://www.youtube.com/embed/tgbNymZ7vqY'
              />
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <h3>
              Bachelors/Masters Degree <br /> Programmes in Europe
            </h3>
            <div className={styles.countriesContent}>
              {data.countries.map(country => (
                <div
                  key={country.id}
                  className={styles.country}
                  data-label={country.name}
                  onClick={clickHandler.bind(null, country.id)}
                >
                  <img src={country.flag} width='60' alt='flag' />
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className={styles.foot}>
          <div className={styles.icon}>
            <img src={Team} width='40' alt='footer' />
            <label>Private Consultant</label>
          </div>
          <div className={styles.icon}>
            <img src={Handshake} width='40' alt='footer' />
            <label>Best Prices Guaranteed</label>
          </div>
          <div className={styles.icon}>
            <img src={Mortarboard} width='40' alt='footer' />
            <label>10 years of experience</label>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Countries
