import Chair from "./Chair";
import CoffeeTable from "./CoffeeTable";
import MostView from "./MostView";
import SelectCategory from "./selectCategory";
import SleeperAndDaybeds from "./SleeperAndDaybeds";
import SofaCollections from "./SofaCollections";
import Sessional from "./Sessional";
import Mirror from "./Mirror";
import Desk from "./Desk";
import Fmirror from "./FloorMirror";
import CarouselProduct from "./CarouselProduct";


function ViewOption({daybeds, collections, chair, table, sessional, mirror, desk, fmirror}){
    return(
        <div>
            <SelectCategory daybeds={daybeds} collections={collections} chair={chair} table={table} sessional={sessional} mirror={mirror} desk={desk} fmirror={fmirror}/>
            <SofaCollections collections={collections}/>
            <SleeperAndDaybeds daybeds={daybeds}/>
            <Chair chair={chair}/>
            <CoffeeTable table={table}/>
            <Sessional sessional={sessional}/>
            <Mirror mirror={mirror}/>
            <Desk desk={desk}/>
            <Fmirror fmirror={fmirror}/>
            <CarouselProduct daybeds={daybeds}/>
        </div>
    )
}
export default ViewOption;