import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">Sezon Fırsatı</p>
        <h2 className="slider-heading">Tüm Ürünlerde Geçerli Kısa Süreli %20 İndirim</h2>
        <a href="#" className="btn btn-lg btn-primary">
          Kampanya Datayları
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};