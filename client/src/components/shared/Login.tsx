import { FormEvent, useState } from "react";

const Login: React.FC = () => {
  const [userCred, setUserCred] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    const respData = await authUser();
    console.log(JSON.stringify(userCred));
    console.log(respData);
  };

  const authUser = async () => {
    const resp = await fetch("http://localhost:3011/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
      body: JSON.stringify(userCred),
    });
    const respData = await resp.json();
    return respData;
    // console.log(respData)
  };

  return (
    <div className="">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-3xl font-medium leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            <div>
              <label className="block text-sm font-light leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-2 text-black shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none px-3"
                  onChange={(e) =>
                    setUserCred({ ...userCred, username: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-light leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a className="font-semibold text-indigo-400 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-2 text-black shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none px-3"
                  onChange={(e) =>
                    setUserCred({ ...userCred, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <button 
                type="submit"
                className="w-full bg-indigo-500 p-3 rounded-md text-white font-light"
            >Sign In</button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500 mx-2">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
