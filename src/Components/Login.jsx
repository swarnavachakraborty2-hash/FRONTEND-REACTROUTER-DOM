import { useContext, useEffect, useState } from "react";
import Newcontext from "../ContextStore/Newcontext";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user, setUser } = useContext(Newcontext);

  // Restore user from localStorage on page reload
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));

    setName("");
    setEmail("");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md p-6 border rounded-lg">

        {user ? (
          <>
            <h1 className="text-2xl font-bold mb-4">
              Hello {user.name} 👋
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">
              Please Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full border p-2 rounded"
                required
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border p-2 rounded"
                required
              />

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded"
              >
                Login
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}

export default Login;
