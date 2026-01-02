import "../index.css";

function Login() {
  return (
    <div>
      <h1 className=" text-4xl font-bold mt-10">Login to WriteHub!</h1>
      <p className="text-[14px] m-2 text-gray-600">
        Access your account and start writing.
      </p>

      <div>
        <form className="flex flex-col gap-4 mt-6 w-80 mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="border-2 p-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 p-2 rounded-lg"
          />
          <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 duration-200">
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
