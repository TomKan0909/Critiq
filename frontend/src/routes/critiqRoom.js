import { Link, useLocation } from "react-router-dom";
import CritiqRoom from '../components/critiqRoom/index';

const CritiqRoomView = () => {
  const { state } = useLocation();
  const { user } = state;
  console.log(state);
  return (
    <>
      <CritiqRoom user={user}/>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default CritiqRoomView;
