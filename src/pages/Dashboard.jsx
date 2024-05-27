import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import * as icon from 'react-bootstrap-icons';
import OrderStatistics from '../components/dashboard/OrderStatistics';
import SalesStatistics from '../components/dashboard/SalesStatistics';
import TopSellingProduct from '../components/dashboard/TopSellingProduct';
import RecentOrders from '../components/dashboard/RecentOrders';
import MostViewedProduct from '../components/dashboard/MostViewedProduct';
import BestSellingProduct from '../components/dashboard/BestSellingProduct';
import ProductStatistics from '../components/dashboard/ProductStatistics';
import ProfitableProducts from '../components/dashboard/ProfitableProducts';
import ProfitableCategories from '../components/dashboard/ProfitableCategories';
import CustomerRating from '../components/dashboard/CustomerRating';
import MostViewedProducts from '../components/dashboard/MostViewedProducts';


export default function Dashboard() {

    let totalSales = 500000;
    let totalOrders = 500;
    let totalProducts = 5000;
    let totalCustomers = 1000;

    return (
        <div className='dashboard'>
            <div className="dashboardTop">
                <div className="welcome">
                    <div className="right">
                        <span className='hi'>Hi </span>
                        <span className='name'>faith, solar lamp shop.</span>
                        <p>Here is what's going on in your business.</p>
                    </div>
                    <div className="left">
                        <button className='btn1'>
                            <span>create a new</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="dashboardBottom">
                <button className="btn1">
                    <icon.Funnel />
                    <span>Filter</span>
                </button>
                <button className='btn2'>
                    <icon.Download />
                    <span>Download report</span>
                </button>
            </div>

            <main>

                <div className="dashboardCards">
                    <div className="card">
                        <div className="cardTop">
                            <p>Total Sales</p>
                            <icon.GraphUpArrow className='icon' />
                        </div>
                        <div className="cardBottom">
                            <h2>${totalSales}</h2>
                            <div className="icon">
                                <icon.Cart2 />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTop">
                            <p>Total Orders</p>
                            <icon.GraphUpArrow className='icon' />
                        </div>
                        <div className="cardBottom">
                            <h2><h2>{totalOrders}</h2></h2>
                            <div className="icon">
                                <icon.Handbag />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTop">
                            <p>Total Products</p>
                            <icon.GraphDownArrow className='icon neg' />
                        </div>
                        <div className="cardBottom">
                            <h2>{totalProducts}</h2>
                            <div className="icon">
                                <icon.ShopWindow />
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTop">
                            <p>Total Customers</p>
                            <icon.GraphUpArrow className='icon' />
                        </div>
                        <div className="cardBottom">
                            <h2>{totalCustomers}</h2>
                            <div className="icon">
                                <icon.People />
                            </div>
                        </div>
                    </div>


                    <div className="lineChart card">
                        <SalesStatistics />
                    </div>
                    <div className="doughChart card">
                        <OrderStatistics />
                    </div>
                    <div className="table card">
                        <TopSellingProduct />
                    </div>
                    <div className="table card">
                        <RecentOrders />
                    </div>
                    <div className="card mostViewedProd">
                        <MostViewedProduct />
                    </div>
                    <div className="card bestProd">
                        <BestSellingProduct />
                    </div>
                    <div className="card prodStats">
                        <ProductStatistics />
                    </div>
                    <div className="card smallTable">
                        <ProfitableProducts />
                    </div>
                    <div className="card rating">
                        <CustomerRating />
                    </div>
                    <div className="card topViewed">
                        <MostViewedProducts />
                    </div>
                    <div className="card smallTable">
                        <ProfitableCategories />
                    </div>
                </div>
            </main>
        </div>
    )
}
