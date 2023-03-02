import React, {FC, ReactNode} from 'react';
import {useRouter} from "next/router";
import { Admin } from '../templates/admin';

const App: FC<{ children: ReactNode }> = ({children}) => {
    const {asPath} = useRouter();
    if (asPath.indexOf("admin") !== -1) {
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

    return (
        <div>

        </div>
    );
};

export default App;