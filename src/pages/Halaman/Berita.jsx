import React, { useEffect } from "react";
import { Footer, Navbar, Helm } from "../../Components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../Features/news/newsSlice";

const Berita = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => {
    return state.news.news?.articles;
  });

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Asia/Jakarta",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });

    dispatch(fetchNews());
  }, []);
  return (
    <>
      <Helm title="Berita" />
      <Navbar position="fixed" />
      <div className="hero min-h-screen bg-white">
        <div className="hero-content w-full flex flex-col pt-10">
          <h1 className="text-black text-4xl font-bold mt-24 2xl:mt-0">
            Berita Terkini
          </h1>
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              perPage: 1,
            }}
            className="w-full max-w-xs md:max-w-xl xl:max-w-none"
          >
            {newsData?.map((item, index) => {
              return (
                <SplideSlide className="mr-6" key={index}>
                  <div className="flex justify-center flex-col gap-3 items-center">
                    <h1 className="text-primary text-sm md:text-2xl font-bold">
                      {item.title}
                    </h1>
                    <img
                      src={item.urlToImage}
                      alt={item.url}
                      className="md:w-[400px] md:h-[300px]"
                    />
                    <div className="flex flex-col items-center">
                      <small>Penulis: {item.author}</small>
                      <small>
                        Tanggal Dibuat: {formatDate(item.publishedAt)}
                      </small>
                    </div>

                    <p className="text-sm md:text-lg">
                      {item.content}{" "}
                      <Link
                        to={item.url}
                        target={"_blank"}
                        className="text-primary hover:text-black"
                      >
                        Baca Lebih Lengkap
                      </Link>
                    </p>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
      <div className="hero min-h-screen bg-white w-full flex flex-col gap-8">
        <div className="hero-content w-full flex justify-start">
          <h1 className="text-black text-4xl font-bold ">Artikel Lainnya</h1>
        </div>
        <div className="hero-content w-full flex flex-col gap-8">
          {newsData?.map((item) => {
            return (
              <div
                className="card w-full h-full bg-white shadow-xl rounded-xl p-5"
                key={item.id}
              >
                <AnimationOnScroll
                  duration={1}
                  animateIn="animate__zoomIn"
                  className="w-full"
                >
                  <div className="flex gap-8">
                    <img
                      className="hidden md:flex w-96"
                      src={item.urlToImage}
                      alt={item.url}
                    />
                    <div className="flex flex-col gap-4">
                      <h1
                        target={"_blank"}
                        to={item.url}
                        className="card-title text-primary text-lg md:text-2xl"
                      >
                        {item.title}
                      </h1>
                      <p className="text-sm md:text-base">{item.content}</p>
                      <div>
                        <Link
                          to={item.url}
                          target={"_blank"}
                          className="btn btn-primary bg-primary text-white hover:bg-black"
                        >
                          Baca Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimationOnScroll>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
