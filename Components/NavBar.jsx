import { useEffect, useState, useContext } from "react";

import { TrackingContext } from "../Conetxt/TrackingContext";
import { Nav1, Nav2, Nav3 } from "../Components/index";
export default () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);

  const navigation = [
    { title: " ", path: "#" },
    { title: "", path: "#" },
    { title: "", path: "#" },
    { title: "", path: "#" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a href="javascript:void(0)">
          <img width="48" height="48" src="https://img.icons8.com/color/48/port.png" alt="port"/>
          </a>
          <div className="md:hidden">
            <button
              className="menu-btn text-blue-500 hover:text-blue-800"
              onClick={() => setState(!state)}
            >
              {state ? <Nav1 /> : <Nav2 />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-blue-700 hover:text-blue-900">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {currentUser ? (
              <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-800 hover:bg-blue-700 active:bg-blue-900 rounded-full md:inline-flex">
                {currentUser.slice(0, 25)}..
              </p>
            ) : (
              <button
                onClick={() => connectWallet()}
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-800 hover:bg-blue-700 active:bg-blue-900 rounded-full md:inline-flex"
              >
                Connect Wallet
                <Nav3 />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
