import React, { useState } from "react";
import axios from "axios";
import { useNotification } from "../../utils/NotificationProvider";
import { useQuery } from "react-query";

function Login({ setToken }) {
  const { notifyError, notifyWarning, notifySuccess } = useNotification();
  const fetchLogin = (username, password) => {
    return axios.post(
      "http://192.168.99.182:8080/ords/alpha/login_procedure/",
      {
        p_username: username,
        p_password: password,
      }
    );
  };
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [userData, setUserData] = useState("");

  const { refetch } = useQuery(
    "getUser",
    () => fetchLogin(user.username, user.password),
    {
      enabled: false,
    }
  );
  // error example
  function handleSubmit(event) {
    event.preventDefault();
    if (user.username === "") {
      notifyWarning("Нэвтрэх нэр ээ оруулна уу");
    } else if (user.password === "") {
      notifyWarning("Нууц үг ээ оруулна уу");
    } else {
      refetch().then((result) => {
        if (result.error) {
          notifyError("Сервертэй холбогдож чадсангүй");
        } else {
          setUserData(result.data);
          if (result.data.status === 200) {
            if (result.data.data.p_status === "success") {
              notifySuccess(result.data.data.p_message);
              setToken(result.data.data.p_result[0]);
            } else {
              notifyWarning(result.data.data.p_message);
            }
          }
        }
      });
    }
  }
  const value = "0272";
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex justify-center items-center">
      <form className="bg-white h-[60%] w-[50%] rounded-[20px] overflow-hidden shadown-xl flex justify-center">
        <div className="w-full flex space-y-[1.5rem] flex-col justify-center items-center gap-2">
          <div className=" flex flex-col -space-y-2 title">
            <h1 className="text-[1.5rem] ">Улсын хил хамгаалалтын</h1>
            <h1 className="text-[1.5rem]">цахим удирдлага</h1>
          </div>
          <h1 className="text-[#B3B8C0] font-roboto">
            Хилийн цэргийн {value} дугаар салбар
          </h1>
          <div className="flex flex-col w-[85%] gap-2">
            <input
              className={`form-input focus:outline-black`}
              placeholder="Нэвтрэх нэр"
              onChange={(e) => {
                setUser({
                  ...user,
                  username: e.target.value,
                });
              }}
            />
            <input
              className="form-input"
              placeholder="Нууц үг"
              type="password"
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button
            className="bg-[#2075BF] p-2 rounded-md text-white hover:bg-[#17619e]"
            onClick={handleSubmit}
          >
            Нэвтрэх
          </button>
        </div>
        <div className="w-full bg-[#2075bf] flex justify-center items-center rounded-l-[120px]">
          <img className="w-[8rem] h-[9rem]" src="./logo.png" alt="logo" />
        </div>
      </form>
    </div>
  );
}
export default Login;
