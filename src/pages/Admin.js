import React, { useState } from 'react'

import Employees from '../components/Cms/Employees'
import Students from '../components/Cms/Students'
import CountriesCrud from '../components/Cms/CountriesCrud'
import UniversitiesCrud from '../components/Cms/UniversitiesCrud'
import styles from './Admin.module.css'
const Admin = () => {
  const [page, setPage] = useState(1)
  return (
    <div className={styles.content}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${page === 1 ? styles.active : ''}`}
          onClick={() => setPage(1)}
        >
          Employees
        </div>
        <div
          className={`${styles.tab} ${page === 2 ? styles.active : ''}`}
          onClick={() => setPage(2)}
        >
          Students
        </div>
        <div
          className={`${styles.tab} ${page === 3 ? styles.active : ''}`}
          onClick={() => setPage(3)}
        >
          Countries
        </div>
        <div
          className={`${styles.tab} ${page === 4 ? styles.active : ''}`}
          onClick={() => setPage(4)}
        >
          Universities
        </div>
      </div>

      <div className={styles.page}>
        {page === 1 && <Employees />}
        {page === 2 && <Students />}
        {page === 3 && <CountriesCrud />}
        {page === 4 && <UniversitiesCrud />}
      </div>
    </div>
  )
}

export default Admin
