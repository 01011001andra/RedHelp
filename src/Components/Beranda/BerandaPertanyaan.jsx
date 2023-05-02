import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const BerandaPertanyaan = () => {
  const pertanyaan = [
    {
      tabIndex: 0,
      title: "Apa Itu RedHelp?",
      content:
        "RedHelp adalah sebuah platform kemanusiaan yang berfokus pada membantu orang-orang yang membutuhkan donor darah darurat di Indonesia. RedHelp memfasilitasi koordinasi antara pendonor darah dan pihak rumah sakit atau keluarga pasien yang membutuhkan darah. Dengan menggunakan teknologi digital, RedHelp menyediakan sistem yang memudahkan proses pencarian dan pengiriman darah, serta memastikan keamanan dan kualitas darah yang disumbangkan. Selain itu, RedHelp juga memberikan edukasi dan promosi mengenai pentingnya donor darah, serta mengadakan kampanye donor darah untuk meningkatkan kesadaran masyarakat tentang pentingnya donor darah. RedHelp didirikan oleh sekelompok mahasiswa yang peduli dengan krisis donor darah di Indonesia dan berupaya untuk memberikan solusi inovatif untuk mengatasi masalah tersebut.",
    },
    {
      tabIndex: 1,
      title: "Apakah RedHelp kerjasama dengan PMI?",
      content:
        "Untuk saat ini RedHelp belum bekerjasama dengan PMI dikarenakan RedHelp masih berada pada tahap pengembangan ",
    },
    {
      tabIndex: 2,
      title:
        "Bagaimana RedHelp membantu dalam mencari donor darah yang dibutuhkan dengan cepat?",
      content:
        "RedHelp membantu dalam mencari donor darah yang dibutuhkan dengan cepat melalui platform digitalnya yang memungkinkan para pendonor darah untuk terhubung langsung dengan pihak yang membutuhkan darah secara real-time.",
    },
    {
      tabIndex: 3,
      title:
        "Bagaimana cara menampilkan  data stock darah pada aplikasi RedHelp?",
      content:
        "Untuk menampilkan data stock darah pada Website RedHelp, User harus melakukan login terlebih dahulu lalu setelah user melakukan login. User bisa menuju ke halaman stock darah lalu setalah itu user dapat mengklik tulisan lihat disini untuk melihat data stock darah yang lebih detail",
    },
  ];
  return (
    <div className="hero-content flex flex-col w-full">
      <h1 className="text-primary  text-2xl md:text-4xl font-bold mb-8 text-center">
        Pertanyaan yang Sering ditanyakan
      </h1>
      {pertanyaan.map((item, index) => (
        <AnimationOnScroll
          duration={1}
          animateIn="animate__flipInX"
          key={index}
          className="w-full"
        >
          <div
            key={item.tabIndex}
            tabIndex={item.tabIndex}
            className="collapse collapse-arrow border border-base-300 rounded-box w-full shadow-lg"
          >
            <div className="collapse-title text-base xl:text-xl font-medium">
              {item.title}
            </div>
            <div className="collapse-content">
              <p className="text-base">{item.content}</p>
            </div>
          </div>
        </AnimationOnScroll>
      ))}
    </div>
  );
};

export default BerandaPertanyaan;
