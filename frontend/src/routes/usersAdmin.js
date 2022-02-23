import * as React from 'react';
import { Link } from "react-router-dom";
import Plot from "../components/usersAdmin/header/plot";
import Header from "../components/usersAdmin/header/keyStats";

const UsersAdmin = () => {

  const [data, setData] = React.useState('None');

  return (
    <>
      <main>
        <Header data={data} setData={setData}></Header>
        <Plot data={data}></Plot>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default UsersAdmin;