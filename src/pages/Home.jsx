import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import {useLocation, useNavigate} from "react-router-dom";

import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
        catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
    navigate(`${pathname}${search ? '&' : '?'}search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories);
      if (search && search.includes("=")) {
        const searchStr = search.split("=")[1];
        setFilteredCatalog( search ?
            data.categories.filter(item =>
            item.strCategory.toLowerCase().includes(searchStr.toLowerCase())
        ) : data.categories);
      } else {
        setFilteredCatalog(data.categories);
      }
    });
  }, [search]);

  return (
      <>
        <Search cb={handleSearch} />
        {!catalog.length ? <Preloader/> : (
            <CategoryList catalog={filteredCatalog}/>
        )}
      </>
  )
}

export default Home;