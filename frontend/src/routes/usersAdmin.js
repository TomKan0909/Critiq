import { Link } from "react-router-dom";
import Plot from "../components/usersAdmin/plot";

const UsersAdmin = () => {
  return (
    <>
      <main>
        <Plot data='ageDistribution'>
        </Plot>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default UsersAdmin;