interface ListItems {
  name: string;
  link: string;
  active?: boolean;
}

const navbar = () => {
  const listItems: ListItems[] = [
    { name: "Home", link: "/", active: true },
    { name: "About", link: "/about" },
    { name: "Project", link: "/about" },
    { name: "Contact", link: "/contact" },
  ] as const;

  return (
    <div className="w-full fixed bottom-3 left-0 h-16 flex justify-center items-center z-50">
      <ul className="shadow-md flex gap-5 text-black bg-[#e6e6e6] px-4 py-2 rounded-lg">
        {listItems.map((item, index) => {
          return <li key={index} className="inline-block mx-4">
            <a href={`${item.link}`} className={item.active ? 'border-b-3 text-blue-500 border-blue-500' : 'text-black'}> {item.name}</a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default navbar;

