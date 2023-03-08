import React, {useEffect, useState, MouseEvent} from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {IProduct} from "../../utils/types/IProduct";
import {deletePrd, getAdminPrd} from "../../services/admin";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import dateFormatter from "../../utils/helpers/dateFormatter";
import capitalize from "../../utils/helpers/capitalize";
import {API_URL} from "../../utils/constants/api";
import Link from "next/link";
import ProductModal from "../../component/templates/admin/ProductModal";

type AdminProduct = {
    products: IProduct[];
    founded: number;
}

const Dashboard: NextPage<{}> = () => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [items, setItems] = useState<AdminProduct>({
        products: [],
        founded: 0,
    });
    const [selected, setSelected] = useState<IProduct | null>(null);

    const getData = async (): Promise<void> => {
        const {products, founded} = await getAdminPrd(1);

        setItems({
            products,
            founded
        })
    }

    const handleSelectPrd = (event: MouseEvent<HTMLAnchorElement>, item: IProduct): void => {
        event.preventDefault();
        document.body.style.overflow = "hidden";
        setSelected(item)
    };

    const handleDelete = async (event: MouseEvent<HTMLAnchorElement>, prdId: number, imageUrl: string): Promise<void> => {
        event.preventDefault();
        const dirId = imageUrl.replace("/uploads/", "").split("/")[0];
        const deleted = await deletePrd(dirId, prdId);

        if (deleted) return;
    };

    useEffect(() => {
        (async () =>{
            await getData();
        })();
    }, [selected]);

    return (
        <>
            <main id="content" className="bg-gray-01">
                <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10" data-animated-id="1">
                    <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                        <div className="mr-0 mr-md-auto">
                            <h2 className="mb-0 text-heading fs-22 lh-15">My Properties<span
                                className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">{items.founded}</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                        </div>
                        <div className="form-inline justify-content-md-end mx-n2">
                            <div className="p-2">
                                <div className="input-group input-group-lg bg-white border">
                                    <div className="input-group-prepend">
                                        <button className="btn pr-0 shadow-none" type="button"><i
                                            className="far fa-search"></i></button>
                                    </div>
                                    <input type="text"
                                           className="form-control bg-transparent border-0 shadow-none text-body"
                                           placeholder="Search listing" name="search"/>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="input-group input-group-lg bg-white border">
                                    <div className="input-group-prepend">
                                    <span
                                        className="input-group-text bg-transparent letter-spacing-093 border-0 pr-0"><i
                                        className="far fa-align-left mr-2"></i>Sort by:</span>
                                    </div>
                                    <div
                                        className="dropdown bootstrap-select form-control bg-transparent pl-0 d-flex align-items-center sortby">
                                        <select
                                            className="form-control bg-transparent pl-0 selectpicker d-flex align-items-center sortby"
                                            name="sort-by"
                                            data-style="bg-transparent px-1 py-0 lh-1 font-weight-600 text-body"
                                            id="status">
                                            <option>Alphabet</option>
                                            <option>Price - Low to High</option>
                                            <option>Price - High to Low</option>
                                            <option>Date - Old to New</option>
                                            <option>Date - New to Old</option>
                                        </select>
                                        <button type="button"
                                                className="btn dropdown-toggle bg-transparent px-1 py-0 lh-1 font-weight-600 text-body"
                                                data-toggle="dropdown" role="combobox" aria-owns="bs-select-1"
                                                aria-haspopup="listbox" aria-expanded="false" data-id="status"
                                                title="Alphabet">
                                            <div className="filter-option">
                                                <div className="filter-option-inner">
                                                    <div className="filter-option-inner-inner">Alphabet</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="dropdown-menu ">
                                            <div className="inner show" role="listbox" id="bs-select-1">
                                                <ul className="dropdown-menu inner show" role="presentation"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover bg-white border rounded-lg">
                            <thead className="thead-sm thead-black">
                            <tr>
                                <th scope="col" className="border-top-0 px-6 pt-5 pb-4">Listing title</th>
                                <th scope="col" className="border-top-0 pt-5 pb-4">Date Published</th>
                                <th scope="col" className="border-top-0 pt-5 pb-4">Author</th>
                                <th scope="col" className="border-top-0 pt-5 pb-4">Status</th>
                                <th scope="col" className="border-top-0 pt-5 pb-4">View</th>
                                <th scope="col" className="border-top-0 pt-5 pb-4">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.products.length ? items.products.map(prd => (
                                <tr key={prd.prdId} className="shadow-hover-xs-2 bg-hover-white">
                                    <td className="align-middle pt-6 pb-4 px-6">
                                        <div className="media">
                                            <div className="w-120px mr-4 position-relative">
                                                <a href="single-property-1.html">
                                                    <img width={120} src={`${API_URL}${prd.imageUrl[0]}`} alt="Home in Metric Way"/>
                                                </a>
                                                <span
                                                    className={`badge badge-${prd.status.en === "rent" ? 'primary': 'indigo'} position-absolute pos-fixed-top`}>{capitalize(`${prd.status[lang]}`)}</span>
                                            </div>
                                            <div className="media-body">
                                                <Link href="single-property-1.html" className="text-dark hover-primary">
                                                    <h5 className="fs-16 mb-0 lh-18">Home in Metric Way</h5>
                                                </Link>
                                                <p className="mb-1 font-weight-500">{capitalize(prd.city[lang])}, {capitalize(prd.region[lang])}</p>
                                                <span className="text-heading lh-15 font-weight-bold fs-17">${prd.price}</span>
                                                {prd.status.en === "rent" ? <span className="text-gray-light">/month</span> : null}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">{dateFormatter(prd.createdAt, lang)}</td>
                                    <td className="align-middle">{prd.author ? capitalize(prd.author) : null}</td>
                                    <td className="align-middle">
                                <span
                                    className={`badge text-capitalize font-weight-normal fs-12 badge-${!prd.public ? "pink" : "yellow"}`}>{JSON.stringify(prd.public)}</span>
                                    </td>
                                    <td className="align-middle">#{prd.prdId}</td>
                                    <td className="align-middle">
                                        <Link href={"#"} onClick={event => handleSelectPrd(event, prd)} locale={lang} data-toggle="tooltip" title=""
                                              className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                              data-original-title="Edit"><i className="fal fa-pencil-alt"></i></Link>
                                        <Link onClick={event => handleDelete(event, prd.prdId, prd.imageUrl[0])} href="#" data-toggle="tooltip" title=""
                                              className="d-inline-block fs-18 text-muted hover-primary"
                                              data-original-title="Delete"><i className="fal fa-trash-alt"></i></Link>
                                    </td>
                                </tr>
                            )): null}
                            </tbody>
                        </table>
                    </div>
                    <nav className="mt-6">
                        <ul className="pagination rounded-active justify-content-center">
                            <li className="page-item"><a className="page-link" href="#"><i
                                className="far fa-angle-double-left"></i></a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">...</li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item"><a className="page-link" href="#"><i
                                className="far fa-angle-double-right"></i></a></li>
                        </ul>
                    </nav>
                    <div className="text-center mt-2">6-10 of 29 Results</div>
                </div>
            </main>
            {selected && Object.keys(selected).length ? (
                <ProductModal setSelected={setSelected} {...selected} />
            ): null}
        </>
    );
};

export const getStaticProps: GetStaticProps<{}> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(
            locale ?? "am",
            ['common'],
            nextI18NextConfig
        )),
    },
})

export default Dashboard;