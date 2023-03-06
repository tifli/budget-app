import './DataEntry.css'
import { useNavigate } from 'react-router-dom'

export default function DataEntry() {
    const navigate = useNavigate()

    return (
        <div>
            <p>Data Entry</p>
            <button onClick={() => navigate('/recommendation')}>Click to go to recommendation</button>
        </div>
    )
}