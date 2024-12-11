import { CiSearch } from "react-icons/ci";

export default function searchBarHeader() {
  return (
    <div className="flex items-center justify-center">
        <div className="w-11/12 py-1 pl-3 h-auto bg-white border-2 border-slate-300 rounded-full">
            <section className="w-full h-5 flex items-center">
            <CiSearch className="text-2xl mr-4"/>
            <input type="text" className="w-full border-white" placeholder="Search" />
            <button className="bg-amber-500 text-white p-1 ml-3 rounded-r-full">Search</button>
            </section>
        </div>
    </div>
  )
}
