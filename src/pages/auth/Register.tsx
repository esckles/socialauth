/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { createUser } from "../../api/userAPI";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const navigate = useNavigate();
  const [loading, setloading] = useState<boolean>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImage = (e: any) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setloading(true);

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", avatar);

    createUser(formData)
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/login");
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
        className="flex flex-col border gap-2 w-[400px]"
      >
        <h1>Register Page</h1>
        <p>Welcome to the registration page.</p>
        <div>
          <label
            htmlFor="avatar"
            className=" h-[100px] items-center bg-black text-white w-[100px] flex justify-center "
          >
            avatar
            <input
              type="file"
              name="username"
              className="hidden"
              id="avatar"
              onChange={handleImage}
            />
          </label>
        </div>
        <div className=" flex flex-col gap-1 p-2">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            className="border px-4 py-3 outline-none rounded-md "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-1 p-2">
          <label>email:</label>{" "}
          <input
            type="text"
            name="username"
            className="border px-4 py-3 outline-none rounded-md "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" flex flex-col gap-1 p-2">
          <label>Password:</label>{" "}
          <input
            type="password"
            name="password"
            className="border px-4 py-3 outline-none rounded-md "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="px-4 py-3 rounded-md bg-green-400 text-center w-full text-white">
          {loading ? (
            <div className="ml-[100px]">
              <FaSpinner />
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <p>
        Already have an account? <a href="/auth/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
