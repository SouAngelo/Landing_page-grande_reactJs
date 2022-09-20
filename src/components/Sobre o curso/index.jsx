import React from 'react';
import './sass/style.sass'

export default function SobreOcurso() {
 return (
   <div className='container-sobreOcurso'>
      <section className='container-items-curso'>
          <div className='titulo-curso'>
              <h1>Neque porro quisquam est qui <span>DoloreM®</span></h1>
              <p>Lorem Ipsum is not SIMPLY random TEXT</p>
          </div>

          <div className='container-images'>
              <div className='image'>
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon01.png" alt="" />
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloremque.</p>
              </div>

              <div className='image'>
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon05.png" alt="" />
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloremque.</p>
              </div>

              <div className='image'>
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon02.png" alt="" />
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloremque.</p>
              </div>

              <div className='image'>
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon06.png" alt="" />
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloremque.</p>
              </div>

              <div className='image'>
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon04.png" alt="" />
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloremque.</p>
              </div>

              <div className='image'>
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon03.png" alt="" />
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloremque.</p>
              </div>
          </div>

          <div className='container-btn'>
              <a href="#">QUERO APRENDER</a>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/hotmart-preto.png" alt="" />
          </div>
      </section>
   </div>
 );
}