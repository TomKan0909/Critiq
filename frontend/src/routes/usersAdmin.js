import * as React from 'react';
import { Link } from "react-router-dom";
import KeyStats from "../components/usersAdmin/keyStats";
import UserViewer from '../components/usersAdmin/userViewer';

const UsersAdmin = () => {
  return (
    <>
      <main>
        <KeyStats></KeyStats>
        <UserViewer></UserViewer>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default UsersAdmin;