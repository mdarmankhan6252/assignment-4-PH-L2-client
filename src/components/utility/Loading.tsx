import { FadeLoader } from "react-spinners";

const Loading = () => {
   return (
      <div
         className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
         aria-busy="true"
         aria-live="polite"
      >
         <FadeLoader color="#0EA5E9" height={25} />
      </div>
   );
};

export default Loading;