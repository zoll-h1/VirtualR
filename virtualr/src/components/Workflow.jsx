import { CheckCircle2 } from "lucide-react";
import codeImg from "..assets/images/code.jpg";
const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Accelerate your 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        {" "}
        coding worklflow 
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
        <img src={codeImg} alt="Code Image" />
        </div>
        <div className="">

        </div>
      </div>
    </div>
  )
}

export default Workflow
