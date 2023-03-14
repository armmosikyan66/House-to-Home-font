import React from 'react';
import House from "../../../../assets/images/sofa.png";
import Apartment from "../../../../assets/images/architecture-and-city.png";
import Villa from "../../../../assets/images/eco-house.png";
import Building from "../../../../assets/images/verified.png";
import Link from "next/link";

const content = [
    {title: "House", image: House.src},
    {title: "Apartment", image: Apartment.src},
    {title: "Office", image: Building.src},
    {title: "Land", image: Villa.src},
]

const PropertyTypes = () => {
    return (
        <section data-animated-id="3">
            <div className="bg-gray-02 py-lg-13 pt-11 pb-6">
                <div className="container container-xxl">
                    <div className="row">
                        <div className="col-lg-4 pr-xl-13 fadeInLeft animated" data-animate="fadeInLeft">
                            <h2 className="text-heading lh-1625">Explore <br/>
                                by Property Type</h2>
                            <span className="heading-divider"></span>
                            <p className="mb-6">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse
                                suscipit</p>
                            <a href="listing-grid-with-left-filter.html"
                               className="btn btn-lg text-secondary btn-accent">+2300 Available Properties
                                <i className="far fa-long-arrow-right ml-1"></i>
                            </a>
                        </div>
                        <div className="col-lg-8 fadeInRight animated" data-animate="fadeInRight">
                            <div className="slick-slider arrow-haft-inner custom-arrow-xxl-hide mx-0 slick-initialized">
                                <div className="row row-cols-1 row-cols-md-4 row-cols-1 row-cols-sm-2">
                                    {content.map((elem) => (
                                        <div key={elem.title}
                                             className="box px-0 py-6 slick-slide slick-current slick-active">
                                            <Link href="/"
                                                  className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none"
                                            >
                                                <img style={{width: "auto"}} src={elem.image} className="card-img-top" alt="House"/>
                                                <div className="card-body px-0 pt-5 pb-0">
                                                    <h4 className="card-title fs-16 lh-2 text-dark mb-0">{elem.title}</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyTypes;