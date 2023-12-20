import { Link } from "react-router-dom"

export const NotFound = () => {
    return(
        <div className="NotFound">
            <p>404 Not Found</p>
            <Link to={`/`}>Go to main home.</Link>
        </div>
    )
}