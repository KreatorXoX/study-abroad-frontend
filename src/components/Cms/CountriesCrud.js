import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../shared/components/Form-Elements/Button'
import Card from '../../shared/components/UI-Elements/Card'
import SearchBar from '../../shared/components/UI-Elements/SearchBar'

import CountryForm from '../CountryForm/CountryForm'
import { data } from '../../dummyData/countries'

import styles from './UserList.module.css'
const CountriesCrud = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={styles.listPage}>
      {showForm && (
        <div style={{ width: '100%', display: 'flex', placeContent: 'center' }}>
          <CountryForm setShowForm={setShowForm} />
        </div>
      )}
      {!showForm && (
        <>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>
          <div className={styles.addEmp}>
            <Button
              onClick={() => {
                setShowForm(true)
              }}
              mid
              success
            >
              Add Country
            </Button>
          </div>
          <div className={styles.list}>
            {data.countries.map(country => (
              <Link to={`/profile/${country.id}`} key={country.id}>
                <Card name={country.name} image={country.flag} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default CountriesCrud
