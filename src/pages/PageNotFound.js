import { Link } from "react-router-dom"
import pageNotFound from "../assets/images/page-not-found.jpg"

export const PageNotFound = () => {
  return (
    <section className="pageNotFound">
      <p>404 / PAGE NOT FOUND</p>
      <img src={pageNotFound}  />
      <Link to="/">
      <button>Back to Home</button>
      </Link>
    </section>
  )
}
