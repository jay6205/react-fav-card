import React from "react";
export default function Card({
  index,
  name,
  img,
  artist,
  added_to_favs,
  handle_add_to_favs,
}) {
  return (
    <>
      <div className="w-64 bg-zinc-100 p-4 rounded-md flex gap-4 pb-12 relative mt-10">
        <div className="w-24 h-24 bg-orange-600 rounded-md overflow-hidden">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="">
          <h3 className="text-xl leading-none font-semibold">{name}</h3>
          <h6 className="text-sm ">{artist}</h6>
        </div>
        <button
        onClick={()=>{
          handle_add_to_favs(index)
        }}
          className={`px-4 py-3 mt-1 mb-0.5 left-1/2 -translate-x-[50%] bottom-0.5 cursor-pointer whitespace-nowrap ${
            added_to_favs ? "bg-teal-600" : "bg-orange-600"
          } absolute rounded-full text-white text-xs`}
        >
          {added_to_favs ? "Added" : "Add to Favourites"}
        </button>
      </div>
    </>
  );
}
