import { News } from "./News"
import { useState } from "react"
export default function Blogs(){
    const [likes,setLikes]=useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,liked:true})
    return(
        <div className="bg-blue-200 pl-20 min-h-screen pt-5">
            <div className="h-16  flex justify-between">           
                <i className="fas fa-book fa-3x"></i>
                <input type="text" placeholder="Search.." className="pl-4 ring w-2/5 ring-gray-600 ml-20 border-gray-700 h-8 rounded-xl"/>
            <div className="">
                <button className="btn h-10">LOG IN</button>
                <button className="btn h-10">SIGN UP</button>
            </div>
        </div>
        <div className="flex gap-5 h-full">
         <div className=" w-2/3 border border-black rounded-lg h-full">
            {News.map((news)=>{
                const ind=News.indexOf(news)
                function handleClick(ind) {
                setLikes(prevLikes => ({
                    ...prevLikes,
                    [ind]: prevLikes[ind] + 1
                }));
                }

                return(
                    <div key={ind} className="border pl-2 m-2 border-black rounded-lg bg-gray-300">
                        <p className="font-serif">{news.poster} @ {news.date}</p>
                        <h3>{news.Headline}</h3>
                        <p>{news.post}</p>
                        <button className="btn mb-4">{news.category}</button>
                        <button onClick={()=>handleClick(ind)} className="btn mb-4">♥{likes[News.indexOf(news)]}</button>
                        

                    </div>
                )
            })}
        </div>
                <div className=" w-1/3 bg-white h-full">
            <h1>body</h1>
        </div>
        </div>

        </div>

    )
}