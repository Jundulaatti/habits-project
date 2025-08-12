import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex flex-col w-full max-w-md">
        {/* Main login card */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-800">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p>Sign in to your Goal Tracker account</p>
          </div>
          <form className="space-y-4">
            {/* Email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-md  text-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition all duration-200 focus:bg-gray-800"
              />
            </div>
            {/* Password input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-md  text-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition all duration-200 focus:bg-gray-800"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-2">
              <button
                formAction={login}
                className="w-full bg-orange-400 hover:bg-orange-500 text-black font-medium py-3 px-4 rounded-md transition colors duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
              >
                Sign In
              </button>
              <button
                formAction={signup}
                className="w-full bg-orange-400 hover:bg-orange-500 text-black font-medium py-3 px-4 rounded-md transition colors duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
