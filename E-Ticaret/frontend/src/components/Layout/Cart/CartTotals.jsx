import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartProvider";

const CartTotals = () => {
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const { cartItems } = useContext(CartContext);
  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.price * item.quantity;

    return itemTotal;
  });

  const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const cargoFee = 50;

  const CartTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

  return (
    <div className="cart-totals">
      <h2>Ürünler Toplamı</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Toplam:</th>
            <td>
              <span id="subtotal">{subTotals.toFixed(2)} TL</span>
            </td>
          </tr>
          <tr>
            <th>Kargo</th>
            <td>
              <ul>
                <li>
                  <label>
                    Erken Teslimat İçin: 50.00 TL
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Adresi Değiştir</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Genel Toplam:</th>
            <td>
              <strong id="cart-total">{CartTotals} TL</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Ödeme Sayfasına Git</button>
      </div>
    </div>
  );
};

export default CartTotals;
