import React from 'react';
import Navbar from './Navbar';
import './style.css';
import './result.css';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import geminiIcon from '../../assets/3428254_60351.svg';
import { useTranslation } from 'react-i18next';
import Footer from '../footer/Footer';

const Main = () => {
  const { t } = useTranslation('global');

  const { onSent, recentPrompt, showResult, loading, data, input, setInput } =
    useContext(Context);

  return (
    <main className="main_content">
      <Navbar />
      <section className="container">
        {!showResult ? (
          <>
            <div className="greeting">
              <h4>{ t('hero.greeting')}</h4>
              <p>{ t('hero.description')}</p>
            </div>
            
          </>
        ) : (
          <div className="result">
            <div className="result_title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="profile icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
              <p>{recentPrompt}</p>
            </div>
            <div className="result_data">
              <img src={geminiIcon} alt="logo" />
              {loading ? (
                <div className="dot-spinner">
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: data }}></p>
              )}
            </div>
          </div>
        )}
      </section>
      <section className="search">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder={t('hero.input')}
        />
        <div className="icons">
          {input ? (
            <svg
              onClick={() => onSent()}
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-send-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
              <path d="M6.5 12h14.5" />
            </svg>
          ) : null}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Main;
