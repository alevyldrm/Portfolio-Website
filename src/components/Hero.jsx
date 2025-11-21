import Image from 'next/image'
import './Hero.css'

export default function Hero() {



    return (
        <section className="hero container">
            <div className="hero-left">
                <h1>Merhaba Ben Alev</h1>
                <p className="hero-desc">Modern web teknolojileriyle kullanıcı odaklı ve yüksek performanslı arayüzler geliştiriyorum. <br /> <br />
                    <span className='pink-color' >React</span> ve <span className='pink-color'>JavaScript</span> ekosisteminde uzmanlaşırken, <span className='pink-color'>Next.js</span> ile tam kapsamlı uygulama geliştirme alanında kendimi geliştiriyorum.
                    <span className='orange-color'> HTML</span>, <span className='blue-color'>CSS</span>  ve modern yapılarla yenilikçi ve temiz kod prensiplerine uygun projeler üretmeyi hedefliyorum.</p>

                <div className="tech-stack">
                    <div className="tech-item">
                        <img src="/images/nextjs.webp" alt="Next.js" />
                    </div>
                    <div className="tech-item">
                        <img src="/images/react.svg" alt="React" />
                    </div>
                    <div className="tech-item">
                        <img src="/images/js.svg" alt="JavaScript" />
                    </div>
                    <div className="tech-item">
                        <img src="/images/css.svg" alt="CSS" />
                    </div>
                    <div className="tech-item">
                        <img src="/images/html.svg" alt="HTML" />
                    </div>
                    <span className="more-text">ve daha fazlası...</span>
                </div>
            </div>
            <div className="hero-right">
                <Image className='hero-img' src="/images/alev.jpeg" width={420} height={420} alt="Alev" />
            </div>


        </section>
    )
}
