"use client";
import { useState } from "react";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  const isLoginButtonDisabled = username === "" || password === "";

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              data-testid="username"
              value={username}
              className="mt-1 p-2 w-full border rounded-md text-black"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              data-testid="password"
              name="password"
              value={password}
              className="mt-1 p-2 w-full border rounded-md text-black"
              onChange={handlePasswordChange}
            />
          </div>
          <button
            data-testid="login-button"
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded-md ${
              isLoginButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            disabled={isLoginButtonDisabled}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
