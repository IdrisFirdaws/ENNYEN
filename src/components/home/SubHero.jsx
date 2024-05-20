import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function SubHero() {
    return (
        <div className='subhero'>
            <div className="subheroWrapper">
                <h3>ENNYEN</h3>
                <p>A trade center where businesses meets businesses for a better and greener future.</p>
                <Link to='/'>
                    <span>Read more about our mission</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
            </div>
        </div>
    )
}
