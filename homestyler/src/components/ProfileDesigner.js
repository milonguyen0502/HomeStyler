import React from 'react';
import '../css/ProfileDesigner.css';
import CarouselProduct from './CarouselProduct';
import SleeperAndDaybeds from './SleeperAndDaybeds';
import { useParams } from 'react-router-dom';
import SofaCollections from './SofaCollections';
import { useNavigate } from 'react-router-dom';
import Combo from './Combo';

const ProfileDesigner = ({ daybeds, collections, DesignerCollection }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const displayedProducts = daybeds.slice(0, 8);
  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
};
const handleSeeMore = () => {
    navigate('/all-products', { state: { products: daybeds, category: 'Sleepers & Daybeds' } });
};


  const designerImages = {
    aguirre: "https://cb2.scene7.com/is/image/CB2/080824_AguirreDesign_PLP_re?wid=1920&qlt=75",
    sit: "https://cb2.scene7.com/is/image/CB2/080824_FarrahSit_PLP_re?wid=1920&qlt=75",
    zipperer: "https://cb2.scene7.com/is/image/CB2/080824_CalebZipperer_PLP_re?wid=1920&qlt=75",
    cassidy: "https://cb2.scene7.com/is/image/CB2/080824_RossCassidy_PLP_re?wid=1920&qlt=75",
  };

  const contactInfo = {
    aguirre: [
      { label: "Phone", value: "+123 456 7890" },
      { label: "Email", value: "aguirre@example.com" },
      { label: "Website", value: "www.aguirredesign.com" },
      { label: "Instagram", value: "@aguirredesign" },
    ],
    sit: [
      { label: "Phone", value: "+234 567 8901" },
      { label: "Email", value: "sit@example.com" },
      { label: "Website", value: "www.farrahdesign.com" },
      { label: "Instagram", value: "@farrahdesign" },
    ],
    zipperer: [
      { label: "Phone", value: "+345 678 9012" },
      { label: "Email", value: "zipperer@example.com" },
      { label: "Website", value: "www.zippererstudio.com" },
      { label: "Instagram", value: "@zippererstudio" },
    ],
    cassidy: [
      { label: "Phone", value: "+456 789 0123" },
      { label: "Email", value: "cassidy@example.com" },
      { label: "Website", value: "www.rosscassidy.com" },
      { label: "Instagram", value: "@rosscassidy" },
    ],
  };

  return (
    <div>
      <div className='pro5-container'>
        <img src={designerImages[id]} alt={id} />
        <div className='pro5-content'>
          <h1>{id.toUpperCase()}</h1>
          <p>
          Effortless originality is the calling card of South-African born and LA-based interior and furniture designer Ross Cassidy. Whether it be covering an accent chair in humanely sourced Mongolian sheepskin or bringing a uniquely lived-in, indoor feel to an outdoor space, his mastery of understated luxury radiates throughout. A signature flair that feels at once  statement-making and at home in any space.
          </p>
          <div className="contact-info">
            <h2>Contact us</h2>
            {contactInfo[id].map((contact, index) => (
              <p key={index}>
                {contact.label}: <a href={contact.label === "Email" ? `mailto:${contact.value}` : contact.label === "Số điện thoại" ? `tel:${contact.value}` : `https://${contact.value}`} target="_blank" rel="noopener noreferrer">{contact.value}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
            <Combo DesignerCollection={DesignerCollection}/>
    </div>
  );
};

export default ProfileDesigner;
