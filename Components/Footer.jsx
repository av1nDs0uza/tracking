import { Fot1, Fot2 } from "../Components/index";

export default () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "javascript:void()",
      name: "",
    },
  ];
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
          <img width="48" height="48" src="https://img.icons8.com/color/48/port.png" alt="port"/>
            
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li className="text-gray-800 hover:text-gray-500 duration-150">
                  <a key={idx} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>© 2024 Avin Dsouza</p>
        </div>
      </div>
    </footer>
  );
};
