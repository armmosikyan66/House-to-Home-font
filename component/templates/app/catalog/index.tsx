import Filter from "./Filter";
import ContentComp, {ContentProps} from "./Content";

export namespace Catalog {
    export const FilterBy = () => {
        return <Filter/>
    }
    export const Content = (props: ContentProps) => {
        return <ContentComp {...props}/>
    }
}