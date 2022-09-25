import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <h1>Navbar</h1>
      <Link to="about">About Page</Link>
      <Outlet />
    </>
  );
}
