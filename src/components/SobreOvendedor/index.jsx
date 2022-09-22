import React from 'react';
import './sass/styles.sass'

export default function SobreOvendedor() {
 return (
   <div className='container-sobreOvendedor'>
       <section className='container-vendedor'>
         <div className='content-vendedor'>
           <h2>MUCH PLEASURE,</h2>
           <h1>Contrary to popular <span>Lorem</span></h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni ab reprehenderit possimus aliquid animi nemo doloremque fugiat cum!</p>
           <p style={{color: '#0f808c', fontWeight: 'bold'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis praesentium deserunt non?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span style={{color: '#0f808c', fontWeight: 'bold'}}>Rem omnis praesentium deserunt non?</span></p>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span style={{color: '#0f808c', fontWeight: 'bold'}}>Eaque, sunt magni iusto accusamus hic omnis modi dolore? Laudantium, suscipit totam.</span></p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum id ut dignissimos aliquid dolores. <span style={{color: '#0f808c', fontWeight: 'bold'}}>Vel corporis numquam deleniti quibusdam?</span></p>
         </div>

         <div className='container-image-vendedor'>
           <div className='image-person'>
               <img src="https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png" alt="" />
           </div>
           
           <img src="https://selectext.app/static/media/selectext-logo-filled-blue.4249e65a.png" alt="" className='copy-logo'/>

           
         </div>
         
       </section>

       <div className='btn-vendedor'>
              <a href="#">QUERO APRENDER AGORA!</a>
           </div>
        
   </div>
 );
}