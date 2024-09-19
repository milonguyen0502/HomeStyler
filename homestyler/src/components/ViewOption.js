import SelectCategory from "./selectCategory";
import SleeperAndDaybeds from "./SleeperAndDaybeds";
import SofaCollections from "./SofaCollections";
function ViewOption({daybeds, collections}){
    return(
        <div>
            <SelectCategory daybeds={daybeds}/>
            <SofaCollections collections={collections}/>
            <SleeperAndDaybeds daybeds={daybeds}/>
        </div>
    )
}
export default ViewOption;