import React, {FC, Fragment} from 'react';
import ProductCard from "../../../ui/ProductCard";
import {IProduct} from "../../../../utils/types/IProduct";
import ProductCardLg from '../../../ui/ProductCardLg';

export type ContentProps = {
    items: IProduct[];
    count: number;
}

const Content: FC<ContentProps> = ({items, count}) => {
    return (
        <>
            <div className="row">
                {items ? items.map((item) => (
                    <Fragment key={item.id}>
                        {count === 2 ? (
                            <div className="col-md-6 mb-6">
                                <ProductCard {...item}/>
                            </div>
                        ) : (
                            <ProductCardLg {...item} />
                        )}
                    </Fragment>
                )) : null}
            </div>
            <nav className="pt-4">
                <ul className="pagination rounded-active justify-content-center mb-0">
                    <li className="page-item"><a className="page-link" href="pages/properties/properties#"><i
                        className="far fa-angle-double-left"></i></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="pages/properties/properties#">1</a></li>
                    <li className="page-item active"><a className="page-link" href="pages/properties/properties#">2</a></li>
                    <li className="page-item d-none d-sm-block"><a className="page-link" href="pages/properties/properties#">3</a></li>
                    <li className="page-item">...</li>
                    <li className="page-item"><a className="page-link" href="pages/properties/properties#">6</a></li>
                    <li className="page-item"><a className="page-link" href="pages/properties/properties#"><i
                        className="far fa-angle-double-right"></i></a></li>
                </ul>
            </nav>
        </>
    );
};

export default Content;