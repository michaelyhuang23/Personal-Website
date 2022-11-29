import Navlink from './Navlink'
const Sidebar = ({pageIndex}) => {
    return (
        <div className="sidebar">            
            <Navlink title={(<img src='/logo.png' className='navLinkImage'/>)} url="/"/>
            <Navlink title="Projects" url="/project"/>
            <Navlink title="Intuitive Physics" url="https://intuitivephysics.me" />
            <Navlink title="Daylight Reveries" url="https://www.daylightreveries.org" />
        </div>
    )
}

export default Sidebar