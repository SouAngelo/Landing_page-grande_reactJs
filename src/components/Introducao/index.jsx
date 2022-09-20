import React, {useRef, useState} from 'react'
import video from '../../assets/videodemo.mp4'
import './sass/style.sass'

function Introducao() {

  const play = useRef(null)
  const playerImg = useRef(null)
  const [player, setPlayer] = useState(false)

  function handlePlay(){
     if(player == false){
      play.current.play()
      setPlayer(true)
      playerImg.current.classList.add('hide')
     } else{
      playerImg.current.classList.remove('hide')
      setPlayer(false)
      play.current.pause()
     }
  }

  function onPlayer(){
    if(player == true){
      playerImg.current.classList.remove('hide')
      setPlayer(false)
    } else{
      playerImg.current.classList.add('hide')
      setPlayer(true)
    }
  }

  return (
    <article className='container'>
      <section className='container-video'>
         <div className='texts-intro'>
           <p className='copy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aspernatur itaque eum fuga illum et. </p>
           <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aspernatur itaque eum fuga illum et.</h1>
           <div className='stars'>
                <p>[Mais de 15 Mil Alunos] Nota Excelente</p>
                <img src='https://seuhoroscopo.com.br/wp-content/uploads/2017/11/5-ESTRELAS.png'/>
           </div>
           
         </div>

         <div className='video-btn'>
            <video ref={play} onClick={onPlayer} poster='https://br.hubspot.com/hubfs/media/ferramentasdemarketingdigital.jpeg' controls>
                <source src={video} type="video/mp4"/>
            </video>

            <div className='play'>
                <img src="https://findicons.com/files/icons/2315/default_icon/256/media_play.png" alt="" onClick={handlePlay} ref={playerImg} />
            </div>
         </div>

         <div className='btn-link'>
              <a href='#'>QUERO APRENDER</a>
         </div>
      </section>

      <section className='apresentacao'>
          <div>
              <img src="https://silvioroberto.com.br/wp-content/uploads/2021/09/hotmart-preto.png" alt="" />
          </div>

          <div className='container-info'>
             <div className='image-info-apresentacao'>
                <img src="https://uploaddeimagens.com.br/images/004/028/809/full/Knowledge-rafiki.png?1663693227" alt="" />
             </div>

             <div className='text-apresentacao'>
                 <h1>Lorem Ipsum <span>Reader®</span></h1>
                 <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                     content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                     their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
                     evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Release of Letraset sheets containing 
                     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Release of L
                     etraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                   <div className='btn-link2'>
                  <a href='#'>QUERO APRENDER</a>
               </div>
             </div>

               
          </div>
      </section>
    </article>
  )
}

export default Introducao