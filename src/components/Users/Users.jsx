import React, { useState, useEffect } from "react";
import UserList from "../UserList/UserList";
import Button from "../../ui/Button/Button";
import { CircularProgress } from "@mui/material";

import { useFetch } from "../../hooks/useFetch";
import { usersCount } from "../../utils/consts";

// разбить на утилиті вінести переменние и вспомогательние функции,
// вінести в хуки например узфетч
// добавить лоадер и проверки

function Users() {
  const [pageCount, setPageCount] = useState(1);
  // const { data } = useFetch(
  //   `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageCount}&count=${usersCount}`
  // );
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageCount}&count=${usersCount}`
    )
      .then((response) => response.json())
      .then((response) => {
        setUsers([...users, ...response.users]);
        setData({
          total_pages: response.total_pages,
          page: response.page,
        });
      });
  }, [pageCount]);

  if (!data) return <CircularProgress />;

  const { total_pages, page } = data;

  const clickHandler = () => {
    setPageCount(pageCount + 1);
  };

  return (
    <div id="users">
      <h2>Working with GET request</h2>
      <UserList users={users} />
      {page < total_pages && <Button onClick={clickHandler}>Show more</Button>}
    </div>
  );
}

export default Users;
