import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "./useAuth";

export const useLoginProps = ({}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  let [, setToken] = useAuth();
  const [wrong, setWrong] = useState(false);

  const onLogin = () => {
    let email = emailRef.current.input.value;
    let password = passwordRef.current.input.value;

    let data = {
      email,
      password,
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }

        return setWrong(true);
      })
      .then((data) => setToken(data));
  };
  return { onLogin, emailRef, passwordRef, wrong };
};
