import { useRef } from "react";
import { useAuth } from "./useAuth";

export const useLoginProps = ({}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  let [, setToken] = useAuth();

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
      .then((res) => res.json())
      .then((data) => setToken(data));
  };
  return { onLogin, emailRef, passwordRef };
};
