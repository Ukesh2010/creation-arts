import React, {Fragment, useEffect, useState} from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Product from "../../components/product";
import IconSearch from "../../components/icons/icon-search";
import IconChevronDown from "../../components/icons/icon-chevron-down";
import {getCategories, getProducts} from "../../api";
import MiniSearch from "minisearch";
import {PRICE_FILTER_RANGES} from "../../utils/consts";
import {getServerSideCookie} from "../../utils/serverSideStorage";

const Products = ({categories, products}) => {
  const [searchText, setSearchText] = useState("");
  const [searchProducts, setSearchProducts] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState();

  const searchedProducts = searchProducts || products;

  const categoryFilteredProducts =
    selectedCategories.length > 0
      ? searchedProducts.filter((item) =>
        selectedCategories.find(
          (categoryId) => categoryId === item?.category?._id
        )
      )
      : searchedProducts;

  const priceRangeFilteredProducts =
    priceRanges.length > 0
      ? categoryFilteredProducts.filter(
      (item) =>
        priceRanges.filter(
          (index) =>
            PRICE_FILTER_RANGES[index].min <= item.price &&
            PRICE_FILTER_RANGES[index].max >= item.price
        ).length > 0
      )
      : categoryFilteredProducts;

  const sortedProducts = sortBy
    ? priceRangeFilteredProducts.sort((a, b) => {
      if (sortBy === "top-rated") {
        return true;
      }
      if (sortBy === "high-low") {
        return b.price - a.price;
      }
      if (sortBy === "low-high") {
        return a.price - b.price;
      }

      return true;
    })
    : priceRangeFilteredProducts;

  const onCategoryChange = (checked, id) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, id]);
    } else {
      setSelectedCategories(selectedCategories.filter((item) => item !== id));
    }
  };

  const onPriceRangeChange = (checked, index) => {
    if (checked) {
      setPriceRanges((prev) => [...prev, index]);
    } else {
      setPriceRanges(priceRanges.filter((item) => item !== index));
    }
  };

  useEffect(() => {
    if (searchText === "") {
      setSearchProducts(null);
      return;
    }
    const miniSearch = new MiniSearch({
      fields: ["name", "price"],
      idField: "_id",
    });
    miniSearch.addAll(products);
    const searchResults = miniSearch.search(searchText, {
      fuzzy: 0.2,
      prefix: true,
    });
    setSearchProducts(
      products.filter((product) =>
        searchResults.find((searchItem) => product._id === searchItem.id)
      )
    );
  }, [searchText]);

  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Nav/>
      <section className="container">
        <div className="app-page-container">
          <div className="product-grid-container">
            <div className="product-filter-container">
              <h3 className="filter-title">Filters</h3>
              <div className="filter-block-list">
                <div className="accordion-block">
                  <div className="accordion-heading">
                    <span>Type</span>
                    <IconChevronDown/>
                  </div>
                  <div className="accordion-content">
                    {categories.map((item) => (
                      <div className="list-item" key={item._id}>
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            className="form-control"
                            checked={selectedCategories.includes(item._id)}
                            onChange={(e) => {
                              onCategoryChange(e.target.checked, item._id);
                            }}
                          />
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="accordion-block">
                  <div className="accordion-heading">
                    <span>Price Range</span>
                    <IconChevronDown/>
                  </div>
                  <div className="accordion-content">
                    {PRICE_FILTER_RANGES.map((item, index) => (
                      <div className="list-item" key={index}>
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            className="form-control"
                            checked={priceRanges.includes(index)}
                            onChange={(e) => {
                              onPriceRangeChange(e.target.checked, index);
                            }}
                          />
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="filter-actions">
                <button className="btn primary-outline-btn">Reset</button>
                <button className="btn primary-btn">Apply</button>
              </div>
            </div>
            <div className="product-list-container">
              <div className="product-list-heading">
                <div className="search-container">
                  <IconSearch/>
                  <input
                    type="search"
                    className={"form-control"}
                    placeholder={"Search"}
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                </div>
                <div className="filter-toggle">
                  <button className="btn primary-outline-btn">Filter</button>
                </div>
                <div className="select-container">
                  <select
                    className="form-control"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option>Sort By</option>
                    <option value={"top-rated"}>Top Rated</option>
                    <option value={"high-low"}>Price: High to Low</option>
                    <option value={"low-high"}>Price: Low to High</option>
                  </select>
                </div>
              </div>
              <div className="product-block">
                {sortedProducts.map((item, index) => (
                  <Product key={index} data={item}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
};

export default Products;

export const getServerSideProps = async (context) => {
  const token = getServerSideCookie(context).token;

  try {
    const products = await getProducts(token)();
    const categories = await getCategories(token)();
    return {props: {categories, products}};
  } catch (e) {
    console.log("error", e.message);
  }
  return {props: {categories: [], products: []}};
};
