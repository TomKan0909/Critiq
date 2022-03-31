import { Link, useLocation, useParams } from "react-router-dom";
import CritiqRoom from "../components/critiqRoom/index";

const CritiqRoomView = () => {
  return (
    <>
      <CritiqRoom/>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default CritiqRoomView;
