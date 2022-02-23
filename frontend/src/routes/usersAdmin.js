import * as React from 'react';
import { Link } from "react-router-dom";
import DataSelector from "../components/usersAdmin/dataSelector";

const UsersAdmin = () => {
  return (
    <>
      <main>
        <DataSelector></DataSelector>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default UsersAdmin;