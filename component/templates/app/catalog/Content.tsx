import React, {FC, Fragment, useEffect, useState} from 'react';
import ProductCard from "../../../ui/ProductCard";
import {IProduct} from "../../../../utils/types/IProduct";
import ProductCardLg from '../../../ui/ProductCardLg';
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/router";

export type ContentProps = {
    items: IProduct[];
    count: number;
    founded: number;
}

const Content: FC<ContentProps> = ({items, count, founded}) => {
    const [page, setPage] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        if ("page" in router.query) {
            setPage(Number(router.query.page) - 1)
        }
    }, [router.isReady])

    const handlePageClick = (event: { selected: number }) => {
        setPage(event.selected);

        router.query.page = String(event.selected + 1);
        router.push(router)

    };

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
            <ReactPaginate
                pageClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                previousClassName={"page-item"}
                pageLinkClassName={"page-link"}
                activeClassName={"active"}
                breakLabel="..."
                nextLabel={<i className="far fa-angle-double-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(founded / 10)}
                previousLabel={<i className="far fa-angle-double-left"></i>}
                containerClassName="pagination rounded-active justify-content-center mb-0 pt-6"
                hrefBuilder={() => "#"}
                forcePage={page}
            />
        </>
    );
};

export default Content;