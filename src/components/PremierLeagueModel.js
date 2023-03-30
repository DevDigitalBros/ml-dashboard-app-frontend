import {React , useState} from 'react'
import Options from '../utils/Options'
import { Dropdown } from 'primereact/dropdown';

const PremierLeagueModel = () => {
  const [homeTeam, setHomeTea,] = useState('')
  const [awayTeam, setAwayTeam] = useState('')
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h2>Select:</h2>
          <p>Home Team:</p>
        </div>
        <div className="col-sm-12 col-md-6">
          <h2>Section 2</h2>
          <p>This is the content of section 2.</p>
        </div>
      </div>
    </div>
  )
}

export default PremierLeagueModel