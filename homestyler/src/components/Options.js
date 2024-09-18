import '../css/Furniture.css';
import { Link } from 'react-router-dom';
function Options(){
    return(
        <div>
            <h1>Modern Furniture</h1>
            <div className="container-menu">
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Living Room Furniture</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Dining & Kitchen Furniture</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Bedroom Furniture</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Storage & Media Furniture</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Office Furniture</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Outdoor Furniture</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Entryway Furniture</p>
                </Link>
                </div>
                <div className="menu-item">
                <Link>
                <img src="https://tse3.mm.bing.net/th?id=OIP.fCDnfamOf746DrTZMDujrgHaJq&pid=Api&P=0&h=220" alt="Example"  />
                <p>Best Sellers</p>
                </Link>
                </div>
       
            </div>
        </div>
    )
}
export default Options;