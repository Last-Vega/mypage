import React, { useEffect } from 'react';
import { Separator } from '../common';
import './Carrier.scss';

const Carrier: React.FC = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('#carrier .reveal');
    revealElements.forEach((el, index) => {
      (el as HTMLElement).style.animation = `fadeInUp 1s ease ${index * 0.1}s both`;
    });
  }, []);

  return (
    <section id="carrier" className="section no-h-padding">
      <div className="block has-text-centered">
        <h2 className="title is-2">職務経歴 / Carrier</h2>
        <Separator />
      </div>

      <div className="cardContainer reveal">
        <b className="carrierInfo">正社員 / As an employee</b>
        <ol className="content">
          <li>
            株式会社サイバーエージェント: 2024.4~ データサイエンティスト/機械学習エンジニア
          </li>
        </ol>
        <hr />

        <b className="carrierInfo">インターンシップ / Internship</b>
        <ol className="content">
          <li>日本総研: 2020.2 3 days ハッカソン</li>
          <li>楽天: 2020.8 2 weeks ハッカソン</li>
          <li>ナイル株式会社: 2021.3~10 長期インターン フロントエンドエンジニア</li>
          <li>合同会社DMM.com: 2022.9 2 weeks 機械学習エンジニア</li>
          <li>株式会社リクルート: 2022.10~11 長期インターン データスペシャリスト</li>
          <li>株式会社サイバーエージェント: 2023.8~9 内定者アルバイト(メディア統括本部データサイエンスセンター)</li>
          <li>株式会社サイバーエージェント: 2023.10~11 内定者アルバイト(株式会社CAM Creative Division)</li>
          <li>株式会社サイバーエージェント: 2024.1~3 内定者アルバイト(AI事業本部)</li>
        </ol>
      </div>

      <hr />

      <div className="cardContainer reveal">
        <b className="carrierInfo">業務委託 / As a freelance</b>
        <ol className="content">
          <li>株式会社Telportal: 漫画自動生成AIに関する開発業務</li>
          <li>株式会社CLIMT: 生成AIに関する開発業務</li>
          <li>株式会社インフラトップ: 生成AIに関するメンタリング業務</li>
          <li>株式会社アップグレード: Difyを用いた生成AIアプリ開発支援</li>
          <li>株式会社OZVISION: 生成AIに関する開発業務</li>
          <li>株式会社すきだよ: パートナーリレーションシップを改善するためのAIアシスタント開発</li>
        </ol>
      </div>

      <hr />

      <div className="cardContainer reveal">
        <b className="carrierInfo">ティーチングアシスタント / Teaching Assistant</b>
        <ol className="content">
          <li>線形代数A: 2022.5~8 筑波大学 情報学群 知識情報・図書館学類</li>
          <li>プログラミング入門A: 2022.10~12 筑波大学 情報学群 知識情報・図書館学類</li>
          <li>データベース技術: 2022.10~12 筑波大学 情報学群 知識情報・図書館学類</li>
          <li>データ構造とアルゴリズム: 2022.10~12 筑波大学 情報学群 知識情報・図書館学類</li>
          <li>プログラミング入門B: 2023.1~2 筑波大学 情報学群 知識情報・図書館学類</li>
          <li>データ工学概論: 2023.4~6 筑波大学 情報学群 情報メディア創成学類</li>
          <li>データ構造とアルゴリズム: 2023.10~12 筑波大学 情報学群 知識情報・図書館学類</li>
        </ol>
      </div>

      <hr />

      <div className="cardContainer reveal">
        <b className="carrierInfo">リサーチアシスタント / Research Assistant</b>
        <ol className="content">
          <li>
            図書館情報メディア系: 2022.8 ~ 2024.3 特許情報等を用いた技術トレンド分析・予測に関する実用システム化の検証
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Carrier;
