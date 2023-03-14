import Filter from "./Filter";
import ContentComp, {ContentProps} from "./Content";

export namespace Catalog {
    export const FilterBy = () => {
        return <Filter/>
    }
    export const Content = ({items, count}: ContentProps) => {
        return <ContentComp count={count} items={items}/>
    }
}