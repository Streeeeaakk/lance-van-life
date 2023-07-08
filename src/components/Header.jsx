import { Link, NavLink } from 'react-router-dom';

export default function(){

    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <NavLink 
                to="/host"
                className={({isActive}) => isActive ? "activeStyle" : ""}
                >
                Host
            </NavLink>

            <NavLink 
                to="/about"
                className={({isActive}) => isActive ? "activeStyle" : ""}
                >
                About
            </NavLink>

            <NavLink 
                to="/vans"
                className={({isActive}) => isActive ? "activeStyle" : ""}
            >
                Vans
            </NavLink>

        </nav>
      </header>
    )
}