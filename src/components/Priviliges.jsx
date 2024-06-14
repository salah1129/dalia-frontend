import React from 'react';
import { FaBeer, FaDollarSign, FaShippingFast, FaCreditCard } from 'react-icons/fa';

const Priviliges = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      padding: '30px 0'
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: '#f5f5f5',
      padding: '10px',
      borderRadius: '5px',
      // eslint-disable-next-line no-dupe-keys
      padding: "30px"
    },
    icon: {
      fontSize: '24px',
      color: 'blue'
    },
    text: {
      fontSize: '18px',
      color: '#333'
    },
    subText: {
      fontSize: '14px',
      color: '#666'
    }
  };

  return (
    <div style={styles.container} data-aos="fade-up">
      <div style={styles.item}>
        <FaBeer style={styles.icon} />
        <div>
          <div style={styles.text}>Pieces neuves</div>
          <div style={styles.subText}>Homologuées Et Certifiées</div>
        </div>
      </div>
      <div style={styles.item}>
        <FaDollarSign style={styles.icon} />
        <div>
          <div style={styles.text}>Des prix compétitifs</div>
          <div style={styles.subText}>Les Meilleurs Tarifs</div>
        </div>
      </div>
      <div style={styles.item}>
        <FaShippingFast style={styles.icon} />
        <div>
          <div style={styles.text}>Livraison express</div>
          <div style={styles.subText}>Recevez Votre Commande En 48/72h</div>
        </div>
      </div>
      <div style={styles.item}>
        <FaCreditCard style={styles.icon} />
        <div>
          <div style={styles.text}>Paiements échelonnés</div>
          <div style={styles.subText}>Flexibilité De Paiement</div>
        </div>
      </div>
    </div>
  );
}

export default Priviliges;
