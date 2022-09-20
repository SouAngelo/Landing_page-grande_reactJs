import React from 'react'
import './sass/styles.sass'

export default function Bonus() {
 return (
   <div className='container-bonus'>
      <section className='sessao-bonus'>
          <div className='content-bonus'>
            <h1>Mauris vel sem dignissim <span>mi non osuere</span> malesuada a R$458,00</h1>
            <p>Proin dictum in <span>Maximus</span> in <span>Donec a quam et</span> Proin dictum in augue ac viverra. 
            Mauris sed vehicula lorem, nec accumsan ipsum. 
            Morbi sit amet augue ac odio mattis rhoncus a et sem!</p>
          </div>
           
          <div className='container-cards-bonus'>
            <div className='card-bonus'>
              <img src="https://www.editorajuspodivm.com.br/media/catalog/product/J/U/JUS1757_4.png" alt="" />
              <div className='card-text'>
                 <h2>BÔNUS 1</h2>
                  <div className='h3'>
                     <h3>DONEC A QUAM in <span>R$227,00</span> por R$0,00</h3>
                  </div>
                   

                 <p>Nam mattis vestibulum felis sit amet ultricies. Donec posuere massa eget ex convallis, id ornare elit venenatis. 
                   Mauris vel sem dignissim, malesuada mi non, posuere justo.</p>
              </div>
              
            </div>

            <div className='card-bonus'>
              <img className='card-img' src="https://silvioroberto.com.br/wp-content/uploads/2022/04/suporte-2.png" alt="" />
              <div className='card-text'>
                  <h2>BÔNUS 2</h2>
                  <div className='h3'>
                  <h3>DONEC A QUAM in <span>R$227,00</span> por R$0,00</h3>
                  </div>

                  <p>Nam mattis vestibulum felis sit amet ultricies. Donec posuere massa eget ex convallis, id ornare elit venenatis. 
                    Mauris vel sem dignissim, malesuada mi non, posuere justo.</p>
              </div>
              
            </div>
          </div>
  
      </section>
   </div>
 );
}