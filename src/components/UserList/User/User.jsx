import React from "react";
import { Tooltip } from "@mui/material";
import styles from "./User.module.sass";
import img from "../../../assets/img/photo-cover.svg";

const { red, user, userImg, userName, userPosition, userEmail, userPhone } =
  styles;

export default function User(props) {
  const { id, photo, name, position, email, phone } = props?.user;

  return (
    <div id={id} className={user}>
      <img className={userImg} src={photo ? photo : img} alt={name} />
      <p className={userName}>{name}</p>
      <p className={userPosition}>{position}</p>
      <Tooltip classes={{ tooltip: 'red' }} title={email}>
        <p className={userEmail}>{email}</p>
      </Tooltip>
      <p className={userPhone}>{phone}</p>
    </div>
  );
}
