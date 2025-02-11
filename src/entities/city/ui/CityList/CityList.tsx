import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/api/hooks.ts'
import Button from '../../../../shared/ui/Button/Button.tsx'
import { clearHistory, getCity } from '../../../weather/model/weatherSlice.ts'
import styles from './styles.module.css'

const CityList = () => {
  const history = useAppSelector((state) => state.weather.history)
  const dispatch = useAppDispatch()

  const handleReset = (): void => {
    dispatch(clearHistory())
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleReset}>clear</Button>
      {history.length > 0 ? (
        <div className={styles.list}>
          {history.map((city: string, index: number) => (
            <p key={index} onClick={() => dispatch(getCity(city))}>
              {city}
            </p>
          ))}
        </div>
      ) : (
        <p>no history</p>
      )}
      <Button>
        <Link to="/history">see history</Link>
      </Button>
    </div>
  )
}

export default CityList
