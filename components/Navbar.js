import NavbarItem from "./NavbarItem";
const Navbar = () => {
  return (
    <div className="bg-amber-100 lg:text-lg dark:bg-[#4C5466] py-4 space-x-10 flex items-center justify-center">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
