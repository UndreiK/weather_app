import React, { useState } from 'react'
import { useAppDispatch } from '../../../app/api/hooks.ts'
import { getCity } from '../../../entities/weather/model/weatherSlice.ts'
import Input from '../../../shared/ui/Input/Input.tsx'
import Button from '../../../shared/ui/Button/Button.tsx'

import styles from './styles.module.css'

const SearchCityForm = () => {
  const [city, setCity] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(getCity(city))
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <Button>Search</Button>
    </form>
  )
}

export default SearchCityForm
