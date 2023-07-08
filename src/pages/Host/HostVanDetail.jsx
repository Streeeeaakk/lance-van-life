import {Link, useParams, Outlet, NavLink} from "react-router-dom"
import {useState, useEffect} from "react"

export default function HostVanDetail(){

    const {id} = useParams()
    const [currentVan, setCurrentVan] = useState([])

    const activeLink = {
        fontWeight: `bold`,
        textDecoration: `underline`,
        color: `#161616`
    }

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])


    if(!currentVan){
        return <h2>Loading...</h2>
    }

    return(
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({isActive}) => isActive ? activeLink : null}
                        
                    >Details
                    </NavLink>

                    <NavLink
                        to="pricing"
                        style={({isActive}) => isActive ? activeLink : null}

                    >Pricing
                    </NavLink>

                    <NavLink
                        to="photos"
                        style={({isActive}) => isActive ? activeLink : null}

                    >Photos
                    </NavLink>

                </nav>

                <Outlet context={[currentVan]}/>

            </div>
        </section>
    )
}