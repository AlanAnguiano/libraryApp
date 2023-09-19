import './Navbar.css'

const Navbar = (props) => {
  return(
    <>
      <div className="navbar">
        <h1 className="navbar__title">{props.title}</h1>
      </div>
    </>
  )
}
