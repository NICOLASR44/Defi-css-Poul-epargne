import "./CreditCard.css";

export default function CreditCard() {
  return (
    <div id="cardContainer">
      <div className="card-header">
        <span className="PouletDesign">
          <img src="src/assets/Pouletvolant.png" alt="LogoPouletVolant" />
        </span>
        <img src="src/assets/poul'epargne.png" alt="Poul' Epargne Logo" className="logo" />
        <span className="bank-name">
          POUL' <br />
          EPARGNE
        </span>
      </div>

      <div className="chip-and-contactless">
        <div className="contactless-icon">
          <img src="src/assets/sanscontact.png" alt="SansContactLogo" />
        </div>
        <div className="chip">
          {" "}
          <img src="src/assets/puce.png" alt="ChipLogo" />
        </div>
      </div>
      <div className="card-number">
        <span className="NumberCard">1843 9236 0046 8346</span>
      </div>
      <div className="card-info">
        <div className="Typecard">
          <span>CARTE DE CREDIT DEBIT</span>
        </div>
        <div className="Expiration">
          <span className="Expire">
            EXPIRE <br />A FIN
          </span>
          <span className="ExpirationDate">07/28</span>
        </div>
      </div>
      <div className="visa-logo">
        <img src="src/assets/visa.png" alt="Visa Logo" />
      </div>
      <div className="card-holder">MME GALINA C. NUGGETS</div>
      <div className="Triangle-icon">
        <img src="src/assets/insert.png" alt="" />
      </div>
    </div>
  );
}
