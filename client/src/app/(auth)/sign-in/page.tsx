import Link from "next/link";

const signin = () => {
  return (
    <section className="h-screen flex justify-center items-center ">
      <div className="w-1/3 space-y-2 pt-20">
        <h1 className="text-center font-heading font-semibold text-2xl pb-3">
          Sign in to your account
        </h1>
        {/* FORM */}
        <div className="h-auto bg-teal/50 shadow-2xl shadow-black/60 rounded-xl px-8 py-10">
          <form className="space-y-4 md:space-y-4" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-deep-ocean">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-sand/80 text-warm-gray rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-deep-ocean">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-sand/80 text-warm-gray rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-deep-ocean">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-deep-ocean hover:underline ">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-teal py-2 rounded-full text-cloud font-body">
              Sign In to your account
            </button>

            <div className="flex items-center gap-4">
              <hr className="w-full border-sand" />
              <span className="text-warm-gray">OR</span>
              <hr className="w-full border-sand" />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-full bg-teal/20 border border-sand py-2 rounded-full text-deep-ocean font-body text-sm">
                Log in with Google
              </button>{" "}
              <button
                type="submit"
                className="w-full bg-teal/20 border border-sand py-2 rounded-full text-deep-ocean font-body text-sm">
                Log in with Apple
              </button>{" "}
            </div>

            <p className="text-sm font-light text-warm-gray ">
              Don’t have an account yet?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-teal hover:underline ">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default signin;
