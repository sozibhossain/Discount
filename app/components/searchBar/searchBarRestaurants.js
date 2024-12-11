import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function searchBarRestaurants() {
  return (
    <div className="mt-10">
        <div className="w-12/12 py-2 pl-1 h-auto bg-white border-2 border-slate-300 rounded-full">
            <section className="w-full h-5 flex items-center">
                <button className=" flex items-center bg-amber-500 text-white px-3 py-1 rounded-l-full"> <CiLocationOn className="mr-3"/>Location</button>
                
                <input type="text" className="w-full border-white" />
            
                <div className="bg-amber-500 rounded-full mr-1">
                    <CiSearch className="text-2xl p-1 text-white"/>
                </div>
            </section>
        </div>
    </div>
  )
}
