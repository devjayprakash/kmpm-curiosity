let SignUp = () => {
  return (
    <div className={"w-full h-screen bg-gray-100"}>
      <div className={"h-full w-full flex justify-center items-center"}>
        <div
          className={
            "bg-white w-full md:w-4/6 h-5/6 md:h-auto m-3 shadow-md flex"
          }
        >
          {/* image part */}
          <div className={"w-2/5 hidden md:block"}>
            <img src="/img/banner.jpg" className={"w-full h-full"} alt="" />
          </div>
          <div
            className={
              "w-full md:p-6 md:w-1/2 p-3 flex flex-col justify-center"
            }
          >
            <div className={"text-3xl"}>Sign up for new account</div>
            <div className={"text-purple-600 font-bold"}>
              or log in into your account
            </div>
            <div className={"mt-3"}>
              <input
                type="email"
                placeholder={"Name"}
                className={
                  "w-full border-b-2 border-gray-400 px-x py-2 outline-none focus:border-gray-700 mt-3"
                }
              />
              <input
                type="email"
                placeholder={"Email"}
                className={
                  "w-full border-b-2 border-gray-400 px-x py-2 outline-none focus:border-gray-700 mt-3"
                }
              />
              <input
                type="password"
                placeholder={"Password"}
                className={
                  "w-full border-b-2 border-gray-400 px-x py-2 outline-none focus:border-gray-700 mt-3"
                }
              />
              <button
                className={
                  "mt-6 bg-purple-500 px-3 py-1 w-36 text-white active:bg-purple-700 shadow-md active:sha"
                }
              >
                Login
              </button>

              <div className={"text-sm mt-6"}>
                An initiative by members of <b>Rotaract Club</b> of
                <b>
                  <span className="ml-2">Mrs.</span> K.M.P.M Vocational College.
                </b>{" "}
                <br />
                <br />
                Made/Maintained By
                <div className={"text-purple-600 font-bold"}>
                  Rtr. Jay Prakash Pathak
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
