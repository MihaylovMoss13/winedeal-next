import Link from 'next/link'

export default function MainSection() {
    return (
      <div className="relative w-full overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-2xl md:pr-8">
              <h1 className="text-4xl font tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl">
                Магазин алкогольных напитков
              </h1>
              <p className="mt-4 text text-gray-500">
                Winedeal – интернет-магазин алкоголя в Москве, 
                созданный для тех, кто ищет качественные напитки по низким ценам.
              </p>
              <p className="mt-2 text text-gray-500">
                На сайте представлен большой выбор спиртосодержащей продукции, ассортимент постоянно растет и пополняется новыми позициями.
              </p>
              <p className="mt-2 text text-gray-500">
                Для любителей «чего-нибудь покрепче» мы подготовили водку из России и других стран, фирменные виски, лучший ром, текилу, коньяк, бренди и арманьяк.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://winedeal.ru/upload/resize_cache/iblock/196/250_250_1/742ty1y7ebxl4gymomfrc49h8543lilw.webp"
                            alt=""
                            className="object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden d-flex justify-center text-center">
                          <img
                            src="https://winedeal.ru/upload/resize_cache/iblock/f8a/250_250_1/o3ki7s23gqfyy6zw90xtkq4vj006z0vh.webp"
                            alt=""
                            className="object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://winedeal.ru/upload/resize_cache/iblock/0a5/250_250_1/kqhhmlmnjz9s7mn3x05or5lk516xbgrp.webp"
                            alt=""
                            className="w-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://winedeal.ru/upload/resize_cache/iblock/ab1/250_250_1/hw3hv7keq2k6dyb7xkoeqa1wpj8dx041.webp"
                            alt=""
                            className="w-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <Link href="/catalog/">
                    <a className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                        Смотреть каталог
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
  