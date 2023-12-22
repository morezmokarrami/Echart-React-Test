


function Loading() {

     return (
          <div className="h-screen w-full flex justify-center items-center">
               <div>
                    <svg className="animate-bounce [animation-delay:-0.2s] h-[20px] w-[20px] bg-p-red rounded-full" viewBox="0 0 24 24">
                    </svg>
               </div>
               <div className="mx-2">
                    <svg className="animate-bounce [animation-delay:-0.1s] h-[20px] w-[20px] bg-p-red rounded-full" viewBox="0 0 24 24">
                    </svg>
               </div>
               <div>
                    <svg className="animate-bounce delay-300 h-[20px] w-[20px] bg-p-red rounded-full" viewBox="0 0 24 24">
                    </svg>
               </div>
          </div>
     )
}

export default Loading;