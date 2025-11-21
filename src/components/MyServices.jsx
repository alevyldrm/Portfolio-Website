import './MyServices.css';
import { FaCode, FaLaptopCode, FaUserFriends, FaPaintBrush, FaRocket, FaCubes } from 'react-icons/fa';

export default function MyServices() {
    const services = [
        {
            icon: <FaCode />,
            title: 'Temiz Kod',
            desc: 'Bakımı kolay, düzenli ve anlaşılır kod yapıları yazarım. Her satırın bir amacı vardır.',
        },
        {
            icon: <FaLaptopCode />,
            title: 'Kullanıcı Arayüzü (UI)',
            desc: 'Ziyaretçilerin rahat gezinebileceği, tutarlı ve modern arayüzler geliştiririm.',
        },
        {
            icon: <FaRocket />,
            title: 'Hızlı ve Optimize Çözümler',
            desc: 'Proje performansını ön planda tutarak hızlı ve akıcı bir deneyim sunarım.',
        },
        {
            icon: <FaCubes />,
            title: 'Bileşen Bazlı Yapı',
            desc: 'Yeniden kullanılabilir component yapılarıyla projeleri sürdürülebilir hale getiririm.',
        },
    ];

    return (
        <section className="services-section container">
            <h1>Yetenek Alanlarım</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
