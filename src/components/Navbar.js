import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  let home = null;
  let about = null;
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  if (location.pathname === '/') home = 'is-active';
  // eslint-disable-next-line no-unused-vars
  if (location.pathname === '/about') about = 'is-active';

  return (
    <>
      <div style={{ backgroundColor: '#eee' }} className="tabs is-centered is-medium">
        <ul>
          <li id="home" className={home}>
            <Link className="is-link" to="/">
              Home
            </Link>
          </li>
          <li id="about" className={about}>
            <Link className="is-link" to="about">
              About Page
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
