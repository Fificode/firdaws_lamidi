import React from 'react'


const ArticleTwo = ({header, articleimage, explanation, stackone}) => {
  return (
    <div>
         <div className="flex flex-col-reverse xl:flex-row-reverse items-center justify-center my-[40px]">
      <div className="flex flex-col items-center m-[10px] flex-[100%] max-w-full" >
        <h1 className="mt-[20px] md:text-[30px] text-[25px] text-light-black text-center font-[500]">{header}</h1>
       <div className="flex my-[5px]">
          <img src={stackone} alt="HTML logo" className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] mx-1" />
         </div>
        <div className="">
          <p className="text-[20px] text-light-black font-[400] text-center">
          {explanation}
          </p>
        </div>
         <div className="flex flex-row justify-center my-[15px] ">

  <div className="border-[1px] px-[20px] py-[5px] md:py-[10px] rounded-[5px] border-light-black flex justify-between items-center">
    <a href="https://medium.com/@lamidifirdaws/how-to-build-a-weight-tracker-app-with-vue-js-and-chart-js-64836d20f87c" target='_blank' rel="noreferrer" className="text-center text-[14px] md:text-[17px]">View article</a>
     <div className="mx-[3px]"> <svg className="w-[20px] h-[15px] md:w-[25px] md:h-[25px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</div>
     
  </div>
 

        </div>
    
      </div>
      <div className="m-[10px] flex justify-center flex-[100%] max-w-full" >
        <img src={articleimage} alt="The sky" className="w-[300px] md:w-[500px] h-[100%] rounded-[5px]" />
      </div>
    </div>
    </div>
  )
}

export default ArticleTwo