import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
