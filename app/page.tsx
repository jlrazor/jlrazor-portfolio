"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const [mouseX, setMouseX] = useState(50);
  const [activeCategory, setActiveCategory] = useState("Aucun");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(25);

  const socialLinks = {
    twitter: "https://x.com/JLRazooor",
    instagram: "https://www.instagram.com/jlrazor/",
    discord: "https://discord.gg/ayGn9wnXVp",
    tiktok: "https://www.tiktok.com/@jlrazor",
    twitch: "https://www.twitch.tv/jlrazooor",
    mail: "https://mail.google.com/mail/?view=cm&fs=1&to=cotteallan30@gmail.com",
  };

  const services = [
    ["Logo Design", "Création de logos uniques et modernes."],
    ["Cover Art", "Covers rap, album, YouTube et Spotify."],
    ["Esport Design", "Affiches roster, tournoi et branding."],
    ["3D Design", "Rendus 3D gaming et esport premium."],
  ];

  const projects = [
    { title: "Vøïz", type: "Logo", category: "Logos", image: "/voizv3_2.png" },
    { title: "V", type: "Logo", category: "Logos", image: "/Nouveau_projet_5.png" },
    { title: "Razor", type: "Logo", category: "Logos", image: "/razor-1.png" },

    { title: "Rise Up", type: "Affiche", category: "Affiches", image: "/rise_up_3.png" },
    { title: "T9 Banner", type: "Affiche", category: "Affiches", image: "/banniere_final_t9_1.png" },
    { title: "Valorant", type: "Affiche", category: "Affiches", image: "/t9999_3-1.png" },
    { title: "Affiche RSC", type: "Affiche", category: "Affiches", image: "/lol_rsc_final_sans_les_point_1.png" },
    { title: "Arena RSC", type: "Affiche", category: "Affiches", image: "/Nouveau_projet_22.png" },
    { title: "RLCS", type: "Affiche", category: "Affiches", image: "/rscrlcs_2_1.png" },
    { title: "COD", type: "Affiche", category: "Affiches", image: "/cod_ma_version_1.png" },
    { title: "Kami", type: "Affiche", category: "Affiches", image: "/kami_rzr_2.png" },
    { title: "Maillot", type: "Affiche", category: "Affiches", image: "/fffff.png" },

    { title: "3D RSC 1", type: "3D", category: "3D", image: "/3x1.png" },
    { title: "3D RSC 2", type: "3D", category: "3D", image: "/3x2.png" },
    { title: "3D RSC 3", type: "3D", category: "3D", image: "/3x3.png" },
    { title: "3D RSC 4", type: "3D", category: "3D", image: "/3x4.png" },
    { title: "Showroom 01", type: "3D", category: "3D", image: "/1h.png" },
    { title: "Showroom 02", type: "3D", category: "3D", image: "/1h2.png" },
    { title: "Showroom 03", type: "3D", category: "3D", image: "/1h3.png" },
    { title: "Fennec JL", type: "3D", category: "3D", image: "/jlfennec5-1.png" },
    { title: "Workers 1", type: "3D", category: "3D", image: "/theworkersrendu2.png" },
    { title: "Workers 2", type: "3D", category: "3D", image: "/theworkersrendu3.png" },
    { title: "TodoBew 1", type: "3D", category: "3D", image: "/todobewrender1.png" },
    { title: "TodoBew 2", type: "3D", category: "3D", image: "/todobewrender3.png" },
    { title: "Fennec JL Wallpaper", type: "3D", category: "3D", image: "/fennecfront.png" },
    { title: "JL White Gold", type: "3D", category: "3D", image: "/white_gold.png" },
    { title: "JL Gold", type: "3D", category: "3D", image: "/gold.png" },
    { title: "JL Inver", type: "3D", category: "3D", image: "/inver.png" },
    { title: "JL Rose 1", type: "3D", category: "3D", image: "/jlrose6.png" },
    { title: "JL Rose 2", type: "3D", category: "3D", image: "/jlrose5.png" },
    { title: "JL Rose 3", type: "3D", category: "3D", image: "/jlrose4.png" },
    { title: "JL Rose 4", type: "3D", category: "3D", image: "/jlrose3.png" },
    { title: "JL Rose 5", type: "3D", category: "3D", image: "/jlrose2.png" },
    { title: "JL Rose 6", type: "3D", category: "3D", image: "/jlrose.png" },
    { title: "JL Blue", type: "3D", category: "3D", image: "/sssss.png" },

    { title: "No Flaws", type: "Cover", category: "Covers", image: "/image75.png" },
    { title: "Punchline", type: "Cover", category: "Covers", image: "/image4.png" },
    { title: "C'est Mort", type: "Cover", category: "Covers", image: "/444.png" },
    { title: "No Cap", type: "Cover", category: "Covers", image: "/nocapfreeze.png" },
    { title: "BigFat RIP", type: "Cover", category: "Covers", image: "/bigfatrip_2.png" },
    { title: "Sans Raccourci", type: "Cover", category: "Covers", image: "/Nouveau_projet_13.png" },
    { title: "Raison D'être", type: "Cover", category: "Covers", image: "/blicky_raison_ytb.png" },
    { title: "Zombie", type: "Cover", category: "Covers", image: "/zombie.png" },
    { title: "C'est pas sa faute", type: "Cover", category: "Covers", image: "/Nouveau_projet_32.png" },
    { title: "OSNA Malo", type: "Cover", category: "Covers", image: "/Nouveau_projet_38.png" },
    { title: "Piano Part2", type: "Cover", category: "Covers", image: "/Presentation_YouTube_Cover_ULM_1.png" },
    { title: "Glockboy", type: "Cover", category: "Covers", image: "/Presentation_YouTube_Cover_ULM_2.png" },
    { title: "BRAD AK47", type: "Cover", category: "Covers", image: "/Nouveau_projet_44.png" },
    { title: "Mon Del'", type: "Cover", category: "Covers", image: "/Cover_Mon_Del_Snow.png" },
  ];

  const featuredProjects = [projects[3], projects[5], projects[13], projects[31], projects[36]];
  const categories = ["Aucun", "Logos", "Affiches", "3D", "Covers"];

  const filteredProjects =
    activeCategory === "Aucun"
      ? []
      : projects.filter((project) => project.category === activeCategory);

  const selectedProject =
    selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  function handleNameMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setMouseX(x);
  }

  function previousImage() {
    if (selectedIndex === null || filteredProjects.length === 0) return;
    setSelectedIndex(selectedIndex === 0 ? filteredProjects.length - 1 : selectedIndex - 1);
  }

  function nextImage() {
    if (selectedIndex === null || filteredProjects.length === 0) return;
    setSelectedIndex(selectedIndex === filteredProjects.length - 1 ? 0 : selectedIndex + 1);
  }

  useEffect(() => {
    const loader = setTimeout(() => setIsLoading(false), 1400);

    function onScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(loader);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const carousel = setInterval(() => {
      setCarouselIndex((prev) =>
        prev === featuredProjects.length - 1 ? 0 : prev + 1
      );
    }, 2800);

    return () => clearInterval(carousel);
  }, [featuredProjects.length]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {isLoading && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black">
          <div className="text-center">
            <p className="text-5xl font-black tracking-tighter">
              jlrazor<span className="text-red-500">.</span>
            </p>
            <div className="mx-auto mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full animate-pulse bg-red-600" />
            </div>
          </div>
        </div>
      )}

      <audio ref={audioRef} loop>
        <source src="/music.wav" type="audio/wav" />
      </audio>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(239,68,68,0.22),transparent_32%)]" />

      <header
        className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-black/80 py-0 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-b border-white/5 bg-black/35 py-2 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-black">
            jlrazor<span className="text-red-500">.</span>
          </a>

          <div
            onMouseMove={handleNameMove}
            onMouseLeave={() => setMouseX(50)}
            className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          >
            <span
              className="bg-clip-text text-xl font-black tracking-[0.4em] text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, white 0%, white ${mouseX - 14}%, #ef4444 ${mouseX}%, white ${mouseX + 14}%, white 100%)`,
              }}
            >
              razooor
            </span>
          </div>

          <nav className="hidden gap-8 text-xs uppercase tracking-widest text-white/60 md:flex">
            <a href="#services" className="hover:text-red-500">Services</a>
            <a href="#work" className="hover:text-red-500">Projets</a>
            <a href="#about" className="hover:text-red-500">À propos</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
              Créatif indépendant
            </p>

            <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
              Donner vie à vos <span className="text-red-500">idées</span>.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Logos, covers, affiches esport et créations 3D.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="rounded-2xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wider transition hover:bg-red-500">
                Voir mes projets
              </a>

              <a href="#contact" className="rounded-2xl border border-white/10 px-8 py-4 font-bold uppercase tracking-wider transition hover:border-red-500">
                Contact
              </a>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-4xl font-black text-red-500">+{projects.length}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
                  Projets
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-4xl font-black text-red-500">+15</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
                  Clients
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-4 shadow-[0_0_60px_rgba(239,68,68,0.18)]">
              <Image
                src={featuredProjects[carouselIndex].image}
                alt={featuredProjects[carouselIndex].title}
                width={1200}
                height={900}
                className="h-[520px] w-full rounded-[1.5rem] object-cover transition duration-700"
                priority
              />

              <div className="absolute inset-x-4 bottom-4 rounded-b-[1.5rem] bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <p className="text-2xl font-black">
                  {featuredProjects[carouselIndex].title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-red-500">
                  {featuredProjects[carouselIndex].type}
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    carouselIndex === index ? "w-8 bg-red-600" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-50 mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
            Services
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Des créations adaptées à chaque univers.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500/50"
            >
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
            Réalisations
          </p>

          <h2 className="mb-10 text-4xl font-black md:text-5xl">
            Mes créations.
          </h2>

          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-widest transition ${
                  activeCategory === category
                    ? "border-red-500 bg-red-600 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-red-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {activeCategory === "Aucun" ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
              <p className="text-xl font-bold text-white/70">
                Sélectionne un thème pour afficher mes créations.
              </p>
            </div>
          ) : (
            <div className="columns-1 gap-8 md:columns-2 xl:columns-3">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.title + project.image}
                  onClick={() => setSelectedIndex(index)}
                  className="group mb-8 block w-full break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-[#080808] text-left transition duration-300 hover:-translate-y-2 hover:border-red-500/70 hover:shadow-[0_0_35px_rgba(239,68,68,0.18)]"
                >
                  <div className="overflow-hidden bg-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="h-auto w-full transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black">{project.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-widest text-red-500">
                      {project.type}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
            À propos
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Je construis une image forte.
          </h2>

          <p className="mt-7 text-lg leading-8 text-white/60">
            Direction artistique, identité visuelle, covers, affiches esport et créations 3D pour rendre chaque projet unique.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {["Logo", "Cover", "Esport", "3D"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <p className="text-4xl font-black text-red-500">{item}</p>
              <p className="mt-3 text-sm text-white/50">Direction visuelle</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
              Contact
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Une idée ? On la transforme.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {Object.entries(socialLinks).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-red-500 px-8 py-5 text-sm font-bold uppercase tracking-widest transition hover:bg-red-600"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </section>
<audio ref={audioRef} loop>
  <source src="/music.mp3" type="audio/mpeg" />
</audio>

<div className="fixed bottom-5 right-5 z-[9999] w-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 shadow-[0_0_45px_rgba(239,68,68,0.28)] backdrop-blur-2xl">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.28),transparent_35%)]" />

  <div className="relative p-4">
    <div className="flex items-center gap-4">
      <div className="relative">
        <Image
          src="/music-cover.png"
          alt="FULL Bunny x Snow"
          width={72}
          height={72}
          className={`h-[72px] w-[72px] rounded-2xl object-cover shadow-[0_0_25px_rgba(239,68,68,0.25)] ${
            isPlaying ? "animate-pulse" : ""
          }`}
        />

        <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-black bg-red-600" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black">
          FULL Bunny x Snow
        </p>

        <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-red-500">
          {isPlaying ? "Now playing" : "Paused"}
        </p>
      </div>
    </div>

    <div className="mt-5 flex items-center gap-3">
      <button
        onClick={() => {
          if (!audioRef.current) return;

          if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
          } else {
            audioRef.current.volume = volume / 100;
            audioRef.current.play();
            setIsPlaying(true);
          }
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-lg font-black transition hover:scale-105 hover:bg-red-500"
      >
        {isPlaying ? "Ⅱ" : "▶"}
      </button>

      <div className="flex-1">
        <div className="mb-2 flex justify-between text-[10px] uppercase tracking-widest text-white/40">
          <span>Volume</span>
          <span>{volume}%</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => {
            const newVolume = Number(e.target.value);

            setVolume(newVolume);

            if (audioRef.current) {
              audioRef.current.volume = newVolume / 100;
            }
          }}
          className="w-full accent-red-600"
        />
      </div>
    </div>

    <a
      href="https://www.youtube.com/watch?v=6jrbItiOotc"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 block rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.25em] text-white/60 transition hover:border-red-500 hover:bg-red-600 hover:text-white"
    >
      Écouter sur YouTube
    </a>
  </div>
</div>
 
    </main>
  );
}