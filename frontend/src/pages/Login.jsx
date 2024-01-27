import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4 font-family-poppins ">
        <h1 className="text-xl font-extrabold">
          <Link to="/">Blog Market</Link>
        </h1>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold  "> Log in to your account </h1>
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0 rounded-tl-lg rounded-tr-lg"
            type="email"
            placeholder="Enter your e-mail"
          />
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full px-4 py-2.5 text-lg font-thin text-white bg-black rounded-bl-lg rounded-br-lg hover:bg-gray-100 hover:text-black">
            Log in
          </button>
          <div className="flex justify-center items-center space-x-3 ">
            <p> New Here ?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}