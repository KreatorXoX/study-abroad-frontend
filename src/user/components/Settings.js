import React from 'react'

import { useAuthStore } from '../../store/authStore'
import { useForm } from '../../hooks/form-hook'
import Button from '../../shared/components/Form-Elements/Button'
import Input from '../../shared/components/Form-Elements/Input'

import { employees } from '../../dummyData/employees'

import styles from './Applications.module.css'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
const Settings = () => {
  const { formState: consultId, inputHandler: consultInputHandler } = useForm({
    consultId: {
      value: '',
      isValid: false
    }
  })
  const { formState, inputHandler } = useForm({
    oldPassword: {
      value: '',
      isValid: false
    },
    password1: {
      value: '',
      isValid: false
    },
    password2: {
      value: '',
      isValid: false
    }
  })

  const user = useAuthStore(state => state.user)

  const options = (
    <>
      {employees.map(emp => (
        <option key={emp.id} value={emp.id}>
          {emp.name}
        </option>
      ))}
    </>
  )
  const match =
    formState.inputs.password1.value === formState.inputs.password2.value
  const consultHandler = e => {
    e.preventDefault()
    if (consultId.inputs.consultId.value === 'default') return
    else console.log(consultId.inputs)
  }
  const passChangeHandler = e => {
    e.preventDefault()
    console.log(formState.inputs)
  }

  return (
    // admin or the url userId is equal to the logged in user.
    <div className={styles.layout}>
      <div className={styles.settings}>
        {user.role === 'admin' && (
          <div>
            <h4>Assign Consultant</h4>
            <form onSubmit={consultHandler}>
              <Input
                id='consultId'
                element='select'
                onInputChange={consultInputHandler}
                options={options}
                validators={[]}
                defaultText='Assign Consultant'
                initialValid
                initialValue='default'
              />
              <Button
                disabled={consultId.inputs.consultId.value === 'default'}
                type='submit'
              >
                Save
              </Button>
            </form>
          </div>
        )}
        <div>
          <h4>Update Password</h4>
          <form onSubmit={passChangeHandler}>
            <Input
              id='oldPassword'
              type='password'
              placeholder='Old Password'
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              initialValid
            />
            <Input
              id='password1'
              type='password'
              placeholder='New Password'
              onInputChange={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Required field'
              initialValid
            />
            <Input
              id='password2'
              type='password'
              placeholder='Repeat Password'
              onInputChange={inputHandler}
              errorText='Required field'
              validators={[VALIDATOR_REQUIRE()]}
            />
            {!match && <p style={{ color: 'red' }}>Password doesnt match</p>}
            <Button disabled={!formState.isValid || !match} type='submit'>
              Change
            </Button>
          </form>
        </div>

        <div>
          <h4>Delete Account</h4>
          <Button danger>Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default Settings
