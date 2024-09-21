import '../css/Furniture.css';
import { Link } from 'react-router-dom';
function Options(){
    return(
        <div>
            <h1 className='h1-option'>Modern Furniture</h1>
            <div className="container-menu">
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Sofas_Filter/$categoryBorder$/240919085308/071124_ViewAll_LivingRoom_Sofas_Filter.jpg" alt="Example"  />
                <p>LIVING ROOM FURNITURE</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/071124_DiningRoom_DiningTables_Filter/$categoryBorder$/240919085359/071124_DiningRoom_DiningTables_Filter.jpg" alt="Example"  />
                <p>DINING & KITCHEN FURNITURE</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/071124_Bedroom_Beds_Filter/$categoryBorder$/240919085621/071124_Bedroom_Beds_Filter.jpg" alt="Example"  />
                <p>BEDROOM FURNITURE</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_mediaconsoles/$categoryBorder$/240919085426/ViewAll_Filter_Furniture_mediaconsoles.jpg" alt="Example"  />
                <p>STORAGE & MEDIA FURNITURE</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_officechairs/$categoryBorder$/240919084559/ViewAll_Filter_Furniture_officechairs.jpg" alt="Example"  />
                <p>OFFICE FURNITURE</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/ViewAll_Filter_Furniture_outdoorlounge/$categoryBorder$/240919122106/ViewAll_Filter_Furniture_outdoorlounge.jpg" alt="Example"  />
                <p>OUTDOOR FURNITURE</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/CB2SP22_05B?$web_pdp_main_carousel_med$" alt="Example"  />
                <p>ENTRYWAY FURNITURE</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link to="/viewoption">
                <img src="https://cb2.scene7.com/is/image/CB2/CB2FA23_AM_22A_V3?$web_pdp_main_carousel_med$" alt="Example"  />
                <p>BEST SELLERS</p>
                </Link>
                </div>
       
            </div>
        </div>
    )
}
export default Options;