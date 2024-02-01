let windowWidth = null

window.addEventListener('resize', updateWidth)

updateWidth()

function updateWidth() {
  windowWidth = window.innerWidth
  chageChess()
  chageTransformation()
}


function chageChess() {
  let chessTop = document.querySelector('.chess_wrapper__top')
  if (windowWidth > 768) {
    chessTop.innerHTML = ''

    chessTop.insertAdjacentHTML('afterbegin', `
      <h2 class="chess_title">
        Чтобы поддержать <br />
        Международный васюкинский турнир посетите лекцию на тему:
        <span class="red">«Плодотворная дебютная идея»</span>
      </h2>
      <div class="chess_header-img">
        <img src="img/chess-header-img.webp" alt="" />
      </div>
      <!-- /.chess_header-img -->
    `)
  }
  else {
    chessTop.innerHTML = ''

    chessTop.insertAdjacentHTML('afterbegin', `
      <h2 class="chess_title">
        Чтобы поддержать <br />
        Международный васюкинский турнир 
      </h2>
      <div class="chess_header-img">
        <img src="img/chess-header-img.webp" alt="" />
      </div>
      <!-- /.chess_header-img -->
      <h2 class="chess_title">посетите лекцию на тему:
        <span class="red">«Плодотворная дебютная идея»</span>
      </h2>
    `)
  }

}

function chageTransformation() {
  const transformation = document.querySelector('.cards-box')

  if (windowWidth > 768) {
    transformation.innerHTML = ''

    transformation.insertAdjacentHTML('afterbegin', `
            <div class="cards-box_card cards-box_card__one">
              <span class="card_num">1</span>
              <p class="card_text">
                Строительство железнодорожной магистрали Москва-Васюки
              </p>
            </div>
            <!-- /.cards-box_card -->

            <div class="cards-box_card cards-box_card__two">
              <span class="card_num">2</span>
              <p class="card_text">
                Открытие фешенебельной гостиницы «Проходная пешка» и других
                небоскрёбов
              </p>
            </div>
            <!-- /.cards-box_card -->

            <div class="cards-box_card cards-box_card__three">
              <span class="card_num">3</span>
              <p class="card_text">
                Поднятие сельского хозяйства в радиусе на тысячу километров:
                производство овощей, фруктов, икры, шоколадных конфет
              </p>
            </div>
            <!-- /.cards-box_card -->

            <div class="cards-box_card cards-box_card__foure">
              <span class="card_num">4</span>
              <p class="card_text">Строительство дворца для турнира</p>
            </div>
            <!-- /.cards-box_card -->

            <div class="cards-box_card cards-box_card__five">
              <span class="card_num">5</span>
              <p class="card_text">
                Размещение гаражей для гостевого автотранспорта
              </p>
            </div>
            <!-- /.cards-box_card -->
            <div class="cards-box_card cards-box_card__six">
              <span class="card_num">6</span>
              <p class="card_text">
                Постройка сверхмощной радиостанции для передачи всему миру
                сенсационных результатов
              </p>
            </div>
            <!-- /.cards-box_card -->

            <div class="cards-box_card cards-box_card__seven">
              <span class="card_num">7</span>
              <p class="card_text">
                Создание аэропорта «Большие Васюки» с регулярным отправлением
                почтовых самолётов и дирижаблей во все концы света, включая
                Лос-Анжелос и Мельбурн
              </p>
            </div>
            <!-- /.cards-box_card -->
             <div class="cards-box_img">
              <img src="img/plane.webp" alt="Самолет" />
            </div>
            <!-- /.cards-box_img -->

    `)
  }
  else {
    transformation.innerHTML = ''

    transformation.insertAdjacentHTML('afterbegin', `
      <div class="swiper cards-box_swiper cards-box-swiper">
              <div class="swiper-wrapper cards-box-swiper_wrapper">
                <div class="swiper-slide cards-box-swiper_slide">
                  <div class="cards-box_card cards-box_card__one">
                    <span class="card_num">1</span>
                    <p class="card_text">
                      Строительство железнодорожной магистрали Москва-Васюки
                    </p>
                  </div>
                  <!-- /.cards-box_card -->
                  <div class="cards-box_card cards-box_card__two">
                    <span class="card_num">2</span>
                    <p class="card_text">
                      Открытие фешенебельной гостиницы «Проходная пешка»
                      и других небоскрёбов
                    </p>
                  </div>
                  <!-- /.cards-box_card -->
                </div>
                <div class="swiper-slide cards-box-swiper_slide">
                  <div class="cards-box_card cards-box_card__three">
                    <span class="card_num">3</span>
                    <p class="card_text">
                      Поднятие сельского хозяйства в радиусе на тысячу
                      километров: производство овощей, фруктов, икры, шоколадных
                      конфет
                    </p>
                  </div>
                  <!-- /.cards-box_card -->
                </div>
                <div class="swiper-slide cards-box-swiper_slide">
                  <div class="cards-box_card cards-box_card__foure">
                    <span class="card_num">4</span>
                    <p class="card_text">Строительство дворца для турнира</p>
                  </div>
                  <!-- /.cards-box_card -->

                  <div class="cards-box_card cards-box_card__five">
                    <span class="card_num">5</span>
                    <p class="card_text">
                      Размещение гаражей для гостевого автотранспорта
                    </p>
                  </div>
                  <!-- /.cards-box_card -->
                </div>
                <div class="swiper-slide cards-box-swiper_slide">
                  <div class="cards-box_card cards-box_card__six">
                    <span class="card_num">6</span>
                    <p class="card_text">
                      Постройка сверхмощной радиостанции для передачи всему миру
                      сенсационных результатов
                    </p>
                  </div>
                  <!-- /.cards-box_card -->
                </div>
                <div class="swiper-slide cards-box-swiper_slide">
                  <div class="cards-box_card cards-box_card__seven">
                    <span class="card_num">7</span>
                    <p class="card_text">
                      Создание аэропорта «Большие Васюки» с регулярным
                      отправлением почтовых самолётов и дирижаблей во все концы
                      света, включая Лос-Анжелос и Мельбурн
                    </p>
                  </div>
                  <!-- /.cards-box_card -->
                </div>
              </div>
              <!-- /.swiper-wrapper .cards-box-swiper_wrapper -->
            </div>
            <!-- /.swiper .cards-box_swiper .cards-box-swiper -->
            <div class="cards-box-swiper_nav-group">
              <!-- If we need navigation buttons -->
              <div
                class="swiper-button-prev cards-box-swiper_btn cards-box-swiper_btn__prev"
              >
                <img src="img/icon/arrow.svg" alt="Стрелка - назад" />
              </div>
              <div class="swiper-pagination cards-box-swiper_pagination"></div>
              <div
                class="swiper-button-next cards-box-swiper_btn cards-box-swiper_btn__next"
              >
                <img src="img/icon/arrow.svg" alt="Стрелка - вперед" />
              </div>
            </div>
             <div class="cards-box_img">
              <img src="img/plane.webp" alt="Самолет" />
            </div>
            <!-- /.cards-box_img -->
    `)

    /////////
    const swiperTransformation = new Swiper('.cards-box-swiper', {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,

      pagination: {
        el: '.cards-box-swiper_pagination',
      },

      navigation: {
        nextEl: '.cards-box-swiper_btn__next',
        prevEl: '.cards-box-swiper_btn__prev',
      },
    })


  }
}

