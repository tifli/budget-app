import './Recommendation.css'
import { useNavigate } from 'react-router-dom'

export default function Recommendation() {
    const navigate = useNavigate()

    return (
        <div>
            <p>Recommendation</p>
            <button onClick={() => navigate('/')}>Click to go to Data Entry</button>
        </div>
    )
}