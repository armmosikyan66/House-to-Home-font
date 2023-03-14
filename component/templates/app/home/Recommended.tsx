import React, {FC, useEffect, useRef, useState} from 'react';
import capitalize from "../../../../utils/helpers/capitalize";
import Slider from "../../../ui/Slider";
import {getRecommended} from "../../../../services/products";
import {IProduct} from "../../../../utils/types/IProduct";

export type RecommendedProps = {
    title: string;
    status: "rent" | "sale";
}

const Recommended: FC<RecommendedProps> = ({status, title}) => {
    const [items, setItems] = useState<IProduct[]>([]);
    const mounted = useRef<boolean>(false)

    useEffect(() => {
        (async ()  => {
            if (!mounted.current) {
                mounted.current = true;
                const prd = await getRecommended(status, "en")

                setItems(prd);
            }
        })()
    }, [])

    return (
        <section className="pt-lg-12 pb-lg-10 py-11" data-animated-id="2">
            <div className="container container-xxl">
                <div className="row mb-6">
                    <div className="col-md-6">
                        <h2 className="text-heading">{capitalize(title)}</h2>
                        <span className="heading-divider"></span>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <a href="listing-grid-with-left-filter.html"
                           className="btn fs-14 text-secondary btn-accent py-3 lh-15 px-7 mb-6 mb-lg-0">See all
                            properties
                            <i className="far fa-long-arrow-right ml-1"></i>
                        </a>
                    </div>
                </div>
                <Slider items={items}/>
            </div>
        </section>
    );
};

export default Recommended;