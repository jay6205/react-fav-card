import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1747021627291-d81636d6f6ce?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ice",
      artist: "Jay",
      added_to_favs: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1750688650017-c3090567942f?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sand",
      artist: "Jayyyyy",
      added_to_favs: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1751575004372-2eeba67e52e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sunlight",
      artist: "Cyclist",
      added_to_favs: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1749738137089-b3158bc72a81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Upi",
      artist: "Modiji",
      added_to_favs: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1751768853626-3737132f25f7?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Citylights",
      artist: "Hikaru",
      added_to_favs: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1752035680950-79d735be5499?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Serenity",
      artist: "Idk",
      added_to_favs: false,
    },
  ];
  const [val, setVal] = useState(data);
  const handle_add_to_favs = (CardIndex) => {
    setVal((prev) => {
      return prev.map((item, index) => {
        if (index === CardIndex) {
          return { ...item, added_to_favs: !item.added_to_favs };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <NavBar data={val}/>
        <div className="px-20 flex gap-10 mt-15 flex-wrap">
          {val.map((item, index) => {
            return (
              <Card
                key={index}
                index={index}
                name={item.name}
                img={item.image}
                artist={item.artist}
                added_to_favs={item.added_to_favs}
                handle_add_to_favs={handle_add_to_favs}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
