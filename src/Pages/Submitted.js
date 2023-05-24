import React from "react";
import Button from "../Components/Button";
import { GiCheckMark } from "react-icons/gi";

const Submitted = () => {
  return (
    <main className="">
      <div className=" max-w-7xl mx-auto bg-slate-200 py-24 px-2 my-4 ">
        <div className=" text-center ">
          <div className=" w-40 h-40 text-8xl text-addispink mx-auto rounded-full border-2 flex items-center justify-center border-addispink">
            <div className="animate-pulse">
              <GiCheckMark />
            </div>
          </div>
          <h1 className=" text-3xl text-addispink font-semibold mt-8">
            Thank You!
          </h1>
          <p className="text-lg">You have successfully submitted.</p>
        </div>
        <div className="max-w-[500px] mx-auto">
          <h1 className=" text-center text-2xl font-medium mt-16 ">
            Survery Form
          </h1>
          <p className="text-center">
            Please help us by filling this survery form
          </p>
          <form className=" flex flex-col ">
            <select
              className="my-3 py-3 rounded indent-2 outline-addisblue"
              name="info-place"
            >
              <option value={""}>where did you hear about us?</option>
              <option value={"social-media"}>Social Media</option>
              <option value={"mouth"}>Word of mouth</option>
              <option value={"recommendatin"}>By Recommendation</option>
              <option value={"friends"}>Friends</option>
            </select>
            <h4>Have you found what you were looking?</h4>
            <div className=" flex flex-col ml-2">
              <label htmlFor="helpful">
                <input
                  className="mr-2 w-3 h-3"
                  type="radio"
                  id="helpful"
                  name="isHelpful"
                />
                Yes, I found it helpful
              </label>
              <label htmlFor="notMuch">
                <input
                  className="mr-2 w-3 h-3"
                  type="radio"
                  id="notMuch"
                  name="isHelpful"
                />
                Not that much
              </label>
              <label htmlFor="notHelpful">
                <input
                  className="mr-2 w-3 h-3"
                  type="radio"
                  id="notHelpful"
                  name="isHelpful"
                />
                No, I didn't found
              </label>
            </div>
            <label className="mt-3" htmlFor="comment">
              Any Comment/suggestion
              <textarea
                className="w-full max-w-[500px] mt-1 rounded indent-2 py-2 max-h-60 outline-addisblue"
                placeholder="leave us comment"
                rows={3}
              />
            </label>
            <div className=" flex justify-between mt-12">
              <div className=" ">
                <Button
                  text="Skip"
                  width={70}
                  bg={"bg-slate-300"}
                  bgHover={"hover:bg-slate-400"}
                />
              </div>
              <div className=" shadow-md hover:shadow-lg">
                <Button
                  text="Submit"
                  width={100}
                  bgHover={"hover:bg-addisblue"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Submitted;
