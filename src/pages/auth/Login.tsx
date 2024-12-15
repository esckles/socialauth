/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { LoginUser } from "../../api/userAPI";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const [loading, setloading] = useState<boolean>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    await LoginUser({ email, password })
      .then((res) => {
        if (res.status === 200) {
          navigate("/dashboard");
        } else {
          alert("error");
        }
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div className="w-full h-[100vh] flex justify-center flex-col items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border gap-4 w-[400px] h-[50vh] "
      >
        <div className=" flex flex-col gap-1 p-2">
          <label>email:</label>{" "}
          <input
            type="text"
            name="username"
            className="border  px-4 py-2 rounded-md outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-1 p-2">
          <label>Password:</label>{" "}
          <input
            type="password"
            name="password"
            className="border  px-4 py-2 rounded-md outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mb-4 px-4 py-4 rounded-md bg-green-400 text-white w-full"
        >
          {loading ? (
            <div className="ml-[100px]">
              <FaSpinner />
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
