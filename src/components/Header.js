import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import SearchResult from "./SearchResult";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { products, setFilteredProducts, searchTerm, setSearchTerm } = useContext(ProductContext);

  const searchRef = useRef(null);
  const searchResultRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) &&
          searchResultRef.current && !searchResultRef.current.contains(event.target)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSearchTerm]);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <header
        className={`${
          isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
        } fixed w-full z-10 lg:px-8 transition-all`}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link to={"/"}>
            <div className="w-[40px]">
              <img src={Logo} alt="" />
            </div>
          </Link>

          <div className="flex gap-10">
            <div className="relative max-w-md mx-auto" ref={searchRef}>
              <div className="border-2 border-gray-400 rounded-xl ml-5">
                <div className="relative flex items-center w-full h-7 rounded-lg focus-within:shadow-lg bg-transparent overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-black">
                    <GoSearch />
                  </div>
                  <input
                    className="peer h-full w-full outline-none text-sm text-black pr-2 bg-transparent"
                    type="text"
                    id="search"
                    placeholder="Search.."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className="relative">
                <SearchResult searchResultRef={searchResultRef} />
              </div>
            </div>

            <Link to={"/register"}>
              <MdOutlineAccountCircle className="text-3xl" />
            </Link>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative"
            >
              <BsBag className="text-2xl" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
