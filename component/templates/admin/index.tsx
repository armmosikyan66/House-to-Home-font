import Steps from "./steps/Steps";
import AdminHeader from "./Header";
import AdminSidebar from "./Sidebar";
import AdminModal, {AdminModalProps} from "../../ui/AdminModal";

export namespace Admin {
    export const NewProductSteps = () => {
        return <Steps/>
    }
    export const Header = () => {
        return <AdminHeader/>
    }
    export const Sidebar = () => {
        return <AdminSidebar/>
    }
    export const Modal = (props: AdminModalProps) => {
        return <AdminModal {...props}/>
    }
}