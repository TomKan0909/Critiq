import { Link, useLocation } from "react-router-dom";
import CritiqRoom from '../components/critiqRoom/index';

const CritiqRoomViewAdmin = () => {
  const { state } = useLocation();
  const { user } = state;
  return (
    <>
      <CritiqRoom user={[user, true]}/>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default CritiqRoomViewAdmin;
