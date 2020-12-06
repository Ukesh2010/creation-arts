import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Product from "../../components/product";
import IconSearch from "../../components/icons/icon-search";
import IconChevronDown from "../../components/icons/icon-chevron-down";
import { getCategories, getProducts } from "../../api";
import cookies from "next-cookies";
import MiniSearch from "minisearch";

const Products = ({ categories, products }) => {
  const [searchText, setSearchText] = useState();
  const [searchProducts, setSearchProducts] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState();

  const searchedProducts = searchProducts || products;

  const filteredProducts =
    selectedCategories.length > 0
      ? searchedProducts.filter((sp) =>
          selectedCategories.find((sc) => sc === sp.category._id)
        )
      : searchedProducts;
  const sortedProducts = sortBy
    ? filteredProducts.sort((a, b) => {
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
    : filteredProducts;

  const onSearch = () => {
    if (!searchText) {
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
  };

  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className="container">
        <div className="app-page-container">
          <div className="product-grid-container">
            <div className="product-filter-container">
              <div className="accordion-block">
                <div className="accordion-heading">
                  <span>Type</span>
                  <IconChevronDown />
                </div>
                <div className="accordion-content">
                  {categories.map((item) => (
                    <div className="list-item" key={item._id}>
                      <label className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          className="form-control"
                          checked={selectedCategories.find(
                            (id) => id === item._id
                          )}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([
                                ...selectedCategories,
                                item._id,
                              ]);
                            } else {
                              setSelectedCategories(
                                selectedCategories.filter(
                                  (id) => id !== item._id
                                )
                              );
                            }
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
                  <IconChevronDown />
                </div>
                <div className="accordion-content">
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $30 and
                      Under
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $31 to
                      $50
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $51 to
                      $75
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> $76 to
                      $100
                    </label>
                  </div>
                  <div className="list-item">
                    <label className="checkbox-wrapper">
                      <input type="checkbox" className="form-control" /> Above
                      $100
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list-container">
              <div className="product-list-heading">
                <div className="search-container">
                  <IconSearch />
                  <input
                    type="search"
                    className={"form-control"}
                    placeholder={"Search"}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onSearch();
                      }
                    }}
                  />
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
                  <Product key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Products;

export const getStaticProps = async (context) => {
  const token = cookies(context).token;

  try {
    const products = await getProducts(token)();
    const categories = await getCategories(token)();
    return { props: { categories, products } };
  } catch (e) {
    console.log("error", e.message);
  }
  return { props: { categories: [], products: [] } };
};
