import React, { useState } from 'react'
import {Container, Carousel } from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="bg-dark">
      <Carousel.Item className="p-5 text-center hero-slider">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Container className=" text-white w-75">
            <h2 className="h1 mb-3 font-weight-light">Создаем прорывные
                  решения <br /> <span style={{ color: "#D04F45" }}>на базе технологии искусственного интеллекта</span> <br />для развития вашего бизнеса!
                </h2>
            <h5 className="mb-3 font-weight-light" style={{ color: "silver" }}>Эта работа вдохновляет нашу высокотехнологичную
            компанию Men+Tech каждый день. Мы
            используем для этого
            многолетний опыт, знания современных технологий и лучшие практики в реализации продуктов полного цикла
            —
            от идеи и оценки перспективности до превращения разработки в важную часть бизнес-стратегии заказчика.
                </h5>

          </Container>
        </div>
      </Carousel.Item>

      <Carousel.Item className="p-5 text-center hero-slider">
        <div class="d-flex justify-content-center align-items-center h-100">
          <Container class="text-white w-75">
            <h2 class="h1 mb-3 font-weight-light"> Мир стоит на пороге <br /> <span style={{ color: "#D04F45" }}>новой технологической волны</span>
              <br /> </h2>
            <h5 class="mb-3 font-weight-light" style={{ color: "silver" }}> Пандемия ускорила изменение отраслей, не готовых к
            цифровизации. В такой ситуации важно обдуманно и системно
            войти в процесс цифровой трансформации,
            определив баланс между имеющимися ресурсами, человеческим капиталом и необходимым уровнем
            цифровизации. В новом мире выживут самые быстрые, гибкие и технологичные компании, те компании, где
                  наиболее высокая инновационная культура и производительность труда.</h5>
          </Container>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}


export default ControlledCarousel
