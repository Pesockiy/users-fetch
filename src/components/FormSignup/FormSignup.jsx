import React, { useState, useEffect } from "react";
import { TextField, FormControlLabel } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Button from "../../ui/Button/Button";

import { API_TOKEN, API_USERS } from "../../utils/consts";
import { addUser } from "../../api/common";

export default function FormSignup() {

  const [positions, setPositions] = useState([]);
  const [positionValue, setPositionValue] = useState("");

  useEffect(() => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((res) => res.json())
      .then((res) => {
        setPositions([...positions, ...res.positions]);
        setPositionValue(res.positions[0]?.name);
      });
  }, []);

  // const [userName, setUserName] = useState(null);
  // const [userEmail, setUserEmail] = useState(null);
  // const [usePphone, setUserPhone] = useState(null);
  // const [userPositionId, setUserPositionId] = useState(null);
  // const [userPhoto, setUserPhoto] = useState(null);

  // const setNameHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const setEmailHandler = (event) => {
  //   setUserEmail(event.target.value);
  // };
  // const setPhoneHandler = (event) => {
  //   setUserPhone(event.target.value);
  // };
  // const setPositionHandler = (event) => {
  //   setUserPositionId(event.target.id);
  //   setPositionValue(event.target.value);
  // };
  // const setPhotoHandler = (event) => {
  //   setUserPhoto(event.target.files[0]);
  // };

  const [user, setUser] = useState({
    name: null,
    email: null,
    phone: null,
    position_id: null,
    photo: null,
  });

  const setUserHandler =
    (
      field,
      value = field === "photo" ? "files" : field === "id" ? "id" : "value"
    ) =>
    (event) => {
      setUser({
        ...user,
        [field]:
          value === "files" ? event.target[value][0] : event.target[value],
      });
      console.log(user);
    };

  const setPositionsHandler = (event) => {
    setPositionValue(event.target.value);
    console.log(event.target.id)
    setUser({ ...user, position_id: event.target.id });
  };


  const formData = new FormData();

  formData.append("name", user.name);
  formData.append("email", user.email);
  formData.append("phone", user.phone);
  formData.append("position_id", user.position_id);
  formData.append("photo", user.photo);

  return (
    <div>
      <TextField
        onChange={setUserHandler("name")}
        id="name"
        label="Your name"
        variant="outlined"
      />
      <TextField
        onChange={setUserHandler("email")}
        id="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={setUserHandler("phone")}
        id="phone"
        label="Phone"
        variant="outlined"
      />
      <TextField
        onChange={setUserHandler("photo")}
        type="file"
        id="file"
        variant="outlined"
        placeholder="Upload your photo"
      >
        text
      </TextField>
      <RadioGroup
        onChange={setPositionsHandler}
        id="signup"
        value={positionValue}
        name="radio-buttons-group"
      >
        {positions?.map((position) => {
          const { id, name } = position;
          return (
            <FormControlLabel
              key={id}
              value={name}
              label={name}
              control={
                <Radio id={id} classes={{ root: "radio", selected: "Mui-checked" }} />
              }
            />
          );
        })}
      </RadioGroup>
      <Button
        // disabled={!valid}
        onClick={() => addUser(API_TOKEN, API_USERS, formData)}
      >
        Sign up
      </Button>
    </div>
  );
}
