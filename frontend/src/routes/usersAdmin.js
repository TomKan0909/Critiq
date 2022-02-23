import * as React from 'react';
import { Link } from "react-router-dom";
import KeyStats from "../components/usersAdmin/keyStats";

const UsersAdmin = () => {
  return (
    <>
      <main>
        <KeyStats></KeyStats>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default UsersAdmin;