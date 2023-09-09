import Meta from './Meta'
import Sidebar from './Sidebar'
import Main from './Blurb'

const Layout = ({ children }) => {
    return (
      <>
        <Meta />
        <main>
            <Sidebar />
            {children}
        </main>
      </>
    )
  }
  
  export default Layout
  