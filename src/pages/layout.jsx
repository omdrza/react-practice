import {Outlet , Link, NavLink} from 'react-router-dom';


function Layout() {
    
    return(
        <>

        <nav className="navbar navbar-expand-md bg-1">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <ul className="nav navbar-nav ms-auto">
          <li className="nav-item"><NavLink className={
                ({isActive,isPending})=>isActive ?'active nav-link' : 'nav-link'}
                to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={
                ({isActive,isPending})=>isActive ?'active nav-link' : 'nav-link'}
                to="/blog">Blog</NavLink></li>
         
          
        </ul>
    <dialog className="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body mb-2 md:mb-0">



        <ul className="nav navbar-nav me-auto">
          <li className="nav-item"><NavLink classNameName={
                ({isActive,isPending})=>isActive ? 'active, nav-link' : 'nav-link'}
                to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink classNameName={
                ({isActive,isPending})=>isActive ? 'active, nav-link' : 'nav-link'}
                to="/blog">Blog</NavLink></li>
         
          
        </ul>
        
      </div>
    </dialog>
  </div>
</nav>




            




            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;