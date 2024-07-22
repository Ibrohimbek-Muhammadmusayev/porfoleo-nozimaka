import Image from "next/image";
import Link from "next/link";
import style from './../styles/style.css'
// import { addDoc, collection } from "firebase/firestore";
import Message from "@/copanents/massage";

export default function Home() {
  // const handleMenuToggle = async () => {
  //   const docRef = await addDoc(collection(db, "massage"), {
  //     name: "Tokyo",
  //     country: "Japan"
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // };

  // handleMenuToggle()

  return (
    <>
    class
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <div className="header">
                <a href="#" class="logo">Portfolio</a>
                <i className='bx bx-menu' id="menu-icon"></i>
                <nav className="navbar">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
            <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Nozimjon Nuraliyev</h1>
                <h3>And I'm a <span className="multiple-text"></span></h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio voluptate totam quam aut, quasi explicabo quaerat fugiat?</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/nozimjon.nuraliyev" target="_blank"><i class='bx bxl-facebook'></i></a>
                    <a href="https://x.com/master_nnu" target="_blank"><i className='bx bxl-twitter'></i></a>
                    <a href="https://www.instagram.com/master_nnu" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="https://www.linkedin.com/in/nozimjon-nuraliyev-9996062a5" target="_blank"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://www.youtube.com/@NozimjonNuraliyev" target="_blank"><i className='bx bxl-youtube'></i></a>
                    <a href="https://t.me/master_nnu90"><i class='bx bxl-telegram' target="_blank"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=998916600109" target="_blank"><i className='bx bxl-whatsapp'></i></a>
                </div>
                <a href="#" className="btn">Download CV</a>
            </div>
            <Image className="home-img" width={400} height={400} src="/images/home1.png"  alt="images"/>
        </section>
        <section className="about" id="about">
          <Image className="about-img" width={400} height={400} src="/images/home1.png" alt="images" />
          <div className="about-content">
              <h2 className="heading">About <span>Me</span></h2>
              <h3>Frontend Developer</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eligendi aspernatur sequi fugiat eaque doloribus dolorum quae quo nesciunt maxime laudantium accusantium, adipisci iste eos omnis quidem vero laborum deleniti reprehenderit earum expedita sint dignissimos impedit. Quae consectetur natus reiciendis nesciunt doloribus aut, corrupti obcaecati placeat?</p>
              <Link href="#" className="btn">Read More</Link>
          </div>
      </section>
      <section className="services" id="service">
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-container">
            <div className="services-box">
                <i className='bx bxs-paint'></i>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero eaque ipsum similique facilis? Praesentium magni repellendus possimus dolor perferendis.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bx-code-alt'></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero eaque ipsum similique facilis? Praesentium magni repellendus possimus dolor perferendis.</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bx-bar-chart-alt'></i>
                <h3>Digital Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero eaque ipsum similique facilis? Praesentium magni repellendus possimus dolor perferendis.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
    <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>
        <div className="portfolio-container">
            <div className="portfolio-box">
                <Image width={400} height={400} src="/images/portfolio1.jpg" alt="images"/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non!</p>
                    <a href="#"><i classname='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <Image width={400} height={400} src="/images/portfolio2.jpg" alt="image"/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non!</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <Image width={400} height={400} src="/images/portfolio3.jpg" alt="image"/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non!</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <Image width={400} height={400} src="/images/portfolio4.jpg" alt="image"/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non!</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <Image width={400} height={400} src="/images/portfolio5.jpg" alt="image"/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non!</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <Image width={400} height={400} src="/images/portfolio6.jpg" alt="image"/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, non!</p>
                    <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    </section>
    <section>
      <Message/>
    </section>
    </>
  )
}
