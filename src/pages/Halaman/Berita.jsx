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
  const newsDataLoading = useSelector((state) => {
    return state.news.loading;
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

  const Loader = () => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  };

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
      <div className="hero min-h-screen bg-white dark:bg-accent overflow-x-hidden">
        <div className="hero-content w-full flex flex-col pt-10">
          <h1 className="text-black text-4xl font-bold mt-24 2xl:mt-0">
            Berita Terkini
          </h1>
          {newsDataLoading ? (
            <Loader />
          ) : (
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
                          className="text-primary dark:text-primary dark:hover:text-slate-600 hover:text-black"
                        >
                          Baca Lebih Lengkap
                        </Link>
                      </p>
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          )}
        </div>
      </div>
      <div className="hero min-h-screen bg-white dark:bg-accent w-full flex flex-col gap-8">
        <div className="hero-content w-full flex justify-start">
          <h1 className="text-black text-4xl font-bold ">Artikel Lainnya</h1>
        </div>
        <div className="hero-content w-full flex flex-col gap-8">
          {newsDataLoading ? (
            <Loader />
          ) : (
            <>
              {newsData?.map((item, index) => {
                return (
                  <div
                    className="card w-full h-full bg-white dark:bg-secondary shadow-xl rounded-xl p-5"
                    key={index}
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
                              className="btn btn-primary rounded-lg border-none bg-primary text-white hover:bg-black"
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
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
