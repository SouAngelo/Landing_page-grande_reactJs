import React from 'react';
import './sass/styles.sass'

export default function ParaQuem() {
 return (
   <div className='container-treinamento'>
        <section className='sessao-treinamento'>
          <div className='content-treinamento'>
            <h1>Duis Tristique Elit Quis <span>Amet Mattis</span> </h1>
            <p>Cras et pulvinar orci tempor</p>
          </div>

          <div className='treinamento-icons-texts'>
            <div className='info-card'>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/gestor-de-trafego.png" alt="" />
              <h2>Lorem ipsum.</h2>
            </div>

            <div className='info-card'>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/produtor.png" alt="" />
              <h2>Lorem ipsum.</h2>
            </div>

            <div className='info-card'>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/afiliados.png" alt="" />
              <h2>Lorem ipsum.</h2>
            </div>

            <div className='info-card'>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/corretores.png" alt="" />
              <h2>Lorem ipsum.</h2>
            </div>

            <div className='info-card'>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/drop.png" alt="" />
              <h2>Lorem ipsum.</h2>
            </div>

            <div className='info-card'>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/negocio-local.png" alt="" />
              <h2>Lorem ipsum.</h2>
            </div>

          </div>

          <div className='btn-treinamento'>
            <a href="#">QUERO APRENDER AGORA</a>
            <p>Compra 100% segura! Receba seu acesso imediatamente após confirmação do pagamento</p>
            <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/hotmart-preto.png" alt="" />
          </div>
        </section>
   </div>
 );
}