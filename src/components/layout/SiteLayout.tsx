import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
export function SiteLayout() { return <><Navbar/><main><Outlet/></main></> }
