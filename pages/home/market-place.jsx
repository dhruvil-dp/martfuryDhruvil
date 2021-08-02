import React, { useState, useEffect } from 'react';
import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
import ContainerMarketPlace from '~/components/layouts/ContainerMarketPlace';
import MarketPlaceHomeBanner from '~/components/partials/homepage/marketplace/MartketPlaceHomeBanner';
import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlacePromotion from '~/components/partials/homepage/marketplace/MarketPlacePromotions';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketClothingsAndApparel from '~/components/partials/homepage/marketplace/modules/MarketClothingsAndApparel';
import MarketStoreList from '~/components/partials/homepage/marketplace/MarketStoreList';
import MarketConsumerElectronics from '~/components/partials/homepage/marketplace/modules/MarketConsumerElectronics';
import MarketComputerAndTechnology from '~/components/partials/homepage/marketplace/modules/MarketComputerAndTechnology';
import MarketGardenAndKitchen from '~/components/partials/homepage/marketplace/modules/MarketGardenAndKitchen';
import MarketHeathyAndBeauty from '~/components/partials/homepage/marketplace/modules/MarketHeathyAndBeauty';


const HomeMarketPlacePage = () => {
    const [cAproductItems, setcAProductItems] = useState(null);
    const [cEproductItems, setcEProductItems] = useState(null);
    const [cTproductItems, setcTProductItems] = useState(null);
    const [gKproductItems, setgKProductItems] = useState(null);
    const [hBproductItems, sethBProductItems] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getcAProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            "clothings"
        );
        if (responseData) {
            setcAProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    async function getcEProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            "consumer-electronics"
        );
        if (responseData) {
            setcEProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    async function getcTProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            "customer-bought-products"
        );
        if (responseData) {
            setcTProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    async function getgKProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            "garden-and-kitchen"
        );
        if (responseData) {
            setgKProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }
    async function gethBProducts() {
        setLoading(true);
        const responseData = await getProductsByCollectionHelper(
            "health-and-beauty"
        );
        if (responseData) {
            sethBProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        getcAProducts();
        getcEProducts();
        getcTProducts();
        getgKProducts();
        gethBProducts();
    }, []);
    // Views
    let cAproductItemsView;
    let cEproductItemsView;
    let cTproductItemsView;
    let gKproductItemsView;
    let hBproductItemsView;
    if (!loading) {
        
        if (cAproductItems && cAproductItems.length > 0) {
            cAproductItemsView = <MarketClothingsAndApparel collectionSlug="clothings" />;
        }
        
        if (cEproductItems && cEproductItems.length > 0) {
            cEproductItemsView = <MarketConsumerElectronics collectionSlug="consumer-electronics" />;
        }
        
        if (cTproductItems && cTproductItems.length > 0) {
            cTproductItemsView = <MarketComputerAndTechnology collectionSlug="customer-bought-products" />;
        }
        
        if (gKproductItems && gKproductItems.length > 0) {
            gKproductItemsView = <MarketGardenAndKitchen collectionSlug="garden-and-kitchen" />;
        }
        
        if (hBproductItems && hBproductItems.length > 0) {
            hBproductItemsView = <MarketHeathyAndBeauty collectionSlug="health-and-beauty" />;
        }
        
    }
    return (
        <ContainerMarketPlace title="Home Market Place">
            <MarketPlaceHomeBanner />
            <MarketPlaceSiteFeatures />
            <MarketPlacePromotion />
            <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />
            <MarketStoreList/>
            <div className="ps-section--gray">
                <div className="container">
                    
                    {cAproductItemsView}
                    {cEproductItemsView}
                    {cTproductItemsView}
                    {gKproductItemsView}
                    {hBproductItemsView}
                </div>
            </div>
            {/*  <MarketPlaceProductBox />*/}
        </ContainerMarketPlace>
    );
};
export default HomeMarketPlacePage;
