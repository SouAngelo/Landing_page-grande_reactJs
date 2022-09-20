import React, {useRef} from 'react';
import './sass/styles.sass'

export default function Depoimentos() {

  const carousel = useRef(null)

  function backButton(e){
    e.preventDefault()
   
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  function nextButton(e){
    e.preventDefault()
   
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

 return (
   <div className='container-depoimentos'>
       <section className='sessao-depoimentos'>
         <div className='content-depoimentos'>
           <h1>Neque porro est qui DoloreM <span>Lorem Ipsum</span></h1>
           <p>PMaecenas quis vulputate odio efficitur!</p>
         </div>

         <div className='carousel-container'>
            <div className='carousel' ref={carousel}>
                <div className='carousel-item'>
                  <img src="https://i.pinimg.com/474x/fc/37/4d/fc374d0a866320a17372f6e08b591929.jpg" alt="" />
                </div>

                <div className='carousel-item'>
                  <img src="https://www.fanaticas.com.br/image/catalog/Depoimentos/depoimento1.jpeg" alt="" />
                </div>

                <div className='carousel-item'>
                  <img src="https://www.fanaticas.com.br/image/catalog/Depoimentos/depoimento2.jpeg" alt="" />
                </div>

                <div className='carousel-item'>
                  <img src="https://wallyvianna.files.wordpress.com/2017/05/gabrielle-lima-bernardo-mg-depoimento-whatsapp-maio-2017.png" alt="" />
                </div>

                <div className='carousel-item'>
                  <img src="https://www.fanaticas.com.br/image/catalog/Depoimentos/depoimento3.jpeg" alt="" />
                </div>

                <div className='carousel-item'>
                  <img src="https://startupenglish.com.br/wp-content/uploads/2019/10/depoimento-anderson-c.jpg" alt="" />
                </div>

                <div className='carousel-item'>
                  <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/467/585/rte/WhatsApp%20Image%202021-03-25%20at%2017.29.53.jpeg" alt="" />
                </div>

            </div>

            <div className='arrows'>
                 <i className="fa-solid fa-angle-left" onClick={backButton}></i>
                 <i className="fa-solid fa-angle-right"onClick={nextButton}></i>
             </div>
         </div>

         <div className='depoimento'> 
           <div className='content-depoimento'>
              <h1>Duis hendrerit lacus <span>sit amet!</span></h1>
              <p>Aliquam erat volutpat. Curabitur quam nibh, feugiat eu purus quis, viverra tempor augue. Sed accumsan varius interdum. 
                Ut consequat metus quam, id efficitur nisl laoreet et. Donec a quam eleifend, tempus nibh nec, volutpat nisi.
              </p>
              <p>Donec sed gravida elit. Etiam eu fermentum lacus, et ultrices velit. Quisque ipsum ligula, blandit ac tortor a, sollicitudin.</p>

           </div>

           <div className='img-depoimento'>
             <img src="https://www.hourosjoias.com.br/wp-content/uploads/2018/08/depoimento21-1.jpg" alt="" />
           </div>
         </div>

       </section>
   </div>
 );
}