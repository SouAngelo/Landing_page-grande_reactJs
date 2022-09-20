import React from 'react';
import './sass/style.sass'

export default function Oferta() {
 return (
   <div className='container-oferta'>
        <section className='sessao-oferta'>
          <div className='text-oferta'>
              <h1>Curabitur magna quis lectus  <span>Suscipit</span></h1>
              <p> Curabitur quam nibh, feugiat eu purus quis!</p>
          </div>

          <div className='descontos'>
            <div className='item-desconto'><h2><span>Lorem ipsum dolor sit amet</span> consectetur de R$ 220,00. <label>R$257,00</label> </h2></div>
            <div className='item-desconto'><h2><span>Lorem ipsum dolor sit amet</span> consectetur de R$ 137,00. <label>R$257,00</label></h2></div>
            <div className='item-desconto'><h2><span>Lorem ipsum dolor sit amet</span> consectetur de R$ 327,00. <label>R$257,00</label></h2></div>
          </div>
        </section>

        <section className='area-de-compra'>
          <div className='content-compra'>
            <h1>Nam mattis vestibulum  <span>FELIS sit AMET!</span></h1>
            <p>Sed ACCUSAM varius interdum</p>
          </div>

          <div className='card-compra'>
            <div className='card-compra-text'><h2 style={{textTransform: 'uppercase'}}>Lorem ipsum dolor sit.</h2></div>

            <div className='content-card-compra'>
              <p>DE <span>R$ 911,00</span> POR APENAS <label>10x</label></p>
              <hr/>
              <h2>R$ 15,50</h2>
              <hr/>
              <p className='a-vista'>OU R$ 155,00 À VISTA</p>

              <a href="#">COMPRAR AGORA!</a>
            </div>

            <div className='img-card-compra'>
              <p><span> Compra segura</span> com garantia incondicional de <span> 7 dias!</span> Parcelamento com tarifa via cartão de crédito.</p>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/hotmart-preto.png" alt="" />
            </div>
          </div>
        </section>
   </div>
 );
}