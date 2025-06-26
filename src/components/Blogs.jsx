import { News } from "./News"
export default function Blogs(){
     console.log("Render: blogs");
    return(
        <div className="bg-blue-200 pl-20 h-screen pt-5">
            <div className="h-16  flex justify-between">           
                <i className="fas fa-book fa-3x"></i>
                <input type="text" placeholder="Search.." className="pl-4 ring w-2/5 ring-gray-600 ml-20 border-gray-700 h-8 rounded-xl"/>
            <div className="">
                <button className="btn h-10">LOG IN</button>
                <button className="btn h-10">SIGN UP</button>
            </div>
        </div>
        <div className="flex gap-5 h-full">
         <div className=" w-2/3 bg-white h-full">
            {News.map((news)=>{
                return(
                    <div className="border m-2 border-black rounded-lg bg-gray-300">
                        <p className="font-serif">{news.poster} @ {news.date}</p>
                        <h3>{news.Headline}</h3>
                        <p>{news.post}</p>

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