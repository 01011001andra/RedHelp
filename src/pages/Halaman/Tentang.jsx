import React, { useEffect, useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Navbar, Footer, Helm, Developer } from "../../Components";
import emailjs from "@emailjs/browser";
import Iframe from "react-iframe";
import { Link } from "react-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { animateScroll as scroll } from "react-scroll";

const Tentang = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv1xmev",
        "template_rqqdj0h",
        form.current,
        "UH7kQ9tv5_PF3RpL6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesanmu sudah kami terima, Terima kasih atas pesannya.");
          e.target.nama_lengkap.value = "";
          e.target.email.value = "";
          e.target.subject.value = "";
          e.target.message.value = "";
        },
        (error) => {
          console.log(error.text);
          alert("Pesan Gagal Dikirim");
          e.target.nama_lengkap.value = "";
          e.target.email.value = "";
          e.target.subject.value = "";
          e.target.message.value = "";
        }
      );
  };

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);
  return (
    <div className="bg-white dark:bg-accent">
      <Helm title="Tentang" />
      <Navbar position="fixed" />
      {/* HERO */}
      <div
        className="hero-content min-h-screen mx-auto"
        // style={{
        //   backgroundImage: `url("./Blood.png")`,
        // }}
      >
        {/* <div className="hero-overlay bg-opacity-60 dark:bg-accent"></div> */}
        <div class="py-28 bg-white dark:bg-accent">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:flex-col xl:flex-row xl:justify-between md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
                <img
                  className="dark:hidden"
                  src="./Tentang.gif"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
                <img
                  className="dark:flex hidden"
                  src="./TentangDark.gif"
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
              </div>
              <div class="md:7/12 lg:w-6/12">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                  Tentang RedHelp
                </h2>
                <p class="mt-6 text-gray-600 leading-7">
                  <span className="ml-12">
                    Redhelp adalah sebuah platform yang hadir untuk
                    berkolaborasi
                  </span>
                  dan mendukung program Palang Merah Indonesia (PMI) dalam
                  menyelesaikan permasalahan kekurangan darah di Indonesia.
                  Melalui Redhelp, kami ingin mempermudah calon donor darah
                  untuk melakukan registrasi dan mendapatkan informasi tentang
                  kegiatan donor darah yang diadakan oleh PMI. Kami berkomitmen
                  untuk menjaga privasi dan keamanan data para pengguna kami.
                  Dengan adanya Redhelp, masyarakat Indonesia dapat lebih mudah
                  dan nyaman untuk berpartisipasi dalam kegiatan donor darah dan
                  membantu PMI dalam menyelesaikan permasalahan kekurangan darah
                  di Indonesia. Jangan ragu untuk bergabung dengan Redhelp dan
                  menjadi bagian dari gerakan donor darah di Indonesia!
                </p>
                <div className="mt-4">
                  <Link
                    spy={true}
                    smooth={true}
                    to="visi-misi"
                    className="btn btn-primary bg-primary hover:bg-black hover:text-white text-white dark:bg-secondary dark:hover:bg-slate-700 transition-all duration-900 border-none"
                    offset={-100}
                  >
                    Visi Dan Misi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hero-content text-center text-neutral-content pt-16 md:pt-0">
          <div className="w-full flex flex-col">
            <h1 className="mb-5 text-3xl font-bold text-white">
              {" "}
              Tentang RedHelp
            </h1>
            <p className="text-white text-sm md:text-base">
              Redhelp adalah sebuah platform yang hadir untuk berkolaborasi dan
              mendukung program Palang Merah Indonesia (PMI) dalam menyelesaikan
              permasalahan kekurangan darah di Indonesia. Melalui Redhelp, kami
              ingin mempermudah calon donor darah untuk melakukan registrasi dan
              mendapatkan informasi tentang kegiatan donor darah yang diadakan
              oleh PMI.
            </p>
            <p className="text-white mb-5 text-sm md:text-base">
              Kami berkomitmen untuk menjaga privasi dan keamanan data para
              pengguna kami. Dengan adanya Redhelp, masyarakat Indonesia dapat
              lebih mudah dan nyaman untuk berpartisipasi dalam kegiatan donor
              darah dan membantu PMI dalam menyelesaikan permasalahan kekurangan
              darah di Indonesia. Jangan ragu untuk bergabung dengan Redhelp dan
              menjadi bagian dari gerakan donor darah di Indonesia!
            </p>
            <div>
              <Link
                spy={true}
                smooth={true}
                to="visi-misi"
                className="btn btn-primary bg-primary hover:bg-white hover:text-black text-white dark:bg-secondary dark:hover:bg-slate-700 transition-all duration-900 border-none"
                offset={-100}
              >
                Visi Dan Misi
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      {/* Visi Misi */}
      <div className="w-full h-full hero bg-primary dark:bg-secondary flex flex-col">
        <div
          id="visi-misi"
          className="prose flex flex-col gap-3 hero-content mx-auto"
        >
          <AnimationOnScroll
            className="w-full max-w-xs md:max-w-none"
            animateIn="animate__fadeIn"
            duration={2}
          >
            <Splide
              aria-label="My Favorite Images"
              options={{
                rewind: true,
              }}
            >
              <SplideSlide className="md:px-6">
                <div className="flex flex-col items-center justify-center gap-3 w-full h-full ">
                  <h1 className="text-xl md:text-3xl text-white">Visi</h1>
                  <p className="flex flex-col gap-4 text-xs sm:text-sm md:text-base text-white ">
                    Visi Kami Menjadi platform yang memudahkan masyarakat
                    Indonesia untuk berpartisipasi dalam kegiatan donor darah
                    dan membantu PMI mencapai target jumlah donor darah yang
                    dibutuhkan setiap tahunnya.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide className="md:px-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h1 className="text-xl md:text-3xl text-white">Misi</h1>
                  <ol type="1" className="list-decimal list-inside">
                    <li className="text-white text-xs sm:text-sm md:text-base ">
                      Meningkatkan kesadaran masyarakat tentang pentingnya donor
                      darah secara rutin.
                    </li>
                    <li className="text-white text-xs sm:text-sm md:text-base ">
                      Menyediakan informasi yang akurat dan terpercaya tentang
                      donor darah dan manfaatnya bagi kesehatan.
                    </li>
                    <li className="text-white text-xs sm:text-sm md:text-base">
                      Menyediakan jadwal kegiatan donor darah dari PMI untuk
                      memudahkan calon donor darah dalam melakukan donasi.
                    </li>
                    <li className="text-white text-xs sm:text-sm md:text-base">
                      Menghubungkan PMI dengan para calon donor darah melalui
                      platform Redhelp.
                    </li>
                    <li className="text-white text-xs sm:text-sm md:text-base">
                      Membantu PMI dalam mengumpulkan dan mengelola data donor
                      darah secara efektif dan efisien.
                    </li>
                    <li className="text-white text-xs sm:text-sm md:text-base">
                      Menyajikan berita terkini seputar donor darah dan kegiatan
                      PMI.
                    </li>
                    <li className="text-white text-xs sm:text-sm md:text-base">
                      Menyelenggarakan event-event yang bertujuan untuk
                      meningkatkan kesadaran masyarakat tentang pentingnya donor
                      darah.
                    </li>
                  </ol>
                </div>
              </SplideSlide>
            </Splide>
          </AnimationOnScroll>
        </div>
        <div className="max-w-7xl w-full h-full flex flex-col pt-10 pb-16 gap-10 xl:gap-4">
          <h1 className="font-bold text-white text-3xl xl:text-5xl text-center">
            DEVELOPER
          </h1>
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
            }}
            className="mx-auto max-w-sm sm:max-w-md md:max-w-lg w-full h-full"
          >
            <SplideSlide className="md:px-4 pt-20 mr-5 h-full">
              <Developer
                img={"./yandramuslim.jpeg"}
                nama={"Coder"}
                ig={"@MusYandra"}
                link={"https://www.instagram.com/yandramuslim/"}
                panggilan={"Yandra"}
                deskripsi={
                  "Mentee Infinite Learning yang ingin menjadi frontend developer Reactjs"
                }
                follower={"264"}
                following={"333"}
              />
            </SplideSlide>
            <SplideSlide className="md:px-4 pt-20 mr-5 h-full">
              <Developer
                img={"./Budi.png"}
                nama={"Coder"}
                ig={"@budiiprayogaa"}
                link={"https://www.instagram.com/budiiprayogaa/"}
                panggilan={"Budi"}
                deskripsi={
                  "Mentee at Infinite Learning Studi Independent Batch 4"
                }
                follower={"253"}
                following={"178"}
              />
            </SplideSlide>
            <SplideSlide className="md:px-4 pt-20 mr-5 h-full">
              <Developer
                img={"./Nadila.jpg"}
                nama={"Project Manager"}
                ig={"@nadilaardd"}
                link={"https://www.instagram.com/nadilaardd/"}
                panggilan={"Nadila"}
                deskripsi={
                  "Mentee at Infinite Learning Studi Independent Batch 4"
                }
                follower={"1.256"}
                following={"1.006"}
              />
            </SplideSlide>
            <SplideSlide className="md:px-4 pt-20 mr-5 h-full">
              <Developer
                img={"./Salma1.jpg"}
                nama={"Designer"}
                ig={"@hy_saalma"}
                link={"https://www.instagram.com/hy_saalma/"}
                panggilan={"Salma"}
                deskripsi={
                  "Mentee at Infinite Learning Studi Independent Batch 4"
                }
                follower={"189"}
                following={"235"}
              />
            </SplideSlide>
            <SplideSlide className="md:px-4 pt-20 mr-5 h-full">
              <Developer
                img={"./Rizki.jpg"}
                nama={"Designer"}
                ig={"@kyraaa_17"}
                link={"https://www.instagram.com/kyraaa_17/"}
                panggilan={"Rizky"}
                deskripsi={
                  "Mentee at Infinite Learning Studi Independent Batch 4"
                }
                follower={"774"}
                following={"881"}
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="max-w-7xl w-full h-full flex flex-col pt-10 pb-16 gap-16">
          <h1 className="font-bold text-white text-3xl xl:text-5xl text-center">
            MENTOR GRUP
          </h1>
          <div className="max-w-7xl w-full flex flex-col md:flex-row pt-10 pb-16 gap-24 xl:gap-4 px-4">
            <Developer
              img={"./kak_aulia.jpeg"}
              nama={"Jessica Aulia Pardede"}
              ig={"@jscaulia_"}
              link={"https://www.instagram.com/jscaulia_/"}
              panggilan={"Aulia"}
              deskripsi={"Technical Mentor at Infinite Learning"}
              follower={"2.086"}
              following={"1.007"}
            />
            <Developer
              img={"./Kak_Jess.jpg"}
              nama={"jessicavnsa"}
              ig={"@jessicavnsa"}
              link={"https://www.instagram.com/jessicavnsa/"}
              panggilan={"Jessica"}
              deskripsi={"Professional Mentor at Infinite Learning"}
              follower={"702"}
              following={"583"}
            />
          </div>
        </div>
      </div>

      {/* Contact US */}
      <div className="bg-white dark:bg-accent hero">
        <div className="max-w-7xl w-full h-full flex flex-col py-8 gap-10 px-5">
          <h1 className="text-center text-4xl font-bold">Hubungi Kami</h1>
          <div className="w-full flex flex-col md:flex-row items-center gap-14">
            <AnimationOnScroll
              animateIn="animate__zoomIn"
              className="w-full h-full md:w-1/2 max-w-[700px] bg-primary dark:bg-secondary p-8 lg:p-8 rounded-xl shadow-2xl"
            >
              <h1 className="text-white text-center text-3xl font-bold mb-8">
                Berikan Pesan
              </h1>
              <form
                ref={form}
                onSubmit={sendEmail}
                autoComplete="off"
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="nama_lengkap"
                    className=" block text-base font-medium text-white"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama_lengkap"
                    id="nama_lengkap"
                    placeholder="Masukkan Nama Lengkap"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md dark:text-black"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className=" block text-base font-medium text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="contoh@domain.com"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md invalid:text-red-500 dark:text-black"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className=" block text-base font-medium text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Masukkan subject"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md dark:text-black"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className=" block text-base font-medium text-white"
                  >
                    Pesan
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Masukkan Pesan"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md dark:text-black"
                    required
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-primary px-8 bg-primary text-white  hover:bg-white hover:text-black dark:bg-accent dark:hover:bg-slate-700 transition-all duration-900 border-none">
                    Submit
                  </button>
                </div>
              </form>
            </AnimationOnScroll>

            <div className="flex flex-col items-center justify-center md:w-1/2 w-full h-full gap-5">
              <h1 className="font-bold text-xl md:text-3xl mb-10 text-center">
                AYO PUBLIKASI EVENT DONOR DARAH DENGAN REDHELP
              </h1>
              <div className="gap-10 mb-36 flex flex-row ">
                <AnimationOnScroll animateIn="animate__rollIn">
                  <a
                    href="https://www.instagram.com/palangmerah_indonesia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./instagram.png" />
                  </a>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInDown">
                  <a
                    href="mailto:contoh@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./gmail.png" />
                  </a>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__slideInUp">
                  <a
                    href="https://wa.me/089519113444"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./whatsapp.png" />
                  </a>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomInDown">
                  <a
                    href="https://twitter.com/jokowi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./twitter.png" />
                  </a>
                </AnimationOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lokasi */}
      <div className="hero bg-white dark:bg-accent">
        <div className="max-w-7xl w-full pb-28 flex flex-col gap-8 px-4 ">
          <h1 className="font-bold text-4xl text-center">Lokasi Kami</h1>
          <AnimationOnScroll animateIn="animate__zoomIn">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2411065018981!2d104.10047471523288!3d1.185416266300598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da27e2a4951e67%3A0xb4fde627f3a44477!2sNongsa%20Digital%20Park!5e0!3m2!1sen!2sid!4v1681683085390!5m2!1sen!2sid"
              className="rounded-xl w-full h-96"
            />
          </AnimationOnScroll>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tentang;
