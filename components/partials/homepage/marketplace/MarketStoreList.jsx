import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import { carouselStandard } from '~/utilities/carousel-helpers';
import CountDownSimple from '~/components/elements/CountDownSimple';
import Rating from '../../../elements/Rating';
const MarketStoreList = () => {

    return (
        <div className="ps-deal-of-day">
            <div className="ps-container">
                <div className="ps-section__header">
                    <div className="ps-block--countdown-deal">
                        <div className="ps-block__left">
                            <h3>Store List</h3>
                        </div>
                    </div>
                    <Link href="/stores">
                        <a>View all</a>
                    </Link>
                </div>
                <div className="ps-section__content">
                
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Global Office</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Young Shop</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Robert’s Store</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Go Pro</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Zudio</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
                        <article className="ps-block--store-2">
                            <div
                                className="ps-block__content bg--cover"
                                style={{
                                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                                }}>
                                <figure>
                                    <h4>Jack n Joe</h4>
                                    <div className="ps-block__rating">
                                        <Rating/>
                                    </div>
                                    <p>
                                        325 Orchard Str, <br /> New York, United States (US)
                                    </p>
                                    <p>
                                        <i className="icon-telephone"></i> (+053) 77-637-3300
                                    </p>
                                </figure>
                            </div>
                            <div className="ps-block__author">
                                <a className="ps-block__user" href="#">
                                    <img src="/static/img/vendor/store/vendor-150x150.jpg" alt="martfury" />
                                </a>
                                <a className="ps-btn" href="store-detail.html">
                                    Visit Store
                                </a>
                            </div>
                        </article>
                    </div>
                    
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default MarketStoreList;
