import { useAuth } from "../../hooks/useAuthHook";
import Loader from "../../../../shared/ui/components/Loader ";
import { useSelector } from "react-redux";

const LoginPage = () => {

const {Navigate,register,handleSubmit,errors,loginForm} = useAuth()
const {loading} = useSelector(state => state.auth)

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome <span className="text-orange-500">Back</span>
          </h1>

          <p className="text-zinc-400 mt-2 text-sm">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form
        onSubmit={handleSubmit(loginForm)}
         className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Username
            </label>

            <input
            {
              ...register('username',{
                required:'username is required'
              })
            }
              type="text"
              placeholder="Enter your username"
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3
              text-white placeholder-zinc-600
              outline-none transition
              focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
            {errors.username && <p className="text-red-600">{errors.username.message}</p>}

          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>

            <input
             {
              ...register('password',{
                required:"passsword is required"
                ,
                minLength:{
                  value:8,
                  message:'password must be 8 charector long'
                }
              })
            }
              type="password"
              placeholder="Enter your password"
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3
              text-white placeholder-zinc-600
              outline-none transition
              focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600
            text-black font-semibold py-3 rounded-xl
            transition duration-200 mt-2"
          >
{loading ? <Loader/> : "Login"}
           
          </button>

        </form>

        {/* Register Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-zinc-400">
            Don't have an account?{" "}
            <span
            onClick={() => Navigate('/register')}
              className="text-orange-500 cursor-pointer font-semibold hover:text-orange-400 transition"
            >
              Register
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

