import React, { useEffect } from 'react';
import Logo from '~/components/elements/common/Logo';
import Menu from '~/components/elements/menu/Menu';
import Link from 'next/link';
import menuData from '~/public/static/data/menu';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import { stickyHeader } from '~/utilities/common-helpers';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';

const HeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--standard header--market-place-1"
            //data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        {/*<Logo />*/}
                        <Link href="/home/market-place">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/shopIndiaMain/Logo.png"
                                    alt="shopindia"
                                />
                            </a>
                        </Link>
                        <MenuCategoriesDropdown />
                    </div>
                    <div className="header__center">
                        <SearchHeader />
                    </div>
                    <div className="header__right">
                        <HeaderActions />
                    </div>
                </div>
            </div>
            
                {/*<NavigationDefault />*/}
                <nav className="navigation">
                <div className="container">
                    {/*<div className="navigation__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Shop by Department</span>
                            </div>
                            <div className="menu__content">
                                <Menu
                                    source={menuData.product_categories}
                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                        </div>*/}
                    <div className="navigation__right">
                        <Menu
                            source={menuData.menuPrimary.menu_1}
                            className="menu"
                        />
                        <div className="ps-block--header-hotline inline">
                            <p>
                                <i className="icon-telephone"></i>Hotline:
                                <strong> 1-800-234-5678</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
            
        </header>
    );
};

export default HeaderDefault;
