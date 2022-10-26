import React from "react";
import { CircularProgress } from "@mui/material";

import User from "./User/User";
import styles from "./UserList.module.sass";

export default function UserList(props) {
  const { users } = props;
  return (
    <div className={styles.userList}>
      {users == false ? (
        <CircularProgress />
      ) : (
        users?.map((user) => <User key={user.id} user={user} />)
      )}
    </div>
  );
}
