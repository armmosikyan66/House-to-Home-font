import {FC, ReactNode} from 'react';
import {useRouter} from "next/router";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

const AppLayout: FC<{children: ReactNode}> = ({children}) => {
    const router = useRouter();

    if (router.asPath.includes("admin")) {
        return (
            <>
                <div className="wrapper dashboard-wrapper">
                    <div className="d-flex flex-wrap flex-xl-nowrap">
                        <AdminSidebar/>
                        <div className="page-content">
                            <AdminHeader/>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {children}
        </>
    );
};

export default AppLayout;
