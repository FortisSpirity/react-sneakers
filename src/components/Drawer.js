function Drawer() {
  return (
    <div style={{ display: 'none' }} className='overlay'>
      <div className='drawer'>
        <div className='drawerInner'>
          <h2 className='mb-30 d-flex justify-between align-center'>
            Корзина
            <img
              width={30}
              height={30}
              className='remove-btn'
              src='/img/btn-remove.svg'
              alt='btn-remove'
            />
          </h2>

          <div className='items'>
            <div className='cartItem d-flex align-center mb20'>
              <div
                className='cartItemImg mr-20'
                style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }}
              ></div>

              <div className=' p-15'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12900грн.</b>
              </div>
              <img
                className='remove-btn'
                src='/img/btn-remove.svg'
                alt='btn-remove'
              />
            </div>
            <div className='cartItem d-flex align-center mb20'>
              <div
                className='cartItemImg mr-20'
                style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }}
              ></div>

              <div className=' p-15'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12900грн.</b>
              </div>
              <img
                className='remove-btn'
                src='/img/btn-remove.svg'
                alt='btn-remove'
              />
            </div>
          </div>
        </div>
        <div className='cartTotalBlock'>
          <ul>
            <li className='d-flex'>
              <span>Итого:</span>
              <div></div>
              <b>21 498грн</b>
            </li>
            <li className='d-flex'>
              <span>Податок 5%</span>
              <div></div>
              <b>1000грн</b>
            </li>
          </ul>
          <button className='greenButton'>
            Оформить заказ <img src='/img/arrow-right.svg' alt='img-arrow' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
