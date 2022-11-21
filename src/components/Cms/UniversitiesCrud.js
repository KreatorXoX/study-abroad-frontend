import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../shared/components/Form-Elements/Button'
import Card from '../../shared/components/UI-Elements/Card'
import SearchBar from '../../shared/components/UI-Elements/SearchBar'

import UniversityForm from '../UniversityForm/UniversityForm'
import { data } from '../../dummyData/countries'

import styles from './UserList.module.css'
const UniversitiesCrud = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className={styles.listPage}>
      {showForm && (
        <div style={{ width: '100%', display: 'flex', placeContent: 'center' }}>
          <UniversityForm setShowForm={setShowForm} />
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
              Add University
            </Button>
          </div>
          <div className={styles.list}>
            {data.countries.map(country =>
              country.schools.map(school => (
                <Link to={`/profile/${school.id}`} key={school.id}>
                  <Card name={school.name} image={school.logo} />
                </Link>
              ))
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default UniversitiesCrud
