"use client";

import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [mouseX, setMouseX] = useState(50);
  const [activeCategory, setActiveCategory] = useState("Aucun");

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

  const categories = ["Aucun", "Logos", "Affiches", "3D", "Covers"];

  const filteredProjects =
    activeCategory === "Aucun"
      ? []
      : projects.filter((project) => project.category === activeCategory);

  function handleNameMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setMouseX(x);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(239,68,68,0.22),transparent_32%)]" />

      <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-white/10 bg-black/70 backdrop-blur-xl">
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
            <a href="#services">Services</a>
            <a href="#work">Projets</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
        <div className="w-full text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-red-500">
            Créatif indépendant
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Donner vie à vos <span className="text-red-500">idées</span>.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/60">
            Logos, covers, affiches esport et créations 3D.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a href="#work" className="rounded-2xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wider transition hover:bg-red-500">
              Voir mes projets
            </a>

            <a href="#contact" className="rounded-2xl border border-white/10 px-8 py-4 font-bold uppercase tracking-wider transition hover:border-red-500">
              Contact
            </a>
          </div>

          <div className="relative mt-24 flex justify-center">
            <div className="absolute h-[700px] w-[700px] rounded-full bg-red-600/20 blur-3xl" />
            <Image
              src="/logo.png"
              alt="logo"
              width={700}
              height={700}
              className="pointer-events-none relative z-10 object-contain"
              priority
            />
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
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
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
                onClick={() => setActiveCategory(category)}
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
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <div
                  key={project.title + project.image}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#080808] transition hover:-translate-y-2 hover:border-red-500/70"
                >
                  <div className="flex h-[420px] items-center justify-center bg-black p-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="max-h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black">{project.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-widest text-red-500">
                      {project.type}
                    </p>
                  </div>
                </div>
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

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/35">
        © 2026 jlrazor — Direction artistique & design graphique
      </footer>
    </main>
  );
}