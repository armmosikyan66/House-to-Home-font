 // @ts-nocheck 
import React, {useEffect, useState, MouseEvent, FormEvent} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {IUser} from "../../utils/types/IUser";
import {deleteUser, getUsers} from "../../services/admin";
import capitalize from "../../utils/helpers/capitalize";
import dateFormatter from "../../utils/helpers/dateFormatter";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {useRouter} from "next/router";
import Link from "next/link";
import UserModal from "../../component/templates/admin/UserModal";
import ReactPaginate from "react-paginate";
import {useTypedSelector} from "../../redux/types/IRedux";
import FormInput from "../../component/ui/FormInput";
import {decodeParams, encodeQueryString} from "../../utils/helpers/queryString";

type UsersTypes = {
    users: IUser[] | [],
    founded: number
}

const Users: NextPage<{}> = () => {
    const router = useRouter();
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const {t} = useTranslation();
    const user = useTypedSelector(state => state.auth.user);
    const [items, setItems] = useState<UsersTypes>({
        users: [],
        founded: 0,
    });
    const [searchTerm, setSearchTerm] = useState({});
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        if (!router.isReady) return;

        if (user?.role !== "admin") {
            router.push('/')
        } else if ("page" in router.query) {
            setPage(Number(router.query.page) - 1)
        }
    }, [router.isReady])

    useEffect(() => {
        (async () => {
            if (!router.isReady) return;
            const {page, ...options} = decodeParams(router.asPath.replace(router.route, ""));

            const data = await getUsers(Number(page || 1), options);

            setItems(data)
        })();
    }, [router.query])

    const handlePageClick = (event: { selected: number }) => {
        setPage(event.selected);

        router.query.page = String(event.selected + 1);
        router.push(router);
    };
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const queryString = encodeQueryString<any>(searchTerm);
        router.push(router.pathname + queryString)
    }

    const handleChange = (key: string, val: string | number): void => {
        setSearchTerm({[key]: val})
    }

    const handleClose = (): void => {
        setSelectedUser(null);
    }

    const handleDelete = async (event: MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault();
        await deleteUser(id);
    }

    useEffect(() => {
        (async () => {
            const {users, founded} = await getUsers(Number(page + 1));

            setItems({users, founded});
        })()
    }, [page, selectedUser])

    return (
        <>
            <main id="content" className="bg-gray-01 pt-xl-0 pt-12">
                <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 invoice-listing" data-animated-id={1}>
                    <div className="mb-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 d-flex justify-content-md-start justify-content-center">
                                <div className="align-self-center">
                                    <button onClick={() => router.push("/admin/new-user")}
                                            className="btn btn-primary btn-lg" aria-controls="invoice-list">
                                        <span>{t("admin.users.btnText")}</span></button>
                                </div>
                            </div>
                            <div
                                className="col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0 mt-3">
                                <div className="input-group input-group-lg bg-white mb-0 position-relative mr-2">
                                    <form onSubmit={handleSubmit} style={{width: "100%"}}>
                                        <FormInput onChange={handleChange} placeholder="Search..."
                                                   className="form-control bg-transparent border-1x h-100" type="text"
                                                   keyWord="u" divClassName="h-100"/>
                                        <div className="input-group-append position-absolute pos-fixed-right-center">
                                            <button className="btn bg-transparent border-0 text-gray lh-1"
                                                    type="submit"><i
                                                className="fal fa-search"></i></button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <div id="invoice-list_wrapper" className="dataTables_wrapper no-footer">
                            <table id="invoice-list"
                                   className="table table-hover bg-white border rounded-lg dataTable no-footer"
                                   role="grid">
                                <thead>
                                <tr role="row">
                                    <th className="py-6 sorting pl-6" aria-controls="invoice-list" rowSpan={1}
                                        colSpan={1}
                                        aria-label="Name: activate to sort column ascending">{t("admin.users.name")}
                                    </th>
                                    <th className="py-6 sorting" aria-controls="invoice-list" rowSpan={1}
                                        colSpan={1} aria-label="Email: activate to sort column ascending"
                                    >{t("admin.users.email")}
                                    </th>
                                    <th className="py-6 sorting" aria-controls="invoice-list" rowSpan={1}
                                        colSpan={1} aria-label="Email: activate to sort column ascending"
                                    >{t("admin.users.phone")}
                                    </th>
                                    <th className="py-6 sorting" aria-controls="invoice-list" rowSpan={1}
                                        colSpan={1}
                                        aria-label="Date: activate to sort column ascending">{t("admin.users.date")}
                                    </th>
                                    <th className="py-6 sorting" aria-controls="invoice-list" rowSpan={1}
                                        colSpan={1}
                                        aria-label="Status: activate to sort column ascending">{t("admin.users.status")}
                                    </th>
                                    <th className="no-sort py-6 sorting_disabled" rowSpan={1} colSpan={1}
                                        aria-label="Actions">{t("admin.users.actions")}
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {items.users.length ? items.users.map((user, index) => (
                                    <tr key={user.firstName + index} role="row" className="odd">
                                        <td className="align-middle pl-6">
                                            <div className="d-flex align-items-center">
                                                <p className="align-self-center mb-0 user-name">{capitalize(`${user.firstName} ${user.lastName}`)}</p>
                                            </div>
                                        </td>
                                        <td className="align-middle"><span className="text-primary pr-1"><i
                                            className="fal fa-envelope"></i></span>{user.email}
                                        </td>
                                        <td className="align-middle"><span className="text-primary pr-1"><i
                                            className="fal fa-phone"></i></span>{user.phoneNumber}
                                        </td>
                                        <td className="align-middle"><span className="text-success pr-1"><i
                                            className="fal fa-calendar"></i></span>{dateFormatter(user.createdAt, lang)}
                                        </td>
                                        <td className="align-middle"><span
                                            className={`badge badge-${user.role === "admin" ? "yellow" : user.role === "locale" ? "blue" : "green"} text-capitalize`}>{user.role}</span>
                                        </td>
                                        <td className="align-middle">
                                            <Link onClick={() => setSelectedUser(user)} href="#" data-toggle="tooltip"
                                                  title=""
                                                  className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                                  data-original-title="Edit"><i
                                                className="fal fa-pencil-alt"></i></Link>
                                            <a onClick={(event) => handleDelete(event, user.id)} href="#"
                                               data-toggle="tooltip" title=""
                                               className="d-inline-block fs-18 text-muted hover-primary"
                                               data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                )) : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-6">
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
                            pageCount={Math.ceil(items.founded / 10)}
                            previousLabel={<i className="far fa-angle-double-left"></i>}
                            containerClassName="pagination rounded-active justify-content-center mb-0 pt-6"
                            hrefBuilder={() => "#"}
                            forcePage={page}
                        />
                    </div>
                </div>
            </main>
            <UserModal handleClose={handleClose} open={Boolean(selectedUser && Object.keys(selectedUser).length)}
                       selected={selectedUser}/>
        </>
    );
};

 export const getServerSideProps: GetServerSideProps = async ({ locale , req, res}) => {
     const token = req.cookies.token;

     if(token) {
         const decodedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf8'));

         if (decodedToken?.role !== "admin") {
             return {
                 redirect: {
                     permanent: false,
                     destination: '/'
                 }
             }
         }
     }

     return {
         props: {
             ...(await serverSideTranslations(locale ?? "am", ['common'])),
         },
     }
 }

export default Users;
