import React from 'react';
import '../css/DesignerCollective.css';
import { useNavigate } from 'react-router-dom';
import CarouselProduct from './CarouselProduct';

const DesignerCollective = ({ daybeds }) => {
  const navigate = useNavigate();

  const handleNavigate = (designerId) => {
    navigate(`/profile-designer/${designerId}`);
  };

  return (
    <div>
      <div className="designer-collective">
        <div className="header-section">
          <h1>THE DESIGNER COLLECTIVE</h1>
          <p>
            A handpicked roster of independent studios and artists who design our collections. 
            Meet the international talent that is our Designer Collective. Exclusively at CB2.
          </p>
        </div>

        <div className="designer-grid">
          <div className="designer-card" onClick={() => handleNavigate('aguirre')}>
            <img src="https://cb2.scene7.com/is/image/CB2/080824_AguirreDesign_PLP_re?wid=1920&qlt=75" alt="Mauricio, David & Mateo Aguirre" />
            <h3>MAURICIO, DAVID & MATEO AGUIRRE</h3>
            <p>AGUIRRE DESIGN - NEW YORK, NEW YORK</p>
            <p>
              A revered modern Design House known for extraordinary luxury pieces previously sold only in niche boutiques and to high-end clients.
            </p>
            <p style={{ textDecoration: 'underline' }}>SHOP AGUIRRE DESIGN</p>
          </div>

          <div className="designer-card" onClick={() => handleNavigate('sit')}>
            <img src="https://cb2.scene7.com/is/image/CB2/080824_FarrahSit_PLP_re?wid=1920&qlt=75" alt="Farrah Sit" />
            <h3>FARRAH SIT</h3>
            <p>DESIGNER - NEW YORK, NEW YORK</p>
            <p>
              A boutique industrial designer with a singular ability to balance statement and simplicity.
            </p>
            <p style={{ textDecoration: 'underline' }}>SHOP FARRAH SIT</p>
          </div>

          <div className="designer-card" onClick={() => handleNavigate('zipperer')}>
            <img src="https://cb2.scene7.com/is/image/CB2/080824_CalebZipperer_PLP_re?wid=1920&qlt=75" alt="Caleb Zipperer" />
            <h3>CALEB ZIPPERER</h3>
            <p>ZIPPERER STUDIO - SAVANNAH, GEORGIA</p>
            <p>
              His elegant, figurative style is a favorite amongst interior designers.
            </p>
            <p style={{ textDecoration: 'underline' }}>SHOP CALEB ZIPPERER</p>
          </div>

          <div className="quote-card">
            <p>
              “I think things all need to work together. It's trying to balance a sort of loudness with a quietness to give you something that's memorable, but not over the top.”
            </p>
            <p>- ROSS CASSIDY</p>
          </div>

          <div className="designer-card" onClick={() => handleNavigate('cassidy')}>
            <img src="https://cb2.scene7.com/is/image/CB2/080824_RossCassidy_PLP_re?wid=1920&qlt=75" alt="Ross Cassidy" />
            <h3>ROSS CASSIDY</h3>
            <p>INTERIOR & FURNITURE DESIGNER - LOS ANGELES, CALIFORNIA</p>
            <p>
              With a roster of celebrity clients and Architectural Digest features, Ross Cassidy brings his effortless originality to CB2.
            </p>
            <p style={{ textDecoration: 'underline' }}>SHOP ROSS CASSIDY</p>
          </div>
        </div>
      </div>
      <CarouselProduct daybeds={daybeds} />
    </div>
  );
};

export default DesignerCollective;
