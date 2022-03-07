import { useEffect, useState } from "react";
import '../styles/Result.css'


function Result() {
    const [tirage, setTirage ] = useState([])
    const [drawnAt, setDrawnAt] = useState('')

    useEffect(() => {
        fetch('http://localhost:9000')
        .then((response) => { return response.json() })
        .then(res => {
            console.log(res)
            setTirage(res.results)
            setDrawnAt(res.drawn_at)
        })
        .catch(err => {
            console.log(err)
        })
      }, [])

    return (
        <div className="container">
            <div className="date"> {drawnAt} </div>
            <div className="tirage-list">
                <ul>
                {tirage &&
                    tirage.map(({ type, value }) => (
                        <span>
                            <li className="circle" key={value}>{value}
                            </li>
                            { (type === 'special') ?
                                <span className='star'>
                                    <svg className="star-svg" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>
                                </span>
                                : ''
                            }
                        </span>
                        
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Result