import React, { useEffect } from 'react';
import { Separator } from '../common';
import './Grants.scss';

const Grants: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('#grants .reveal');
    revealElements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.1}s both`;
    });
  }, []);

  return (
    <section id="grants" className="section no-h-padding">
      <div className="block has-text-centered">
        <h2 className="title is-2">助成金 / Grants</h2>
        <Separator />
      </div>
      
      <div className="cardContainer reveal">
        <ol className="content">
          <li>
            2018.08 筑波大学海外留学支援事業(はばたけ!筑大生)2018年度海外学会等参加支援プログラム{' '}
            <span className="amount">100,000 JPY</span>
          </li>
          <li>
            2019.02 筑波大学海外留学支援事業(はばたけ!筑大生)2019年度海外学会等参加支援プログラム{' '}
            <span className="amount">100,000 JPY</span>
          </li>
          <li>
            2022.04-2024.03 日本学生支援機構 (JASSO){' '}
            <span className="amount">88,000 JPY/month</span>
          </li>
          <li>
            2023.09 筑波大学大学院情報学学位プログラム 発表支援制度{' '}
            <span className="amount">70,000 JPY</span>
          </li>
        </ol>
        <hr />
      </div>
    </section>
  );
};

export default Grants;
