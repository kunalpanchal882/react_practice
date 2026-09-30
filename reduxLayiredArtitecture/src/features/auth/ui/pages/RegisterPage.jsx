import { useAuth } from "../../hooks/useAuthHook";

const RegisterPage = () => {

const {Navigate} = useAuth()

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create <span className="text-orange-500">Account</span>
          </h1>

          <p className="text-zinc-400 mt-2 text-sm">
            Register to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3
              text-white placeholder-zinc-600
              outline-none transition
              focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose a username"
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3
              text-white placeholder-zinc-600
              outline-none transition
              focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3
              text-white placeholder-zinc-600
              outline-none transition
              focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600
            text-black font-semibold py-3 rounded-xl
            transition duration-200 mt-2"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-zinc-400">
            Already have an account?{" "}
            <span
               onClick={() => Navigate('/')}
              className="text-orange-500 font-semibold hover:text-orange-400 transition"
            >
              Login
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;

