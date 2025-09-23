import React, { useEffect } from 'react';
import { Separator } from '../common';
import './Contact.scss';

const Contact: React.FC = () => {
  const email = 'watanabe.shingo.ss@alumni.tsukuba.ac.jp';
  const social = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png',
      link: 'https://www.instagram.com/watsydney/',
      name: 'Instagram'
    },
    {
      icon: 'https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png',
      link: 'https://github.com/Last-Vega',
      name: 'GitHub'
    },
  ];

  useEffect(() => {
    const revealElements = document.querySelectorAll('#contact .reveal');
    revealElements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.25}s both`;
    });
  }, []);

  return (
    <section id="contact" className="section">
      <div className="container has-text-centered">
        <h2 className="title is-2">Contact</h2>
        <Separator color="black" />
        <h5 className="subtitle reveal is-5">
          150-0043 東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C<br />
          Shibuya Dogenzaka Tokyu Building 2F-C, Dogenzaka 1-10-8, Shibuya-ku, Tokyo 150-0043, Japan<br />
          E-mail1: watanabe.shingo.ss [at] alumni.tsukuba.ac.jp<br />
        </h5>
        <div className="block reveal">
          <a className="button grow is-dark" href={`mailto:${email}`}>
            <span>Ping me | メールを送る</span>
          </a>
        </div>
        <div className="columns is-full">
          <div className="column">
            {social.map((item, index) => (
              <a
                key={index}
                className="icon"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
              >
                <img src={item.icon} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
