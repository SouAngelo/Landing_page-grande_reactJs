import React from 'react';
import './styles.sass'

export default function Footer() {
 return (
   <footer>
      <h1>@2022 Feito por Angelo Gustavo</h1>

      <div className='footer-links'>
        <a href="#">Política de Privacidade</a>
        <a href="#">Fale Conosco</a>
      </div>
   </footer>
 );
}