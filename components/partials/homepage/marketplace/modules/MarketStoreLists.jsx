import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import ProductSimple from '~/components/elements/products/ProductSimple';
import { carouselSingle } from '~/utilities/carousel-helpers';
import Rating from '../../../../elements/Rating';

const MarketStoreLists = () => {
    return(
        <div className="ps-block--products-of-category">
            <div className="ps-section__header">
                    <div className="ps-block--countdown-deal">
                        <div className="ps-block__left">
                            <h3>Store List</h3>
                        </div>
                    </div>
                    <Link href="/shop">
                        <a>View all</a>
                    </Link>
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
                </div>
        </div>
    );
}
    
        
 


export default MarketStoreLists;
