import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from '../hooks/form-hook'
import Input from '../shared/components/Form-Elements/Input'
import Button from '../shared/components/Form-Elements/Button'
import { data } from '../dummyData/countries'
import styles from './University.module.css'

const University = () => {
  const history = useHistory()
  const uid = useParams().uid
  const cid = useParams().cid
  const country = data.countries.find(c => c.id === cid)
  const university = country.schools.find(u => u.id === uid)

  return (
    <div className={styles.rows}>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div>
            <h2>{university.name}</h2>
            <h3>Cui servire regnare est</h3>
            <div className={styles.searchUni}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                asperiores totam in omnis vel amet ea molestiae, soluta tenetur
                deserunt magni ratione fugit a? Laudantium libero nemo fugiat
                labore sit.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div>
            <iframe
              className={styles.video}
              width='80%'
              height='100%'
              src='https://www.youtube.com/embed/gfUSAEJINRY'
              title='BRUSSELS City Tour / Belgium'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>

          <h2>
            Life in <span>{university.name}</span>
          </h2>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={`${styles.item} ${styles.item1}`}>
          <div className={styles.overlay}>
            <h5 className={styles.overlayTitle}>education</h5>
            <h6 className={styles.overlayDescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus recusandae
            </h6>
          </div>
        </div>
        <div className={`${styles.item} ${styles.item2}`}>
          <div className={styles.overlay}>
            <h5 className={styles.overlayTitle}>research</h5>
            <h6 className={styles.overlayDescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus recusandae
            </h6>
          </div>
        </div>
        <div className={`${styles.item} ${styles.item3}`}>
          <div className={styles.overlay}>
            <h5 className={styles.overlayTitle}>engage</h5>
            <h6 className={styles.overlayDescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus recusandae
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default University
