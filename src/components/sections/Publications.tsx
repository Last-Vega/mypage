import React, { useEffect } from 'react';
import { Separator } from '../common';
import './Publications.scss';

const Publications: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('#publications .reveal');
    revealElements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.1}s both`;
    });
  }, []);

  return (
    <section id="publications" className="section no-h-padding">
      <div className="block has-text-centered">
        <h2 className="title is-2">Publications</h2>
        <Separator />
      </div>
      
      <div className="cardContainer reveal">
        <b className="conference">学術雑誌論文・Refereed Journal Paper</b>
        <ol>
          <li>
            Shingo Watanabe, Hiroyoshi Ito, Masaki Matsubara, Atsuyuki Morishima, 
            "Human-in-the-loop Latent Space Learning for Bibrecord-based Literature Management", 
            International Journal on Digital Libraries, Volume 25, pp.123–136, January 2024.
            <a href="https://link.springer.com/article/10.1007/s00799-023-00389-8" target="_blank" rel="noopener noreferrer">[PDF]</a>
          </li>
        </ol>
      </div>
      
      <hr />
      
      <div className="cardContainer reveal">
        <b className="conference">国際会議・Workshop</b>
        <ol>
          <li>
            "A Document Management System based on Human-in-the-Loop Latent Space Learning". 
            <u>Shingo Watanabe</u>，Hiroyoshi Ito，Masaki Matsubara，Atsuyuki Morishima．
            iConference2022 Student Symposium. 2022.3
          </li>
          <li>
            Shingo Watanabe, Hiroyoshi Ito, Masaki Matsubara and Atsuyuki Morishima, 
            "Bibrecord-based Literature Management with Interactive Latent Space Learning", 
            The 24th International Conference on Asia-Pacific Digital Libraries (ICADL 2022), 
            November30-December2, 2022, Hanoi, Vietnam{' '}
            <span className="award">(Best Student Paper Award)</span>
            <a href="https://link.springer.com/chapter/10.1007/978-3-031-21756-2_13" target="_blank" rel="noopener noreferrer">[PDF]</a>
          </li>
          <li>
            Shingo Watanabe, Hiroyoshi Ito, Masaki Matsubara, Atsuyuki Morishima, 
            "Human-in-the-loop Latent Space Learning for Bibrecord-based Literature Management", 
            The 27th International Conference on Theory and Practice of Digital Libraries (TPDL 2023), 
            September26-29, 2023, Zadar, Croatia{' '}
            <span className="award">(IJDL Invited Paper)</span>
            <a href="https://link.springer.com/content/pdf/bfm:978-3-031-43849-3/1" target="_blank" rel="noopener noreferrer">[PDF]</a>
          </li>
        </ol>
      </div>
      
      <hr />
      
      <div className="cardContainer reveal">
        <b className="conference">国内会議・ワークショップ</b>
        <ol>
          <li>
            "Human-in-the-loop 潜在空間学習による空間型インタラクティブ文献管理システム". 
            <u>渡邉真悟</u>，伊藤寛祥，松原正樹，森嶋厚行．
            第14回データ工学と情報マネジメントに関するフォーラム(DEIM2022)．G21-1．8pages．
            <a href="https://cms.dbsj.org/deim2022/participant/?channel=paper&id=G21-1" target="_blank" rel="noopener noreferrer">[PDF]</a>
          </li>
        </ol>
      </div>
      
      <hr />
      
      <div className="cardContainer reveal">
        <b className="conference">受賞・Awards</b>
        <ol>
          <li>
            Shingo Watanabe, Hiroyoshi Ito, Masaki Matsubara and Atsuyuki Morishima, 
            "Bibrecord-based Literature Management with Interactive Latent Space Learning", 
            The 24th International Conference on Asia-Pacific Digital Libraries (ICADL 2022), 
            November30-December2, 2022, Hanoi, Vietnam{' '}
            <span className="award">(Best Student Paper Award)</span>
          </li>
          <li>
            筑波大学 学生表彰 2023年度 学生表彰{' '}
            <span className="award">(学長賞)</span>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Publications;
