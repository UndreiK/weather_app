import { Link } from 'react-router-dom'
import Button from '../../../shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../app/api/hooks.ts'

const History = () => {
  const history = useAppSelector((state) => state.weather.history)

  return (
    <div>
      <Button>
        <Link to="/">back</Link>
      </Button>
      {history.length > 0 ? (
        <div>
          {history.map((city: string) => (
            <p>{city}</p>
          ))}
        </div>
      ) : (
        <p>no history</p>
      )}
    </div>
  )
}

export default History
