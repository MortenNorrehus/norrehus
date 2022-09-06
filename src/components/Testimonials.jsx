import quote from "/images/quote.svg";
import nordbaek from "/images/nordbaek.webp";
import luciacare from "/images/luciacare.jpg";
import kennyanker from "/images/kenny-anker.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="content">
        <div className="width-small items-center">
          <h3 className="section-subtitle">Testimonials</h3>
          <h2 className="section-title">Hvad andre siger</h2>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 8000 }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonial">
              <div className="from">
                <img
                  className="author-image"
                  src={nordbaek}
                  alt="NORDBAEK"
                  loading="lazy"
                />
                <div className="author">
                  <span className="name">Barbara</span>
                  <a href="https://nordbaek.com" className="title">
                    NORDBAEK
                  </a>
                </div>
                <img
                  className="quotation"
                  src={quote}
                  alt="Quotation Marks"
                  loading="lazy"
                />
              </div>
              <div className="quote">
                <p>
                  <i>
                    ”Her i NORDBAEK er vi så glade for at have mødt Morten. Han
                    er super professionel, altid rar at tale med og ikke mindst
                    sindsygt hurtig. Vi bruger ham til tider på daglig basis og
                    han er en vigtig brik i vores forretning. Morten står for
                    alt hvad der har med vores webshop at gøre. Kun de varmeste
                    anbefalinger fra os
                  </i>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="from">
                <img
                  className="author-image"
                  src={luciacare}
                  alt="Lucia Care"
                  loading="lazy"
                />
                <div className="author">
                  <span className="name">Mette Jensen</span>
                  <a href="https://luciacare.com" className="title">
                    Lucia Care
                  </a>
                </div>
                <img
                  loading="lazy"
                  className="quotation"
                  src={quote}
                  alt="Quotation Marks"
                />
              </div>
              <div className="quote">
                <p>
                  <i>
                    "Morten har været arkitekten på udvikling af Lucia Care
                    webshop. Morten er en erfaren, pålidelig, højt engageret og
                    altid tilgængelig ecommerce samarbejdspartner, som jeg varmt
                    kan anbefale. Morten arbejder hurtigt og løsningsorienteret.
                    For et start up, har det været uvurderligt at samarbejde med
                    Morten, da han deltager proaktivt og idérigt i alle facetter
                    af den digitale rejse og både videreudvikling af nye webshop
                    features og support på den daglige drift er i trygge hænder
                    hos Morten.""
                  </i>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="from">
                <img
                  className="author-image"
                  src={kennyanker}
                  alt="Kenny Anker"
                  loading="lazy"
                />
                <div className="author">
                  <a href="https://kennyanker.dk" className="title">
                    Kenny Anker
                  </a>
                </div>
                <img
                  className="quotation"
                  src={quote}
                  alt="Quotation Marks"
                  loading="lazy"
                />
              </div>
              <div className="quote">
                <p>
                  <i>
                    ”Vi er meget glade for vores samarbejde med Morte. Han er
                    dygtig og leverer altid flotte resultater med god struktur
                    og høj brugervenlighed. Når vi får nye ideer, er Morten
                    altid hjælpsom og finder de bedste løsninger til at
                    realisere dem. Vi kan varmt anbefale Morten.”
                  </i>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
