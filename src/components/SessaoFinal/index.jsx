import React, {useRef} from 'react';
import './sass/styles.sass'

export default function SessaoFinal() {

  const pergunta1 = useRef(null)
  const pergunta2 = useRef(null)
  const pergunta3 = useRef(null)
  const pergunta4 = useRef(null)
  const pergunta5 = useRef(null)
  const pergunta6 = useRef(null)
  const pergunta7 = useRef(null)


 function toggleQuestion(){
    pergunta1.current.classList.toggle('hide')
   
 }

 function toggleQuestion2(){
  pergunta2.current.classList.toggle('hide')
}

function toggleQuestion3(){
  pergunta3.current.classList.toggle('hide')
}

function toggleQuestion4(){
  pergunta4.current.classList.toggle('hide')
}

function toggleQuestion5(){
  pergunta5.current.classList.toggle('hide')
}

function toggleQuestion6(){
  pergunta6.current.classList.toggle('hide')
}

function toggleQuestion7(){
  pergunta7.current.classList.toggle('hide')
}

 return (
   <div className='sessao-final'>
       
      <section className='experimental'>
          <div className='container-garantia'>

              <div className='image-garantia'>
                <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/garantia-2.png" alt="" />
              </div>

              <div className='content-garantia'>
                 <h1>Proin dictum in augue <span>Tempor Augue</span></h1>
                 <p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. Morbi sit amet augue ac odio mattis rhoncus a et sem. 
                   Donec sit amet blandit ex, vitae finibus ligula. Vivamus ullamcorper vitae mi in blandit. Curabitur tincidunt nisi est, et elementum arcu aliquet eget. 
                   Vivamus tristique bibendum orci, ac scelerisque sapien elementum sed. Nullam scelerisque ipsum lectus, a sagittis neque condimentum ac. Curabitur nec magna quis lectus suscipit ullamcorper!</p>
              </div>

          </div>

              <div className='btn-garantia'>
                <a href="#">QUERO APRENDER AGORA!</a>
              </div>
      </section>

      <section className='sessao-perguntas'>
         <div className='container-perguntas'>
           <div className='perguntas-intro'>
             <h2>Sollicitudin  <span>PORTITTOR</span></h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
           </div>

           <div className='container-item-perguntas'>
             <div className='pergunta-item' onClick={toggleQuestion}>
                <div className='pergunta-titulo'>
                  
                  <i className="fa-solid fa-arrow-right"></i>
                  <h1>Lorem ipsum dolor sit?</h1>
                </div>

                <div className='resposta hide' ref={pergunta1}><p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. 
                  Morbi sit amet augue ac odio mattis rhoncus a et sem. Donec sit amet blandit ex vitae finibus ligula.</p>
                </div>

             </div>

             <div className='pergunta-item' onClick={toggleQuestion2}>
                <div className='pergunta-titulo'>
                  
                  <i className="fa-solid fa-arrow-right"></i>
                  <h1>Lorem ipsum dolor sit?</h1>
                </div>

                <div className='resposta hide' ref={pergunta2}><p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. 
                  Morbi sit amet augue ac odio mattis rhoncus a et sem. Donec sit amet blandit ex vitae finibus ligula.</p>
                </div>

             </div>

             <div className='pergunta-item' onClick={toggleQuestion3}>
                <div className='pergunta-titulo'>
                  
                  <i className="fa-solid fa-arrow-right"></i>
                  <h1>Lorem ipsum dolor sit?</h1>
                </div>

                <div className='resposta hide' ref={pergunta3}><p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. 
                  Morbi sit amet augue ac odio mattis rhoncus a et sem. Donec sit amet blandit ex vitae finibus ligula.</p>
                </div>

             </div>

             <div className='pergunta-item' onClick={toggleQuestion4}>
                <div className='pergunta-titulo'>
                  
                  <i className="fa-solid fa-arrow-right"></i>
                  <h1>Lorem ipsum dolor sit?</h1>
                </div>

                <div className='resposta hide' ref={pergunta4}><p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. 
                  Morbi sit amet augue ac odio mattis rhoncus a et sem. Donec sit amet blandit ex vitae finibus ligula.</p>
                </div>

             </div>

             <div className='pergunta-item' onClick={toggleQuestion5}>
                <div className='pergunta-titulo'>
                  
                  <i className="fa-solid fa-arrow-right"></i>
                  <h1>Lorem ipsum dolor sit?</h1>
                </div>

                <div className='resposta hide' ref={pergunta5}><p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. 
                  Morbi sit amet augue ac odio mattis rhoncus a et sem. Donec sit amet blandit ex vitae finibus ligula.</p>
                </div>

             </div>

             <div className='pergunta-item' onClick={toggleQuestion6}>
                <div className='pergunta-titulo'>
                  
                  <i className="fa-solid fa-arrow-right"></i>
                  <h1>Lorem ipsum dolor sit?</h1>
                </div>

                <div className='resposta hide' ref={pergunta6}><p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. 
                  Morbi sit amet augue ac odio mattis rhoncus a et sem. Donec sit amet blandit ex vitae finibus ligula.</p>
                </div>

             </div>

             <div className='pergunta-item' onClick={toggleQuestion7}>
                <div className='pergunta-titulo'>
                  
                  <i className="fa-solid fa-arrow-right"></i>
                  <h1>Lorem ipsum dolor sit?</h1>
                </div>

                <div className='resposta hide' ref={pergunta7}><p>Proin dictum in augue ac viverra. Mauris sed vehicula lorem, nec accumsan ipsum. 
                  Morbi sit amet augue ac odio mattis rhoncus a et sem. Donec sit amet blandit ex vitae finibus ligula.</p>
                </div>

             </div>

           </div>
         </div>
      </section>

   </div>
 );
}