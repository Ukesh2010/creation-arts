import React, {Fragment, useState} from "react";
import Head from "next/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Image from "next/image";
import CounterInput from "../../components/counterInput";
import {getProductDetail} from "../../api";
import {PRODUCT_IMAGE_FILLER} from "../../utils/consts";
import {useCartActions} from "../../contexts/CartContext";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getServerSideCookie} from "../../utils/serverSideStorage";
import {SideBySideMagnifier} from "react-image-magnifiers";

const ProductDetail = ({product}) => {
    const {_id, name, price, category, images = [], description} = product;

    const {findItem, addItem} = useCartActions();

    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const disableButton = Boolean(findItem(_id));

    const onAddToCart = () => {
        addItem({...product, quantity, total_amount: price * quantity});
    };

    return (
        <Fragment>
            <Head>
                <title>Product detail</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Nav/>
            <section className="container">
                <div className="app-page-container">
                    <div className="product-container">
                        <div className="product-images-container">
                            <div className="image-slider">
                                {images.map((item, index) => {
                                    return (
                                        <div
                                            className="product-image"
                                            key={index}
                                            onClick={() => {
                                                setSelectedImageIndex(index);
                                            }}
                                        >
                                            <img src={item?.url || PRODUCT_IMAGE_FILLER} alt={item?.originalFileName || "product image"}/>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="main-image">
                                {images.map((item, index) => {
                                    if (index !== selectedImageIndex) {
                                        return null;
                                    }

                                    return (
                                        <SideBySideMagnifier
                                            key={index}
                                            imageSrc={item?.url || PRODUCT_IMAGE_FILLER}
                                            imageAlt={item?.originalFileName || "product image"}
                                            largeImageSrc={item?.url || PRODUCT_IMAGE_FILLER}
                                            largeImageAlt={item?.originalFileName || "product image"}
                                            fillAvailableSpace={false}
                                            zoomContainerBorder={"1px solid #000000"}
                                            zoomContainerBoxShadow={"0 3px 6px #00000029"}
                                        />
                                    );
                                })}
                            </div>

                        </div>
                        <div className="product-details">
                            <div className="mb-1">
                                <div className="badge">{category?.name}</div>
                            </div>
                            <h4 className="product-title">{name}</h4>
                            <div className="product-price">
                                <span className="label">Price</span>
                                <h3>${price}</h3>
                            </div>
                            <div className="action-container">
                                <CounterInput
                                    value={quantity}
                                    onChange={(value) => setQuantity(value)}
                                />
                                <button
                                    className="btn accent-btn"
                                    disabled={disableButton}
                                    onClick={onAddToCart}
                                >
                                    <FontAwesomeIcon icon={faShoppingBag} size={"2x"}/>
                                    Add to Cart
                                </button>
                            </div>
                            <div className="product-description">
                                <span className="label">Description</span>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>
    );
};

export default ProductDetail;

export const getServerSideProps = async (ctx) => {
    const token = getServerSideCookie(ctx)("token");
    try {
        const product = await getProductDetail(token)(ctx.params.id);

        return {props: {product}};
    } catch (e) {
        ctx.res.writeHead(302, {Location: "/products"});
        ctx.res.end();
    }

    return {props: {}};
};
