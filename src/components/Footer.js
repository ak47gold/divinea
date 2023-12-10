import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 sm:px-16 px-32 flex items-center justify-between lg:flex-col lg:py-6">


        <hr className="mt-8 border-b border-gray-200" />
        <div className="container px-4 mt-24 mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-footer grid-cols-3">
            <div className="p-10">
              <img className="w-44 mb-6" src="/img/logo-divinea.svg" alt="" />
              <p className="text-gray-400">
                Crediamo che conoscere il vino sia una vera esperienza. Per questo, vogliamo esportare la cultura del vino e creare un punto d’incontro – e di riferimento – che possa unire sempre di più i produttori e gli appassionati
              </p>
            </div>
            <div className="py-20 px-10">
              <h4 className="text-divinea-black text-lg uppercase font-semibold mb-4">
                Divinea
              </h4>
              <ul className="text-gray-400 space-y-4">
                <li>
                  <a href="">
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a href="">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="">
                    Aiuto
                  </a>
                </li>
                <li>
                  <a href="">
                    Termini e Condizioni
                  </a>
                </li>
                <li>
                  <a href="">
                    Contatti
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-20 px-10">
              <h4 className="text-divinea-black text-lg uppercase font-semibold mb-6">
                Sei un'Azienda Vinicola?
              </h4>
              <a href="" className="text-white bg-black px-6 py-2 mr-6 rounded-md">
                Entra in contatto con noi
              </a>
              <h4 className="text-divinea-black text-lg uppercase font-semibold mb-4 mt-20">
                Social media
              </h4>
              <img src="/img/social-footer.svg" alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center my-10 px-4">
            <div>
              <p className="text-gray-500">
                © 2023 Divinea
              </p>
            </div>
            <div className="text-gray-500">
              <a href="">
                Termos de Uso
              </a>
              <a className="ml-6" href="">
                Privacy Policy
              </a>
            </div>
            <div>
              <p className="text-gray-500">
                Language:&nbsp;
                <strong className="text-divinea-black border rounded-md p-2 ml-2">
                  EN
                </strong>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
