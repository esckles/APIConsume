import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <div className="w-full h-[80px] bg-slate-300 flex items-center justify-center">
          <div className="w-[90%] h-[100%] flex justify-between items-center ">
            <p className="text-blue-400 font-semibold text-[30px]">
              e-sam Store
            </p>
            <input
              type="text"
              placeholder="Search..."
              className="outline-none border w-[400px] py-2 rounded-md p-2"
            />
            <button className="px-4 py-3 rounded-md flex items-center justify-center text-white font-semibold bg-blue-600">
              <Link to="/auth/signup">Signup</Link>
            </button>
          </div>
        </div>
        <div className=" w-full h-[calc(100vh-80px)] flex items-center justify-center text-[70px] font-semibold text-blue-400 ">
          Signup up with us and checkout <br /> our latest Top notch products{" "}
          <br /> out for Sales
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
