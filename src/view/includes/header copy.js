import React, { useState, useEffect } from 'react';
const mockConfig = {
    phoenixNavbarTopShape: 'slim',
    phoenixNavbarPosition: 'horizontal',
    phoenixNavbarTopStyle: 'lighter',
    phoenixNavbarVerticalStyle: 'darker'
};

function Header() {

    const [config, setConfig] = useState(mockConfig);

    useEffect(() => {
        const {
            phoenixNavbarTopShape,
            phoenixNavbarPosition,
            phoenixNavbarTopStyle,
            phoenixNavbarVerticalStyle
        } = config;

        const body = document.querySelector('body');
        const navbarDefault = document.querySelector('#navbarDefault');
        const navbarTop = document.querySelector('#navbarTop');
        const topNavSlim = document.querySelector('#topNavSlim');
        const navbarTopSlim = document.querySelector('#navbarTopSlim');
        const navbarCombo = document.querySelector('#navbarCombo');
        const navbarComboSlim = document.querySelector('#navbarComboSlim');
        const dualNav = document.querySelector('#dualNav');
        const navbarVertical = document.querySelector('.navbar-vertical');

        // Clear all styles and remove elements based on config
        const clearStyles = () => {
            [topNavSlim, navbarTop, navbarTopSlim, navbarCombo, navbarComboSlim, navbarDefault, navbarVertical, dualNav]
                .forEach(element => element?.removeAttribute('style'));
        };

        if (phoenixNavbarPosition === 'dual-nav') {
            clearStyles();
            dualNav?.removeAttribute('style');
            document.documentElement.setAttribute('data-navigation-type', 'dual');
        } else if (phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'vertical') {
            clearStyles();
            topNavSlim.style.display = 'block';
            navbarVertical.style.display = 'inline-block';
            document.documentElement.setAttribute('data-navbar-horizontal-shape', 'slim');
        } else if (phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'horizontal') {
            clearStyles();
            navbarTopSlim?.removeAttribute('style');
            document.documentElement.setAttribute('data-navbar-horizontal-shape', 'slim');
        } else if (phoenixNavbarTopShape === 'slim' && phoenixNavbarPosition === 'combo') {
            clearStyles();
            navbarComboSlim?.removeAttribute('style');
            navbarVertical?.removeAttribute('style');
            document.documentElement.setAttribute('data-navbar-horizontal-shape', 'slim');
        } else if (phoenixNavbarTopShape === 'default' && phoenixNavbarPosition === 'horizontal') {
            clearStyles();
            navbarTop?.removeAttribute('style');
            document.documentElement.setAttribute('data-navigation-type', 'horizontal');
        } else if (phoenixNavbarTopShape === 'default' && phoenixNavbarPosition === 'combo') {
            clearStyles();
            navbarCombo?.removeAttribute('style');
            navbarVertical?.removeAttribute('style');
            document.documentElement.setAttribute('data-navigation-type', 'combo');
        } else {
            clearStyles();
            navbarDefault?.removeAttribute('style');
        }

        if (phoenixNavbarTopStyle === 'darker') {
            navbarTop?.setAttribute('data-navbar-appearance', 'darker');
        }

        if (phoenixNavbarVerticalStyle === 'darker') {
            navbarVertical?.setAttribute('data-navbar-appearance', 'darker');
        }
    }, [config]); // Dependency array: run effect when `config` changes


    return (
        <>
            {/* <nav className="navbar navbar-vertical navbar-expand-lg" style={{ display: 'none' }}>

                <div className="collapse navbar-collapse" id="navbarVerticalCollapse">

                    <div className="navbar-vertical-content">
                        <ul className="navbar-nav flex-column" id="navbarVerticalNav">
                            <li className="nav-item">
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-home" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-home">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="pie-chart"></span></span><span className="nav-link-text">Home</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="nv-home">
                                            <li className="collapsed-nav-item-title d-none">Home</li>
                                            <li className="nav-item"><a className="nav-link active" href="index.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">E commerce</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="dashboard/project-management.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Project management</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="dashboard/crm.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">CRM</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="dashboard/travel-agency.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Travel agency</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/social/feed.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Social feed</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">

                                <p className="navbar-vertical-label">Apps</p>
                                <hr className="navbar-vertical-line" />
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-e-commerce" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-e-commerce">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="shopping-cart"></span></span><span className="nav-link-text">E commerce</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-e-commerce">
                                            <li className="collapsed-nav-item-title d-none">E commerce</li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-admin" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-admin">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Admin</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-admin">
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/admin/add-product.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Add product</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/admin/products.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Products</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/admin/customers.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Customers</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/admin/customer-details.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Customer details</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/admin/orders.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Orders</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/admin/order-details.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Order details</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/admin/refund.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Refund</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-customer" data-bs-toggle="collapse" aria-expanded="true" aria-controls="nv-customer">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Customer</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent show" data-bs-parent="#e-commerce" id="nv-customer">
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/homepage.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Homepage</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/product-details.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Product details</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/products-filter.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Products filter</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/cart.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Cart</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/checkout.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Checkout</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/shipping-info.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Shipping info</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/profile.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Profile</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/favourite-stores.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Favourite stores</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/wishlist.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Wishlist</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/order-tracking.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Order tracking</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="apps/e-commerce/landing/invoice.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Invoice</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-CRM" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-CRM">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="phone"></span></span><span className="nav-link-text">CRM</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-CRM">
                                            <li className="collapsed-nav-item-title d-none">CRM</li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/analytics.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Analytics</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/deals.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Deals</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/deal-details.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Deal details</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/leads.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Leads</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/lead-details.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Lead details</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/reports.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Reports</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/reports-details.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Reports details</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/crm/add-contact.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Add contact</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-project-management" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-project-management">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="clipboard"></span></span><span className="nav-link-text">Project management</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-project-management">
                                            <li className="collapsed-nav-item-title d-none">Project management</li>
                                            <li className="nav-item"><a className="nav-link" href="apps/project-management/create-new.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Create new</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/project-management/project-list-view.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Project list view</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/project-management/project-card-view.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Project card view</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/project-management/project-board-view.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Project board view</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/project-management/todo-list.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Todo list</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/project-management/project-details.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Project details</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-travel-agency" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-travel-agency">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="briefcase"></span></span><span className="nav-link-text">Travel agency</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning nav-link-badge">New</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-travel-agency">
                                            <li className="collapsed-nav-item-title d-none">Travel agency</li>
                                            <li className="nav-item"><a className="nav-link" href="apps/travel-agency/landing.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Landing</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-hotel" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-hotel">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Hotel</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#travel-agency" id="nv-hotel">
                                                        <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-hotel-admin" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-hotel-admin">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Admin</span>
                                                            </div>
                                                        </a>
                                                            <div className="parent-wrapper">
                                                                <ul className="nav collapse parent" data-bs-parent="#hotel" id="nv-hotel-admin">
                                                                    <li className="nav-item"><a className="nav-link" href="apps/travel-agency/hotel/admin/add-property.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Add property</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link nav-link-disable" href="coming-soon.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Add room</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-primary ">Next</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link" href="apps/travel-agency/hotel/admin/room-listing.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Room listing</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link nav-link-disable" href="coming-soon.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Search room</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-primary ">Next</span></div>
                                                                    </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-hotel-customer" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-hotel-customer">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Customer</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-primary ">Next</span>
                                                            </div>
                                                        </a>
                                                            <div className="parent-wrapper">
                                                                <ul className="nav collapse parent" data-bs-parent="#hotel" id="nv-hotel-customer">
                                                                    <li className="nav-item"><a className="nav-link nav-link-disable" href="coming-soon.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Homepage</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link nav-link-disable" href="coming-soon.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Hotel details</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link nav-link-disable" href="coming-soon.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Hotel compare</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link nav-link-disable" href="coming-soon.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Check out</span></div>
                                                                    </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link nav-link-disable" href="upcoming.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Flight</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">Upcoming</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link nav-link-disable" href="upcoming.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Trip</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">Upcoming</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="apps/chat.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="message-square"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Chat</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-email" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-email">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="mail"></span></span><span className="nav-link-text">Email</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-email">
                                            <li className="collapsed-nav-item-title d-none">Email</li>
                                            <li className="nav-item"><a className="nav-link" href="apps/email/inbox.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Inbox</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/email/email-detail.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Email detail</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/email/compose.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Compose</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-events" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-events">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="bookmark"></span></span><span className="nav-link-text">Events</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-events">
                                            <li className="collapsed-nav-item-title d-none">Events</li>
                                            <li className="nav-item"><a className="nav-link" href="apps/events/create-an-event.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Create an event</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/events/event-detail.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Event detail</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-kanban" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-kanban">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="trello"></span></span><span className="nav-link-text">Kanban</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-kanban">
                                            <li className="collapsed-nav-item-title d-none">Kanban</li>
                                            <li className="nav-item"><a className="nav-link" href="apps/kanban/kanban.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Kanban</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/kanban/boards.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Boards</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/kanban/create-kanban-board.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Create board</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-social" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-social">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="share-2"></span></span><span className="nav-link-text">Social</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-social">
                                            <li className="collapsed-nav-item-title d-none">Social</li>
                                            <li className="nav-item"><a className="nav-link" href="apps/social/profile.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Profile</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="apps/social/settings.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Settings</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="apps/calendar.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="calendar"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Calendar</span></span></div>
                                </a></div>
                            </li>
                            <li className="nav-item">
                                <p className="navbar-vertical-label">Pages</p>
                                <hr className="navbar-vertical-line" />
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="pages/starter.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="compass"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Starter</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-faq" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-faq">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="help-circle"></span></span><span className="nav-link-text">Faq</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-faq">
                                            <li className="collapsed-nav-item-title d-none">Faq</li>
                                            <li className="nav-item"><a className="nav-link" href="pages/faq/faq-accordion.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Faq accordion</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="pages/faq/faq-tab.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Faq tab</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-landing" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-landing">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="globe"></span></span><span className="nav-link-text">Landing</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-landing">
                                            <li className="collapsed-nav-item-title d-none">Landing</li>
                                            <li className="nav-item"><a className="nav-link" href="pages/landing/default.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Default</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="pages/landing/alternate.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Alternate</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-pricing" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-pricing">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="tag"></span></span><span className="nav-link-text">Pricing</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-pricing">
                                            <li className="collapsed-nav-item-title d-none">Pricing</li>
                                            <li className="nav-item"><a className="nav-link" href="pages/pricing/pricing-column.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Pricing column</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="pages/pricing/pricing-grid.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Pricing grid</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="pages/notifications.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="bell"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Notifications</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="pages/members.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="users"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Members</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="pages/timeline.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="clock"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Timeline</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-errors" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-errors">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="alert-triangle"></span></span><span className="nav-link-text">Errors</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-errors">
                                            <li className="collapsed-nav-item-title d-none">Errors</li>
                                            <li className="nav-item"><a className="nav-link" href="pages/errors/404.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">404</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="pages/errors/403.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">403</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="pages/errors/500.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">500</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-authentication" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-authentication">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="lock"></span></span><span className="nav-link-text">Authentication</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-authentication">
                                            <li className="collapsed-nav-item-title d-none">Authentication</li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-simple" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-simple">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Simple</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#authentication" id="nv-simple">
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/sign-in.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign in</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/sign-up.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign up</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/sign-out.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign out</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/forgot-password.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Forgot password</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/reset-password.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Reset password</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/lock-screen.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Lock screen</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/simple/2FA.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">2FA</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-split" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-split">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Split</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#authentication" id="nv-split">
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/split/sign-in.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign in</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/split/sign-up.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign up</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/split/sign-out.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign out</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/split/forgot-password.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Forgot password</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/split/reset-password.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Reset password</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/split/lock-screen.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Lock screen</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/split/2FA.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">2FA</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-Card" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-Card">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Card</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#authentication" id="nv-Card">
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/sign-in.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign in</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/sign-up.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign up</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/sign-out.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Sign out</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/forgot-password.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Forgot password</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/reset-password.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Reset password</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/lock-screen.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Lock screen</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="pages/authentication/card/2FA.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">2FA</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-layouts" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-layouts">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="layout"></span></span><span className="nav-link-text">Layouts</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-layouts">
                                            <li className="collapsed-nav-item-title d-none">Layouts</li>
                                            <li className="nav-item"><a className="nav-link" href="demo/vertical-sidenav.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Vertical sidenav</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/dark-mode.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Dark mode</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/sidenav-collapse.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Sidenav collapse</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/darknav.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Darknav</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/topnav-slim.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Topnav slim</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/navbar-top-slim.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Navbar top slim</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/navbar-top.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Navbar top</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/horizontal-slim.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Horizontal slim</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/combo-nav.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Combo nav</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/combo-nav-slim.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Combo nav slim</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="demo/dual-nav.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Dual nav</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <p className="navbar-vertical-label">Modules</p>
                                <hr className="navbar-vertical-line" />
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-forms" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-forms">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="file-text"></span></span><span className="nav-link-text">Forms</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-forms">
                                            <li className="collapsed-nav-item-title d-none">Forms</li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-basic" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-basic">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Basic</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#forms" id="nv-basic">
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/basic/form-control.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Form control</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/basic/input-group.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Input group</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/basic/select.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Select</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/basic/checks.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Checks</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/basic/range.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Range</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/basic/floating-labels.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Floating labels</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/basic/layout.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Layout</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-advance" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-advance">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Advance</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#forms" id="nv-advance">
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/advance/advance-select.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Advance select</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/advance/date-picker.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Date picker</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/advance/editor.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Editor</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/advance/file-uploader.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">File uploader</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/advance/rating.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Rating</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/forms/advance/emoji-button.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Emoji button</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/forms/validation.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Validation</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/forms/wizard.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Wizard</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-icons" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-icons">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="grid"></span></span><span className="nav-link-text">Icons</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-icons">
                                            <li className="collapsed-nav-item-title d-none">Icons</li>
                                            <li className="nav-item"><a className="nav-link" href="modules/icons/feather.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Feather</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/icons/font-awesome.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Font awesome</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/icons/unicons.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Unicons</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-tables" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-tables">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="columns"></span></span><span className="nav-link-text">Tables</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-tables">
                                            <li className="collapsed-nav-item-title d-none">Tables</li>
                                            <li className="nav-item"><a className="nav-link" href="modules/tables/basic-tables.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Basic tables</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/tables/advance-tables.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Advance tables</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/tables/bulk-select.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Bulk Select</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-ECharts" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-ECharts">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="bar-chart-2"></span></span><span className="nav-link-text">ECharts</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-ECharts">
                                            <li className="collapsed-nav-item-title d-none">ECharts</li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/line-charts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Line charts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/bar-charts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Bar charts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/candlestick-charts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Candlestick charts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/geo-map.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Geo map</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/scatter-charts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Scatter charts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/pie-charts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Pie charts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/gauge-chart.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Gauge chart</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/radar-charts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Radar charts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/heatmap-charts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Heatmap charts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/echarts/how-to-use.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">How to use</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-components" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-components">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="package"></span></span><span className="nav-link-text">Components</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-components">
                                            <li className="collapsed-nav-item-title d-none">Components</li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/accordion.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Accordion</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/avatar.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Avatar</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/alerts.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Alerts</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/badge.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Badge</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/breadcrumb.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Breadcrumb</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/button.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Buttons</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/calendar.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Calendar</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/card.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Card</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-carousel" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-carousel">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Carousel</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#components" id="nv-carousel">
                                                        <li className="nav-item"><a className="nav-link" href="modules/components/carousel/bootstrap.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Bootstrap</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/components/carousel/swiper.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Swiper</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/collapse.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Collapse</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/dropdown.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Dropdown</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/list-group.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">List group</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/modal.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Modals</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-navs-_and_-Tabs" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-navs-_and_-Tabs">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Navs &amp; Tabs</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#components" id="nv-navs-_and_-Tabs">
                                                        <li className="nav-item"><a className="nav-link" href="modules/components/navs-and-tabs/navs.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Navs</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/components/navs-and-tabs/navbar.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Navbar</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="modules/components/navs-and-tabs/tabs.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Tabs</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/offcanvas.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Offcanvas</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/progress-bar.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Progress bar</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/placeholder.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Placeholder</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/pagination.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Pagination</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/popovers.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Popovers</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/scrollspy.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Scrollspy</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/sortable.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Sortable</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/spinners.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Spinners</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/toast.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Toast</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/tooltips.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Tooltips</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/components/chat-widget.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Chat widget</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-utilities" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-utilities">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="tool"></span></span><span className="nav-link-text">Utilities</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-utilities">
                                            <li className="collapsed-nav-item-title d-none">Utilities</li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/background.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Background</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/borders.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Borders</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/colors.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Colors</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/display.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Display</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/flex.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Flex</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/stacks.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Stacks</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/float.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Float</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/grid.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Grid</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/interactions.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Interactions</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/opacity.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Opacity</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/overflow.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Overflow</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/position.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Position</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/shadows.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Shadows</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/sizing.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Sizing</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/spacing.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Spacing</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/typography.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Typography</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/vertical-align.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Vertical align</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="modules/utilities/visibility.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Visibility</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="widgets.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="server"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Widgets</span></span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning nav-link-badge">New</span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-multi-level" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-multi-level">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="layers"></span></span><span className="nav-link-text">Multi level</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-multi-level">
                                            <li className="collapsed-nav-item-title d-none">Multi level</li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-level-two" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-level-two">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Level two</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#multi-level" id="nv-level-two">
                                                        <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Item 1</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Item 2</span></div>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-level-three" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-level-three">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Level three</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#multi-level" id="nv-level-three">
                                                        <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Item 3</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-item-4" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-item-4">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Item 4</span>
                                                            </div>
                                                        </a>
                                                            <div className="parent-wrapper">
                                                                <ul className="nav collapse parent" data-bs-parent="#level-three" id="nv-item-4">
                                                                    <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Item 5</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Item 6</span></div>
                                                                    </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-level-four" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-level-four">
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Level four</span>
                                                </div>
                                            </a>
                                                <div className="parent-wrapper">
                                                    <ul className="nav collapse parent" data-bs-parent="#multi-level" id="nv-level-four">
                                                        <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                            <div className="d-flex align-items-center"><span className="nav-link-text">Item 6</span></div>
                                                        </a>
                                                        </li>
                                                        <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-item-7" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-item-7">
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Item 7</span>
                                                            </div>
                                                        </a>
                                                            <div className="parent-wrapper">
                                                                <ul className="nav collapse parent" data-bs-parent="#level-four" id="nv-item-7">
                                                                    <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                                        <div className="d-flex align-items-center"><span className="nav-link-text">Item 8</span></div>
                                                                    </a>
                                                                    </li>
                                                                    <li className="nav-item"><a className="nav-link dropdown-indicator" href="#nv-item-9" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-item-9">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-text">Item 9</span>
                                                                        </div>
                                                                    </a>
                                                                        <div className="parent-wrapper">
                                                                            <ul className="nav collapse parent" data-bs-parent="#item-7" id="nv-item-9">
                                                                                <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                                                    <div className="d-flex align-items-center"><span className="nav-link-text">Item 10</span></div>
                                                                                </a>
                                                                                </li>
                                                                                <li className="nav-item"><a className="nav-link" href="#!.html" data-bs-toggle="" aria-expanded="false">
                                                                                    <div className="d-flex align-items-center"><span className="nav-link-text">Item 11</span></div>
                                                                                </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <p className="navbar-vertical-label">Documentation</p>
                                <hr className="navbar-vertical-line" />
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="documentation/getting-started.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="life-buoy"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Getting started</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-customization" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-customization">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="settings"></span></span><span className="nav-link-text">Customization</span><span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ fontSize: '6px' }}></span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-customization">
                                            <li className="collapsed-nav-item-title d-none">Customization</li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/customization/configuration.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Configuration</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/customization/styling.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Styling</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/customization/color.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Color</span><span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">New</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/customization/dark-mode.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Dark mode</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/customization/plugin.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Plugin</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link dropdown-indicator label-1" href="#nv-layouts-doc" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="nv-layouts-doc">
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon"><span className="fas fa-caret-right"></span></div><span className="nav-link-icon"><span data-feather="table"></span></span><span className="nav-link-text">Layouts doc</span>
                                    </div>
                                </a>
                                    <div className="parent-wrapper label-1">
                                        <ul className="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="nv-layouts-doc">
                                            <li className="collapsed-nav-item-title d-none">Layouts doc</li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/layouts/vertical-navbar.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Vertical navbar</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/layouts/horizontal-navbar.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Horizontal navbar</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/layouts/combo-navbar.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Combo navbar</span></div>
                                            </a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="documentation/layouts/dual-nav.html" data-bs-toggle="" aria-expanded="false">
                                                <div className="d-flex align-items-center"><span className="nav-link-text">Dual nav</span></div>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="documentation/gulp.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fa-brands fa-gulp ms-1 me-1 fa-lg"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Gulp</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="documentation/design-file.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="figma"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Design file</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="changelog.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="git-merge"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Changelog</span></span></div>
                                </a></div>
                                <div className="nav-item-wrapper"><a className="nav-link label-1" href="showcase.html" role="button" data-bs-toggle="" aria-expanded="false">
                                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span data-feather="monitor"></span></span><span className="nav-link-text-wrapper"><span className="nav-link-text">Showcase</span></span></div>
                                </a></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-vertical-footer"><button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"><span className="uil uil-left-arrow-to-left fs-8"></span><span className="uil uil-arrow-from-right fs-8"></span><span className="navbar-vertical-footer-text ms-2">Collapsed View</span></button></div>
            </nav>
            <nav className="navbar navbar-top fixed-top navbar-expand" id="navbarDefault" style={{ display: 'none' }}>
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="navbar-logo">
                        <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                        <a className="navbar-brand me-1 me-sm-3" href="index.html">
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center"><img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                                    <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="search-box navbar-top-search-box d-none d-lg-block" data-list='{"valueNames":["title"]}' style={{ width: "25rem" }}>
                        <form className="position-relative" data-bs-toggle="search" data-bs-display="static">
                            <input className="form-control search-input fuzzy-search rounded-pill form-control-sm" type="search" placeholder="Search..." aria-label="Search" />
                            <span className="fas fa-search search-box-icon"></span>
                        </form>
                        <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link p-0" aria-label="Close"></button></div>
                        <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                            <div className="scrollbar-overlay" style={{ maxHeight: '30rem' }}>
                                <div className="list pb-3">
                                    <h6 className="dropdown-header text-body-highlight fs-10 py-2">24 <span className="text-body-quaternary">results</span></h6>
                                    <hr className="my-0" />
                                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Recently Searched </h6>
                                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                                        </div>
                                    </a>
                                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                                            </div>
                                        </a>
                                    </div>
                                    <hr className="my-0" />
                                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
                                    <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                                        <div className="file-thumbnail me-2"><img className="h-100 w-100 fit-cover rounded-3" src="assets/img/products/60x60/3.png" alt="" /></div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
                                            <p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                                        </div>
                                    </a>
                                        <a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                                            <div className="file-thumbnail me-2"><img className="img-fluid" src="assets/img/products/60x60/3.png" alt="" /></div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
                                                <p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85 ms-2">30 Sep at 12:30 PM</span></p>
                                            </div>
                                        </a>
                                    </div>
                                    <hr className="my-0" />
                                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
                                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                                        </div>
                                    </a>
                                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                                            </div>
                                        </a>
                                    </div>
                                    <hr className="my-0" />
                                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
                                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                                        </div>
                                    </a>
                                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
                                            </div>
                                        </a>
                                    </div>
                                    <hr className="my-0" />
                                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Members</h6>
                                    <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                                        <div className="avatar avatar-l status-online  me-2 text-body">
                                            <img className="rounded-circle " src="assets/img/team/40x40/10.webp" alt="" />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 text-body-highlight title">Carry Anna</h6>
                                            <p className="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
                                        </div>
                                    </a>
                                        <a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                                            <div className="avatar avatar-l  me-2 text-body">
                                                <img className="rounded-circle " src="assets/img/team/40x40/12.webp" alt="" />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-body-highlight title">John Smith</h6>
                                                <p className="fs-10 mb-0 d-flex text-body-tertiary">smith@technext.it</p>
                                            </div>
                                        </a>
                                    </div>
                                    <hr className="my-0" />
                                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Related Searches</h6>
                                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                        <div className="d-flex align-items-center">
                                            <div className="fw-normal text-body-highlight title"><span className="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                                        </div>
                                    </a>
                                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"> <span className="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="fallback fw-bold fs-7 d-none">No Result Found.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="navbar-nav navbar-nav-icons flex-row">
                        <li className="nav-item">
                            <div className="theme-control-toggle fa-icon-wait px-2">
                                <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="sun"></span></label></div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" style={{ minWidth: '2.25rem' }} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span data-feather="bell" style={{ height: '20px', width: '20px' }}></span></a>
                            <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                                <div className="card position-relative border-0">
                                    <div className="card-header p-2">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-body-emphasis mb-0">Notificatons</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="scrollbar-overlay" style={{ height: '27rem' }}>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <div className="avatar-name rounded-circle"><span>J</span></div>
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer p-0 border-top border-translucent border-0">
                                        <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                            </svg></a>
                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                                <div className="card bg-body-emphasis position-relative border-0">
                                    <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{ height: '20rem' }}>
                                        <div className="row text-center align-items-center gx-0 gy-0">
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar avatar-l ">
                                <img className="rounded-circle " src="assets/img/team/40x40/57.webp" alt="" />
                            </div>
                        </a>
                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
                                <div className="card position-relative border-0">
                                    <div className="card-body p-0">
                                        <div className="text-center pt-4 pb-3">
                                            <div className="avatar avatar-xl ">
                                                <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                                            </div>
                                            <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                        </div>
                                        <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                                    </div>
                                    <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                        <ul className="nav d-flex flex-column mb-2 pb-1">
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user"></span><span>Profile</span></a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-body" data-feather="pie-chart"></span>Dashboard</a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="lock"></span>Posts &amp; Activity</a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="help-circle"></span>Help Center</a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="globe"></span>Language</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-footer p-0 border-top border-translucent">
                                        <ul className="nav d-flex flex-column my-3">
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user-plus"></span>Add another account</a></li>
                                        </ul>
                                        <hr />
                                        <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                                        <div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a className="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-top navbar-slim fixed-top navbar-expand" id="topNavSlim" style={{ display: 'none' }}>
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="navbar-logo">
                        <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                        <a className="navbar-brand navbar-brand" href="index.html">phoenix <span className="text-body-highlight d-none d-sm-inline">slim</span></a>
                    </div>
                    <ul className="navbar-nav navbar-nav-icons flex-row">
                        <li className="nav-item">
                            <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="moon"></span><span className="fs-9 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="sun"></span><span className="fs-9 fw-bold">Light</span></label></div>
                        </li>
                        <li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{ height: '12px', width: '12px' }}></span></a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span data-feather="bell" style={{ height: '12px', width: '12px' }}></span></a>
                            <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                                <div className="card position-relative border-0">
                                    <div className="card-header p-2">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-body-emphasis mb-0">Notificatons</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="scrollbar-overlay" style={{ height: '27rem' }}>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3">
                                                            <div className="avatar-name rounded-circle"><span>J</span></div>
                                                        </div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                                <div className="d-flex align-items-center justify-content-between position-relative">
                                                    <div className="d-flex">
                                                        <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                                        <div className="flex-1 me-sm-3">
                                                            <h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                            <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer p-0 border-top border-translucent border-0">
                                        <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                            </svg></a>
                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                                <div className="card bg-body-emphasis position-relative border-0">
                                    <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{ height: '20rem' }}>
                                        <div className="row text-center align-items-center gx-0 gy-0">
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
                                            </a></div>
                                            <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                                                <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="fa-solid fa-chevron-down fs-10"></span></a>
                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
                                <div className="card position-relative border-0">
                                    <div className="card-body p-0">
                                        <div className="text-center pt-4 pb-3">
                                            <div className="avatar avatar-xl ">
                                                <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                                            </div>
                                            <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                        </div>
                                        <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                                    </div>
                                    <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                        <ul className="nav d-flex flex-column mb-2 pb-1">
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user"></span><span>Profile</span></a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-body" data-feather="pie-chart"></span>Dashboard</a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="lock"></span>Posts &amp; Activity</a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="help-circle"></span>Help Center</a></li>
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="globe"></span>Language</a></li>
                                        </ul>
                                    </div>
                                    <div className="card-footer p-0 border-top border-translucent">
                                        <ul className="nav d-flex flex-column my-3">
                                            <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user-plus"></span>Add another account</a></li>
                                        </ul>
                                        <hr />
                                        <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                                        <div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a className="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-top fixed-top navbar-expand-lg" id="navbarTop" style={{ display: 'none' }}>
                <div className="navbar-logo">
                    <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                    <a className="navbar-brand me-1 me-sm-3" href="index.html">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center"><img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                                <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
                    <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-chart-pie"></span>Home</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item active" href="index.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/project-management.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/crm.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/travel-agency.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</div>
                                </a></li>
                                <li><a className="dropdown-item" href="apps/social/feed.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-cube"></span>Apps</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/crm/analytics.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deals.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/leads.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="travel-agency" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/travel-agency/landing.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Landing</div>
                                        </a></li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="hotel" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Hotel</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/add-property.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add property</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add room</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/room-listing.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Room listing</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Search room</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel details</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel compare</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Check out</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Flight</div>
                                        </a></li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Trip</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/chat.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/email/inbox.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/email-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/compose.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/events/event-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/boards.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/social/profile.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/social/settings.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/calendar.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-files-landscapes-alt"></span>Pages</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="pages/starter.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/landing/default.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/landing/alternate.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="pages/notifications.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/members.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/timeline.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/errors/404.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/403.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/500.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/darknav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/topnav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-puzzle-piece"></span>Modules</a>
                            <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                                <div className="border-0 scrollbar" style={{ minHeight: '60vh' }}>
                                    <div className="px-3 pt-4 pb-3 img-dropdown">
                                        <div className="row gx-4 gy-5">
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Forms</h6>
                                                </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Icons</h6>
                                                </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">ECharts</h6>
                                                </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Components</h6>
                                                </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Tables</h6>
                                                </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Utilities</h6>
                                                </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-document-layout-right"></span>Documentation</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="documentation/getting-started.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                                </a></li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/styling.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/color.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Color</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="documentation/gulp.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                                </a></li>
                                <li><a className="dropdown-item" href="documentation/design-file.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                                </a></li>
                                <li><a className="dropdown-item" href="changelog.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                                </a></li>
                                <li><a className="dropdown-item" href="showcase.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-nav-icons flex-row">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-icon-wait px-2">
                            <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" />
                            <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme" ><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="sun"></span></label></div>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{ height: '19px', width: '19px', marginBottom: '2px' }}></span></a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ minWidth: '2.25rem' }} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span data-feather="bell" style={{ height: '20px', width: '20px' }}></span></a>
                        <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                            <div className="card position-relative border-0">
                                <div className="card-header p-2">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="text-body-emphasis mb-0">Notificatons</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="scrollbar-overlay" style={{ height: '27rem' }}>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3">
                                                        <div className="avatar-name rounded-circle"><span>J</span></div>
                                                    </div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent border-0">
                                    <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                        </svg></a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                            <div className="card bg-body-emphasis position-relative border-0">
                                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{ height: '20rem' }}>
                                    <div className="row text-center align-items-center gx-0 gy-0">
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar avatar-l ">
                            <img className="rounded-circle " src="assets/img/team/40x40/57.webp" alt="" />
                        </div>
                    </a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
                            <div className="card position-relative border-0">
                                <div className="card-body p-0">
                                    <div className="text-center pt-4 pb-3">
                                        <div className="avatar avatar-xl ">
                                            <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                                        </div>
                                        <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                    </div>
                                    <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                                </div>
                                <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                    <ul className="nav d-flex flex-column mb-2 pb-1">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user"></span><span>Profile</span></a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-body" data-feather="pie-chart"></span>Dashboard</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="lock"></span>Posts &amp; Activity</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="help-circle"></span>Help Center</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="globe"></span>Language</a></li>
                                    </ul>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent">
                                    <ul className="nav d-flex flex-column my-3">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user-plus"></span>Add another account</a></li>
                                    </ul>
                                    <hr />
                                    <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                                    <div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a className="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-top navbar-slim justify-content-between fixed-top navbar-expand-lg" id="navbarTopSlim" style={{ display: 'none' }}>
                <div className="navbar-logo">
                    <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                    <a className="navbar-brand navbar-brand" href="index.html">phoenix <span className="text-body-highlight d-none d-sm-inline">slim</span></a>
                </div>
                <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
                    <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-chart-pie"></span>Home</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item active" href="index.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/project-management.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/crm.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/travel-agency.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</div>
                                </a></li>
                                <li><a className="dropdown-item" href="apps/social/feed.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-cube"></span>Apps</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/crm/analytics.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deals.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/leads.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="travel-agency" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/travel-agency/landing.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Landing</div>
                                        </a></li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="hotel" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Hotel</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/add-property.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add property</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add room</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/room-listing.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Room listing</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Search room</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel details</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel compare</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Check out</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Flight</div>
                                        </a></li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Trip</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/chat.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/email/inbox.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/email-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/compose.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/events/event-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/boards.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/social/profile.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/social/settings.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/calendar.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-files-landscapes-alt"></span>Pages</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="pages/starter.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/landing/default.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/landing/alternate.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="pages/notifications.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/members.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/timeline.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/errors/404.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/403.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/500.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/darknav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/topnav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-puzzle-piece"></span>Modules</a>
                            <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                                <div className="border-0 scrollbar" style={{ minHeight: '60vh' }}>
                                    <div className="px-3 pt-4 pb-3 img-dropdown">
                                        <div className="row gx-4 gy-5">
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Forms</h6>
                                                </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Icons</h6>
                                                </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">ECharts</h6>
                                                </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Components</h6>
                                                </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Tables</h6>
                                                </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Utilities</h6>
                                                </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-document-layout-right"></span>Documentation</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="documentation/getting-started.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                                </a></li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/styling.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/color.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Color</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="documentation/gulp.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                                </a></li>
                                <li><a className="dropdown-item" href="documentation/design-file.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                                </a></li>
                                <li><a className="dropdown-item" href="changelog.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                                </a></li>
                                <li><a className="dropdown-item" href="showcase.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-nav-icons flex-row">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"
                        ><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="moon"></span><span className="fs-9 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="sun"></span><span className="fs-9 fw-bold">Light</span></label></div>
                    </li>
                    <li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{ height: '12px', width: '12px' }}></span></a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span data-feather="bell" style={{ height: '12px', width: '12px' }}></span></a>
                        <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                            <div className="card position-relative border-0">
                                <div className="card-header p-2">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="text-body-emphasis mb-0">Notificatons</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="scrollbar-overlay" style={{ height: '27rem' }}>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3">
                                                        <div className="avatar-name rounded-circle"><span>J</span></div>
                                                    </div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent border-0">
                                    <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                        </svg></a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                            <div className="card bg-body-emphasis position-relative border-0">
                                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{ height: '20rem' }}>
                                    <div className="row text-center align-items-center gx-0 gy-0">
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="fa-solid fa-chevron-down fs-10"></span></a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
                            <div className="card position-relative border-0">
                                <div className="card-body p-0">
                                    <div className="text-center pt-4 pb-3">
                                        <div className="avatar avatar-xl ">
                                            <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                                        </div>
                                        <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                    </div>
                                    <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                                </div>
                                <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                    <ul className="nav d-flex flex-column mb-2 pb-1">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user"></span><span>Profile</span></a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-body" data-feather="pie-chart"></span>Dashboard</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="lock"></span>Posts &amp; Activity</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="help-circle"></span>Help Center</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="globe"></span>Language</a></li>
                                    </ul>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent">
                                    <ul className="nav d-flex flex-column my-3">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user-plus"></span>Add another account</a></li>
                                    </ul>
                                    <hr />
                                    <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                                    <div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a className="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-top fixed-top navbar-expand-lg" id="navbarCombo" data-navbar-top="combo" data-move-target="#navbarVerticalNav" style={{ display: 'none' }}>
                <div className="navbar-logo">
                    <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                    <a className="navbar-brand me-1 me-sm-3" href="index.html">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center"><img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                                <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
                    <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-chart-pie"></span>Home</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item active" href="index.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/project-management.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/crm.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/travel-agency.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</div>
                                </a></li>
                                <li><a className="dropdown-item" href="apps/social/feed.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-cube"></span>Apps</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/crm/analytics.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deals.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/leads.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="travel-agency" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/travel-agency/landing.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Landing</div>
                                        </a></li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="hotel" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Hotel</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/add-property.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add property</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add room</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/room-listing.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Room listing</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Search room</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel details</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel compare</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Check out</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Flight</div>
                                        </a></li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Trip</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/chat.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/email/inbox.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/email-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/compose.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/events/event-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/boards.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/social/profile.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/social/settings.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/calendar.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-files-landscapes-alt"></span>Pages</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="pages/starter.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/landing/default.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/landing/alternate.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="pages/notifications.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/members.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/timeline.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/errors/404.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/403.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/500.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/darknav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/topnav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-puzzle-piece"></span>Modules</a>
                            <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                                <div className="border-0 scrollbar" style={{ minHeight: '60vh' }}>
                                    <div className="px-3 pt-4 pb-3 img-dropdown">
                                        <div className="row gx-4 gy-5">
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Forms</h6>
                                                </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Icons</h6>
                                                </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">ECharts</h6>
                                                </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Components</h6>
                                                </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Tables</h6>
                                                </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Utilities</h6>
                                                </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-document-layout-right"></span>Documentation</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="documentation/getting-started.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                                </a></li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/styling.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/color.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Color</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="documentation/gulp.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                                </a></li>
                                <li><a className="dropdown-item" href="documentation/design-file.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                                </a></li>
                                <li><a className="dropdown-item" href="changelog.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                                </a></li>
                                <li><a className="dropdown-item" href="showcase.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-nav-icons flex-row">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-icon-wait px-2">
                            <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="sun"></span></label></div>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{ height: '19px', width: '19px', marginBottom: '2px' }}></span></a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" style={{ minWidth: '2.25rem' }} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span data-feather="bell" style={{ height: '20px', width: '20px' }}></span></a>
                        <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                            <div className="card position-relative border-0">
                                <div className="card-header p-2">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="text-body-emphasis mb-0">Notificatons</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="scrollbar-overlay" style={{ height: '27rem' }}>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3">
                                                        <div className="avatar-name rounded-circle"><span>J</span></div>
                                                    </div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent border-0">
                                    <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                        </svg></a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                            <div className="card bg-body-emphasis position-relative border-0">
                                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{ height: '20rem' }}>
                                    <div className="row text-center align-items-center gx-0 gy-0">
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar avatar-l ">
                            <img className="rounded-circle " src="assets/img/team/40x40/57.webp" alt="" />
                        </div>
                    </a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
                            <div className="card position-relative border-0">
                                <div className="card-body p-0">
                                    <div className="text-center pt-4 pb-3">
                                        <div className="avatar avatar-xl ">
                                            <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                                        </div>
                                        <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                    </div>
                                    <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                                </div>
                                <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                    <ul className="nav d-flex flex-column mb-2 pb-1">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user"></span><span>Profile</span></a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-body" data-feather="pie-chart"></span>Dashboard</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="lock"></span>Posts &amp; Activity</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="help-circle"></span>Help Center</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="globe"></span>Language</a></li>
                                    </ul>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent">
                                    <ul className="nav d-flex flex-column my-3">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user-plus"></span>Add another account</a></li>
                                    </ul>
                                    <hr />
                                    <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                                    <div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a className="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-top fixed-top navbar-slim justify-content-between navbar-expand-lg" id="navbarComboSlim" data-navbar-top="combo" data-move-target="#navbarVerticalNav" style={{ display: 'none' }}>
                <div className="navbar-logo">
                    <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                    <a className="navbar-brand navbar-brand" href="index.html">phoenix <span className="text-body-highlight d-none d-sm-inline">slim</span></a>
                </div>
                <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
                    <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-chart-pie"></span>Home</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item active" href="index.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/project-management.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/crm.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                                </a></li>
                                <li><a className="dropdown-item" href="dashboard/travel-agency.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</div>
                                </a></li>
                                <li><a className="dropdown-item" href="apps/social/feed.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-cube"></span>Apps</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/crm/analytics.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deals.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/leads.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="travel-agency" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/travel-agency/landing.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Landing</div>
                                        </a></li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="hotel" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Hotel</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/add-property.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add property</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add room</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/room-listing.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Room listing</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Search room</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                                </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel details</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel compare</div>
                                                        </a></li>
                                                        <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Check out</div>
                                                        </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Flight</div>
                                        </a></li>
                                        <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Trip</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/chat.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/email/inbox.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/email-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/email/compose.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/events/event-detail.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/boards.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="apps/social/profile.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="apps/social/settings.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="apps/calendar.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                                </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-files-landscapes-alt"></span>Pages</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="pages/starter.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/landing/default.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/landing/alternate.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="pages/notifications.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/members.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                                </a></li>
                                <li><a className="dropdown-item" href="pages/timeline.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                                </a></li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="pages/errors/404.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/403.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="pages/errors/500.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                            <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                                        </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                </a></li>
                                                <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                                                    <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/darknav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/topnav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/navbar-top.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="demo/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-puzzle-piece"></span>Modules</a>
                            <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                                <div className="border-0 scrollbar" style={{ minHeight: '60vh' }}>
                                    <div className="px-3 pt-4 pb-3 img-dropdown">
                                        <div className="row gx-4 gy-5">
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Forms</h6>
                                                </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Icons</h6>
                                                </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">ECharts</h6>
                                                </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Components</h6>
                                                </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-4">
                                                <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Tables</h6>
                                                </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                                                <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{ strokeWidth: '2' }}></span>
                                                    <h6 className="dropdown-item-title">Utilities</h6>
                                                </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-document-layout-right"></span>Documentation</a>
                            <ul className="dropdown-menu navbar-dropdown-caret">
                                <li><a className="dropdown-item" href="documentation/getting-started.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                                </a></li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/styling.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/color.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Color</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                                </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                                        </a></li>
                                        <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="documentation/gulp.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                                </a></li>
                                <li><a className="dropdown-item" href="documentation/design-file.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                                </a></li>
                                <li><a className="dropdown-item" href="changelog.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                                </a></li>
                                <li><a className="dropdown-item" href="showcase.html">
                                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav navbar-nav-icons flex-row">
                    <li className="nav-item">
                        <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim">
                            <input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="moon"></span><span className="fs-9 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="sun"></span><span className="fs-9 fw-bold">Light</span></label></div>
                    </li>
                    <li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{ height: '12px', width: '12px' }}></span></a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span data-feather="bell" style={{ height: '12px', width: '12px' }}></span></a>
                        <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                            <div className="card position-relative border-0">
                                <div className="card-header p-2">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="text-body-emphasis mb-0">Notificatons</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="scrollbar-overlay" style={{ height: '27rem' }}>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3">
                                                        <div className="avatar-name rounded-circle"><span>J</span></div>
                                                    </div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                            <div className="d-flex align-items-center justify-content-between position-relative">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                                    <div className="flex-1 me-sm-3">
                                                        <h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                        <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                        <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent border-0">
                                    <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                            <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                            <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                        </svg></a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                            <div className="card bg-body-emphasis position-relative border-0">
                                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{ height: '20rem' }}>
                                    <div className="row text-center align-items-center gx-0 gy-0">
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
                                        </a></div>
                                        <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
                                        </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="fa-solid fa-chevron-down fs-10"></span></a>
                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
                            <div className="card position-relative border-0">
                                <div className="card-body p-0">
                                    <div className="text-center pt-4 pb-3">
                                        <div className="avatar avatar-xl ">
                                            <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                                        </div>
                                        <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                    </div>
                                    <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                                </div>
                                <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                    <ul className="nav d-flex flex-column mb-2 pb-1">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user"></span><span>Profile</span></a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-body" data-feather="pie-chart"></span>Dashboard</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="lock"></span>Posts &amp; Activity</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="help-circle"></span>Help Center</a></li>
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="globe"></span>Language</a></li>
                                    </ul>
                                </div>
                                <div className="card-footer p-0 border-top border-translucent">
                                    <ul className="nav d-flex flex-column my-3">
                                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user-plus"></span>Add another account</a></li>
                                    </ul>
                                    <hr />
                                    <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                                    <div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a className="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-top fixed-top navbar-expand-lg" id="dualNav" style={{ display: 'none' }}>
                <div className="w-100">
                    <div className="d-flex flex-between-center dual-nav-first-layer">
                        <div className="navbar-logo">
                            <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
                            <a className="navbar-brand me-1 me-sm-3" href="index.html">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center"><img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                                        <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="search-box navbar-top-search-box d-none d-lg-block" data-list='{"valueNames":["title"]}' style={{ width: '25rem' }}>
                            <form className="position-relative" data-bs-toggle="search" data-bs-display="static">
                                <input className="form-control search-input fuzzy-search rounded-pill form-control-sm" type="search" placeholder="Search..." aria-label="Search" />
                                <span className="fas fa-search search-box-icon"></span>
                            </form>
                            <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link p-0" aria-label="Close"></button></div>
                            <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                                <div className="scrollbar-overlay" style={{ maxHeight: '30rem' }}>
                                    <div className="list pb-3">
                                        <h6 className="dropdown-header text-body-highlight fs-10 py-2">24 <span className="text-body-quaternary">results</span></h6>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Recently Searched </h6>
                                        <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                                            </div>
                                        </a>
                                            <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
                                        <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                                            <div className="file-thumbnail me-2"><img className="h-100 w-100 fit-cover rounded-3" src="assets/img/products/60x60/3.png" alt="" /></div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
                                                <p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                                            </div>
                                        </a>
                                            <a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                                                <div className="file-thumbnail me-2"><img className="img-fluid" src="assets/img/products/60x60/3.png" alt="" /></div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85 ms-2">30 Sep at 12:30 PM</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
                                        <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                                            </div>
                                        </a>
                                            <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
                                        <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                                            </div>
                                        </a>
                                            <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Members</h6>
                                        <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                                            <div className="avatar avatar-l status-online  me-2 text-body">
                                                <img className="rounded-circle " src="assets/img/team/40x40/10.webp" alt="" />
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-0 text-body-highlight title">Carry Anna</h6>
                                                <p className="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
                                            </div>
                                        </a>
                                            <a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                                                <div className="avatar avatar-l  me-2 text-body">
                                                    <img className="rounded-circle " src="assets/img/team/40x40/12.webp" alt="" />
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">John Smith</h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary">smith@technext.it</p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Related Searches</h6>
                                        <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                            <div className="d-flex align-items-center">
                                                <div className="fw-normal text-body-highlight title"><span className="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                                            </div>
                                        </a>
                                            <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"> <span className="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="fallback fw-bold fs-7 d-none">No Result Found.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-icons flex-row">
                            <li className="nav-item">
                                <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="sun"></span></label></div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" style={{ minWidth: '2.25rem' }} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span data-feather="bell" style={{ height: '20px', width: '20px' }}></span></a>
                                <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                                    <div className="card position-relative border-0">
                                        <div className="card-header p-2">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="text-body-emphasis mb-0">Notificatons</h5><button className="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="scrollbar-overlay" style={{ height: '27rem' }}>
                                                <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                                            <div className="flex-1 me-sm-3">
                                                                <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                                <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                                                <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-m status-online me-3">
                                                                <div className="avatar-name rounded-circle"><span>J</span></div>
                                                            </div>
                                                            <div className="flex-1 me-sm-3">
                                                                <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                                <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>📅</span>Created an event.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                                                <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                                            <div className="flex-1 me-sm-3">
                                                                <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                                <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                                                <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                                            <div className="flex-1 me-sm-3">
                                                                <h4 className="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                                                <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>💬</span>Mentioned you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                                <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                                            <div className="flex-1 me-sm-3">
                                                                <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                                <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👤</span>Tagged you in a comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                                <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                                    <div className="d-flex align-items-center justify-content-between position-relative">
                                                        <div className="d-flex">
                                                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                                            <div className="flex-1 me-sm-3">
                                                                <h4 className="fs-9 text-body-emphasis">Benjamin Button</h4>
                                                                <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span className='me-1 fs-10'>👍</span>Liked your comment.<span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                                                <p className="text-body-secondary fs-9 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-none d-sm-block"><button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer p-0 border-top border-translucent border-0">
                                            <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                                    <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                                    <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                                    <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                                    <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                                    <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                                    <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                                    <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                                    <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                                </svg></a>
                                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                                    <div className="card bg-body-emphasis position-relative border-0">
                                        <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{ height: '20rem' }}>
                                            <div className="row text-center align-items-center gx-0 gy-0">
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Slack</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Gitlab</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">BitBucket</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Drive</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Trello</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Figma</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Twitter</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Pinterest</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Linkedin</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Maps</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Photos</p>
                                                </a></div>
                                                <div className="col-4"><a className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Spotify</p>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar avatar-l ">
                                    <img className="rounded-circle " src="assets/img/team/40x40/57.webp" alt="" />
                                </div>
                            </a>
                                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
                                    <div className="card position-relative border-0">
                                        <div className="card-body p-0">
                                            <div className="text-center pt-4 pb-3">
                                                <div className="avatar avatar-xl ">
                                                    <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                                                </div>
                                                <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                            </div>
                                            <div className="mb-3 mx-3">
                                                <input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                                        </div>
                                        <div className="overflow-auto scrollbar" style={{ height: '10rem' }}>
                                            <ul className="nav d-flex flex-column mb-2 pb-1">
                                                <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user"></span><span>Profile</span></a></li>
                                                <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-body" data-feather="pie-chart"></span>Dashboard</a></li>
                                                <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="lock"></span>Posts &amp; Activity</a></li>
                                                <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                                                <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="help-circle"></span>Help Center</a></li>
                                                <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="globe"></span>Language</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-footer p-0 border-top border-translucent">
                                            <ul className="nav d-flex flex-column my-3">
                                                <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-body" data-feather="user-plus"></span>Add another account</a></li>
                                            </ul>
                                            <hr />
                                            <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                                            <div className="my-2 text-center fw-bold fs-10 text-body-quaternary"><a className="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a className="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a className="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse navbar-top-collapse justify-content-center" id="navbarTopCollapse">
                        <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-chart-pie"></span>Home</a>
                                <ul className="dropdown-menu navbar-dropdown-caret">
                                    <li><a className="dropdown-item active" href="index.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="dashboard/project-management.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="dashboard/crm.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="dashboard/travel-agency.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="apps/social/feed.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                                    </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-cube"></span>Apps</a>
                                <ul className="dropdown-menu navbar-dropdown-caret">
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                            </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                                                    </a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                            </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                                                    </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="apps/crm/analytics.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/crm/deals.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/crm/leads.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/crm/reports.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="travel-agency" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="briefcase"></span>Travel agency</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="apps/travel-agency/landing.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Landing</div>
                                            </a></li>
                                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="hotel" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Hotel</span></div>
                                            </a>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                                                    </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/add-property.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add property</div>
                                                            </a></li>
                                                            <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add room</div>
                                                            </a></li>
                                                            <li><a className="dropdown-item" href="apps/travel-agency/hotel/admin/room-listing.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Room listing</div>
                                                            </a></li>
                                                            <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Search room</div>
                                                            </a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                                                    </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                                                            </a></li>
                                                            <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel details</div>
                                                            </a></li>
                                                            <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Hotel compare</div>
                                                            </a></li>
                                                            <li><a className="dropdown-item nav-link-disable" href="coming-soon.html">
                                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Check out</div>
                                                            </a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Flight</div>
                                            </a></li>
                                            <li><a className="dropdown-item nav-link-disable" href="upcoming.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Trip</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="apps/chat.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                                    </a></li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="apps/email/inbox.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/email/email-detail.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/email/compose.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/events/event-detail.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/kanban/boards.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="apps/social/profile.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="apps/social/settings.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="apps/calendar.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                                    </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-files-landscapes-alt"></span>Pages</a>
                                <ul className="dropdown-menu navbar-dropdown-caret">
                                    <li><a className="dropdown-item" href="pages/starter.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                                    </a></li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="pages/landing/default.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="pages/landing/alternate.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="pages/notifications.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="pages/members.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="pages/timeline.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                                    </a></li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="pages/errors/404.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="pages/errors/403.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="pages/errors/500.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                                            </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                    </a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                                            </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                    </a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                                            </a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                                                    </a></li>
                                                    <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                                                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                                                    </a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/dark-mode.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/darknav.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/topnav-slim.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/navbar-top.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/combo-nav.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="demo/dual-nav.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-puzzle-piece"></span>Modules</a>
                                <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                                    <div className="border-0 scrollbar" style={{ minHeight: '60vh' }}>
                                        <div className="px-3 pt-4 pb-3 img-dropdown">
                                            <div className="row gx-4 gy-5">
                                                <div className="col-12 col-sm-6 col-md-4">
                                                    <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{ strokeWidth: '2' }}></span>
                                                        <h6 className="dropdown-item-title">Forms</h6>
                                                    </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                                                    <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{ strokeWidth: '2' }}></span>
                                                        <h6 className="dropdown-item-title">Icons</h6>
                                                    </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                                                    <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{ strokeWidth: '2' }}></span>
                                                        <h6 className="dropdown-item-title">ECharts</h6>
                                                    </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-4">
                                                    <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{ strokeWidth: '2' }}></span>
                                                        <h6 className="dropdown-item-title">Components</h6>
                                                    </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-4">
                                                    <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{ strokeWidth: '2' }}></span>
                                                        <h6 className="dropdown-item-title">Tables</h6>
                                                    </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                                                    <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{ strokeWidth: '2' }}></span>
                                                        <h6 className="dropdown-item-title">Utilities</h6>
                                                    </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-8 me-2 uil-document-layout-right"></span>Documentation</a>
                                <ul className="dropdown-menu navbar-dropdown-caret">
                                    <li><a className="dropdown-item" href="documentation/getting-started.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                                    </a></li>
                                    <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="documentation/customization/styling.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="documentation/customization/color.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Color</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                        <div className="dropdown-item-wrapper"><span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                                    </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                                            </a></li>
                                            <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                                                <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                                            </a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="documentation/gulp.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="documentation/design-file.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="changelog.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="showcase.html">
                                        <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                                    </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="modal fade" id="searchBoxModal" tabIndex="-1" aria-hidden="true" data-bs-backdrop="true" data-phoenix-modal="data-phoenix-modal" style={{ display: 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content mt-15 rounded-pill">
                        <div className="modal-body p-0">
                            <div className="search-box navbar-top-search-box" data-list='{"valueNames":["title"]}' style={{ width: 'auto' }}>
                                <form className="position-relative" data-bs-toggle="search" data-bs-display="static">
                                    <input className="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
                                    <span className="fas fa-search search-box-icon"></span>
                                </form>
                                <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link p-0" aria-label="Close"></button></div>
                                <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                                    <div className="scrollbar-overlay" style={{ maxHeight: '30rem' }}>
                                        <div className="list pb-3">
                                            <h6 className="dropdown-header text-body-highlight fs-10 py-2">24 <span className="text-body-quaternary">results</span></h6>
                                            <hr className="my-0" />
                                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Recently Searched </h6>
                                            <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                                                </div>
                                            </a>
                                                <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="d-flex align-items-center">
                                                        <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr className="my-0" />
                                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
                                            <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                                                <div className="file-thumbnail me-2"><img className="h-100 w-100 fit-cover rounded-3" src="assets/img/products/60x60/3.png" alt="" /></div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                                                </div>
                                            </a>
                                                <a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="file-thumbnail me-2"><img className="img-fluid" src="assets/img/products/60x60/3.png" alt="" /></div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
                                                        <p className="fs-10 mb-0 d-flex text-body-tertiary"><span className="fw-medium text-body-tertiary text-opactity-85 ms-2">30 Sep at 12:30 PM</span></p>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr className="my-0" />
                                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
                                            <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                                                </div>
                                            </a>
                                                <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="d-flex align-items-center">
                                                        <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr className="my-0" />
                                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
                                            <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"><span className="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                                                </div>
                                            </a>
                                                <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="d-flex align-items-center">
                                                        <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                                                    </div>
                                                </a>
                                                <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="d-flex align-items-center">
                                                        <div className="fw-normal text-body-highlight title"> <span className="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr className="my-0" />
                                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Members</h6>
                                            <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                                                <div className="avatar avatar-l status-online  me-2 text-body">
                                                    <img className="rounded-circle " src="assets/img/team/40x40/10.webp" alt="" />
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">Carry Anna</h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
                                                </div>
                                            </a>
                                                <a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                                                    <div className="avatar avatar-l  me-2 text-body">
                                                        <img className="rounded-circle " src="assets/img/team/40x40/12.webp" alt="" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h6 className="mb-0 text-body-highlight title">John Smith</h6>
                                                        <p className="fs-10 mb-0 d-flex text-body-tertiary">smith@technext.it</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <hr className="my-0" />
                                            <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Related Searches</h6>
                                            <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title"><span className="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                                                </div>
                                            </a>
                                                <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                                                    <div className="d-flex align-items-center">
                                                        <div className="fw-normal text-body-highlight title"> <span className="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="fallback fw-bold fs-7 d-none">No Result Found.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Header
