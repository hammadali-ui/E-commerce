export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
