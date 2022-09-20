import React from 'react';
import './sass/styles.sass'

export default function Informacoes() {
 return (
   <div className='container-informacoes'>
      <section className='sessao-info-cards'>
        <div className='content-textCards'>
          <h1>Duis Hendrerit Lacus Sit <span>Amet Mattis</span></h1>
          <h2>Aenean Scelerisque Orci Aliquet Neque Congue Eleifend Id Eget Velit. <span>Suspendisse Magna Nibh, Finibus Eget.</span></h2>
        </div>

        <div className='container-cards'>
          
            <div className='card'>
              <div className='icon-text'> 
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon-professional.png" alt="" />
                  <h3>Lorem, Ipsum Dolor</h3>
              </div>
              
              <p>Mauris vestibulum posuere lorem ut aliquam. Morbi id rutrum ligula. 
                Praesent tempus libero ac tincidunt aliquet. Fusce suscipit mollis ex vitae faucibus. 
                Maecenas quis vulputate odio. Donec pulvinar efficitur mauris, eget volutpat risus vestibulum vel.</p>
            </div>

            <div className='card'>
               <div className='icon-text'> 
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon-professional.png" alt="" />
                  <h3>Lorem, Ipsum Dolor</h3>
                </div>
              <p>Mauris vestibulum posuere lorem ut aliquam. Morbi id rutrum ligula. 
                Praesent tempus libero ac tincidunt aliquet. Fusce suscipit mollis ex vitae faucibus. 
                Maecenas quis vulputate odio. Donec pulvinar efficitur mauris, eget volutpat risus vestibulum vel.</p>
            </div>

            <div className='card'>
                <div className='icon-text'> 
                  <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/icon-professional.png" alt="" />
                  <h3>Lorem, Ipsum Dolor</h3>
                </div>
              <p>Mauris vestibulum posuere lorem ut aliquam. Morbi id rutrum ligula. 
                Praesent tempus libero ac tincidunt aliquet. Fusce suscipit mollis ex vitae faucibus. 
                Maecenas quis vulputate odio. Donec pulvinar efficitur mauris, eget volutpat risus vestibulum vel.</p>
            </div>
          

        </div>

      </section>

      <section className='sessao-mkt'>

        <div className='container-mkt'>
           <div className='image-mkt'>
               <img src="https://uploaddeimagens.com.br/images/004/028/873/full/Multitasking-rafiki.png?1663694586" alt="" />
            </div>

           <div className='content-mkt'>
              <h1>Etiam sed neque sodales, eleifend sem <span>LOREM IPSUM</span></h1>
              <h2>...Cras eu viverra mauris, a varius ipsum. Quisque iaculis velit elit, et tristique</h2>
              <p>Fusce suscipit mollis ex vitae faucibus. Maecenas quis vulputate odio. Donec pulvinar 
                efficitur mauris, eget volutpat risus vestibulum vel. Etiam sed neque sodales, eleifend </p>
              <p className='p-negrito'> Vivamus tempus ut tortor at laoreet. Morbi ultricies massa at dui tincidunt, at hendrerit augue dictum rhoncus.</p>
          </div>

        </div>
      </section>
   </div>
 );
}