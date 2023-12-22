import { useNavigate } from "react-router-dom";




const NotFound = () => {

     const navigate = useNavigate()


     return (
          <div className="w-screen h-screen flex flex-col justify-center items-center"> 
               <div className="text-p-red text-6xl">
               404!
               </div>
               <div onClick={() => navigate('/')} className="px-5 py-2 rounded-xl bg-s-red mt-3 cursor-pointer">
                    بازگشت به خانه
               </div>
          </div>
     )
}

export default NotFound;