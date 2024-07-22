import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact-top">
            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504.832725001529!2d29.235537928819063!3d41.03257467236431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1ff180c83c1%3A0x33c1f621a032d29b!2zRWvFn2lvxJ9sdSwgMS4gU2sgTm86MTksIDM0Nzk0IMOHZWttZWvDtnkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1718248510418!5m2!1str!2str"
                    width="100%" height="500" style={{border:"0"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className="contact-bottom">
            <div className="container">
                <div className="contact-titles">
                    
                    <h2>Bizimle İletişime Geç</h2>
                    
                </div>
                <div className="contact-elements">
                    <form className="contact-form">
                        <div className="">
                            <label>
                                İsim
                                <span>*</span>
                            </label>
                            <input type="text" required/>
                        </div>
                        <div className="">
                            <label>
                                E-mail
                                <span>*</span>
                            </label>
                            <input type="text" required/>
                        </div>
                        
                        <div className="">
                            <label>
                                Mesajınız
                                <span>*</span>
                            </label>
                            <textarea id="author" name="author" type="text" defaultValue="" size="30" required=""></textarea>
                        </div>
                        <button className="btn btn-sm form-button">Mesaj Gönder</button>
                    </form>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-info-texts">
                                <strong> ARAÇ SERVİS YEDEK PARÇA</strong>
                                <p className="contact-street">
                                    Ekşioğlu Mahallesi Mevlana Caddesi 65.Sokak No:19 Çekmeköy/İstanbul</p>
                                <a href="Telefon: 0544 780 9589">Telefon: 0544 780 9589 </a>
                                <a href="Email: info@AracServisProjesi.com">Email: info@AracServisProjesi.com</a>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-texts">
                                <strong>Açık Saatler</strong>
                                <p className="contact-date">
                                    Haftaiçi 08:00-20:00</p>
                                <p>Haftasonu Kapalı</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact