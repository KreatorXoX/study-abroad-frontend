import React from 'react'
import { useParams } from 'react-router-dom'

import Input from '../shared/components/Form-Elements/Input'
import Button from '../shared/components/Form-Elements/Button'
import { data } from '../dummyData/countries'
import styles from './CountryDetails.module.css'

const CountryDetails = () => {
  const cId = useParams().cid
  const country = data.countries.find(country => country.id === cId)
  const selectOptions = country.schools.map(school => (
    <>
      <option value={school.id * Math.random() * 1000}>{school.name}</option>
    </>
  ))
  return (
    <div className={styles.rows}>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div>
            <h2>Education in {country.name}</h2>
            <p>
              ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className={styles.searchUni}>
              <form className={styles.searchForm}>
                <div className={styles.dropdown}>
                  <Input
                    id='schoolName'
                    element='select'
                    options={selectOptions}
                    type='text'
                    defaultText={'Please pick a school name'}
                    onInputChange={() => {}}
                    validators={[]}
                    initialValid
                  />
                </div>
                <div className={styles.formAction}>
                  <Button mid dark>
                    Show
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div>
            <iframe
              className={styles.video}
              width='80%'
              height='100%'
              src='https://www.youtube.com/embed/z1848wsndXU'
              title="Belçika'da Gezilecek Yerler: Gezimanya Ghent Rehberi"
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>

          <h2>
            Life in <span>{country.name}</span>
          </h2>
        </div>
      </div>
      <div className={styles.row2}>
        <h2>
          Universities You Can Apply in <span> {country.name}</span>
        </h2>
        <div className={styles.universities}>
          {country.schools.map(school => (
            <div key={school.id} className={styles.schoolCard}>
              <img alt='school' src={school.logo} />
              <Button
                to={`/universities/${school.id}`}
                exact={'true'}
                style={{
                  width: '100%',
                  fontSize: '0.9rem',
                  padding: '0.25rem 0'
                }}
              >
                Apply
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
