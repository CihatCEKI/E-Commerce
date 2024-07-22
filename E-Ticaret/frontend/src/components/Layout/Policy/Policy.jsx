import "./Policy.css";

export const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-texts">
              <strong>Ücretsiz Kargo</strong>
              
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-texts">
              <strong>7/24 Anlık Whats-App Desteği</strong>
              
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-texts">
              <strong>İade Kolaylığı</strong>
              <span>Ürününüzü 30 Gün İçinde Koluşsuz Geri alıyoruz.</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-texts">
              <strong>Kapıda Ödeme Seçeneği ile </strong>
              <span>3D Ödeme Aktif</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
