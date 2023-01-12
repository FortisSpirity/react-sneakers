function Card() {
  return (
    <div className='card'>
      <div className='favorite'>
        <img src='/img/heart-uliked.svg' alt='unliked' />
      </div>
      <img width='133' height='112' src='/img/sneakers/1.jpg' alt='sneakers' />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>7000 грн</b>
        </div>
        <button className=''>
          <img width='11' height='11' src='/img/plus.svg' alt='plus' />
        </button>
      </div>
    </div>
  );
}

export default Card;
