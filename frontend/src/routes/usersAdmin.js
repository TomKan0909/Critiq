import { Link } from "react-router-dom";
import Plot from "../components/usersAdmin/plot";

const UsersAdmin = () => {
  return (
    <>
      <main>
        <Plot>
        </Plot>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default UsersAdmin;