import { Table, TableBody, Container } from "@mui/material";
import React from "react";

import RoastCard from './roastCard';


export default function RoastList () {
    const [users, updateUsers] = React.useState(["Good Student", "Bad Student", "Okay Student"]);

    return (
      <Container>
        <Table>
          <TableBody>
            {users.map(user => (
              <RoastCard userName={user} />
            ))}
          </TableBody>
        </Table>
      </Container>
    );
}