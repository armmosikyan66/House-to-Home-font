import React, {FC, Fragment, useEffect, useState} from 'react';
import ProductCard from "../../../ui/ProductCard";
import {IProduct} from "../../../../utils/types/IProduct";
import ProductCardLg from '../../../ui/ProductCardLg';
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import Toastify from "../../../ui/Toastify";
import ShareModal from "../../../ui/ShareModal";

export type ContentProps = {
    items: IProduct[];
    count: number;
    founded: number;
}

const Content: FC<ContentProps> = ({items, count, founded}) => {
    const [page, setPage] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);
    const [data, setData] = useState<number | null>(null);
    const [toastify, setToastify] = useState<{ status: "danger" | "info" | "success"; message: string }>({
        status: "info",
        message: ""
    })
    const router = useRouter();
    const {t} = useTranslation("common");

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

    function handleData(data: number) {
        setData(data)
    }
    function handleToastifyData(status: "success" | "info" | "danger", message: string) {
        setToastify({status: status, message: message})
    }

    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message} /> : null}
            <div className="row">
                {items ? items.map((item) => (
                    <Fragment key={item.id}>
                        {count === 2 ? (
                            <div className="col-md-6 mb-6">
                                <ProductCard onToastify={handleToastifyData} onData={handleData} setModal={setModal} {...item}/>
                            </div>
                        ) : (
                            <ProductCardLg onToastify={handleToastifyData} onData={handleData} setModal={setModal} {...item} />
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
            {modal ? <ShareModal propertyId={data} setModal={setModal} /> : null}
        </>
    );
};

export default Content;