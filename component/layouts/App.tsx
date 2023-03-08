import React, {FC, ReactNode} from 'react';
import {useRouter} from "next/router";
import { Admin } from '../templates/admin';

const App: FC<{ children: ReactNode }> = ({children}) => {
    const {asPath} = useRouter();
    if (asPath.indexOf("admin") !== -1 && asPath.indexOf("login") == -1) {
        return (
            <div className="wrapper dashboard-wrapper">
                <div className="d-flex flex-wrap flex-xl-nowrap">
                    <Admin.Sidebar/>
                    <div className="page-content">
                        <Admin.Header />
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    if (asPath.indexOf("login") == -1) {
        return <>{children}</>;
    }

    return (
        <div>
            {children}
        </div>
    )

};

export default App;