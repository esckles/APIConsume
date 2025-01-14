import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <div className="w-full min-h-[80px] bg-slate-300 items-center justify-center flex ">
          <div className="w-[90%] h-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center justify-between ">
            <p className="text-blue-400 font-semibold text-[30px]">
              e-sam Store
            </p>
            <div className="flex justify-between items-center ">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border w-[400px] h-[40px] rounded-md p-2"
              />
              <button className="w-[100px] h-[50px] rounded-md flex items-center justify-center text-white font-semibold bg-blue-600">
                <Link to="/auth/signup">Signup</Link>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full h-[calc(100vh-80px)]  items-center justify-center text-[70px] font-semibold text-blue-400 grid md:mt-[50px] ">
          Signup up with us and checkout <br /> our latest Top notch products{" "}
          <br /> out for Sales
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
