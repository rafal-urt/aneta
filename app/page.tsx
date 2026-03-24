import Image from "next/image";
import {
  BookOpen,
  FileText,
  Shield,
  Users,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle,
  GraduationCap,
  Award,
  Briefcase,
  Clock,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: BookOpen,
    title: "Kompleksowa obsługa księgowa",
    desc: "Prowadzenie pełnej księgowości dla JDG, niezależnie od wybranej formy opodatkowania.",
  },
  {
    icon: FileText,
    title: "Obsługa podatkowa",
    desc: "Sporządzanie i terminowe składanie deklaracji podatkowych (PIT, VAT) oraz plików JPK. Pomoc w wyborze optymalnej formy opodatkowania.",
  },
  {
    icon: Shield,
    title: "Obsługa ZUS",
    desc: "Kompleksowe rozliczanie składek ZUS, w tym obsługa ulg dla nowych firm (Ulga na Start, preferencyjne składki) oraz pomoc w kontaktach z ZUS.",
  },
  {
    icon: Users,
    title: "Obsługa kadrowa",
    desc: "Prowadzenie pełnej dokumentacji pracowniczej, rozliczanie wynagrodzeń oraz sporządzanie deklaracji podatkowo-składkowych.",
  },
  {
    icon: MessageSquare,
    title: "Doradztwo i wsparcie",
    desc: "Bieżące konsultacje w sprawach finansowo-księgowych, reprezentowanie przed urzędami oraz pomoc przy zakładaniu, zawieszaniu i zamykaniu działalności.",
  },
];

const forWhom = [
  { icon: Briefcase, label: "Przedsiębiorcy prowadzący JDG" },
  { icon: Users, label: "Specjaliści pracujący w modelu B2B" },
  { icon: TrendingDown, label: "Osoby rozpoczynające drogę w biznesie" },
];

const qualifications = [
  { icon: GraduationCap, label: "SGH — Finanse i rachunkowość" },
  { icon: GraduationCap, label: "UW WPiA — Prawo finansowe" },
  { icon: Award, label: "Certyfikat samodzielnego księgowego" },
  { icon: Clock, label: "7 lat doświadczenia zawodowego" },
];

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16 bg-cream"
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(107,124,101,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage-mist border border-sage-light/40 text-sage-dark text-xs font-medium tracking-wide px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
              100% online
            </div>

            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text leading-tight mb-6"
            >
              Księgowość dla&nbsp;JDG, która oszczędza{" "}
              <span className="italic text-sage-dark">Twój czas i nerwy</span>
            </h1>

            <p className="text-text-muted leading-relaxed text-lg mb-10 max-w-xl">
              Prowadzę księgowość jednoosobowych działalności gospodarczych
              w sposób prosty, bezpieczny i terminowy. Dbam o podatki, dokumenty
              i kontakty z urzędami, dzięki czemu możesz skupić się na
              rozwijaniu firmy zamiast na przepisach. Wszystkie usługi świadczę
              w 100% online — współpracujesz ze mną wygodnie z dowolnego
              miejsca w Polsce i za granicą.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-sage-dark text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-sage-deeper transition-colors duration-200"
              >
                Zapytaj o wycenę
                <ArrowRight size={16} />
              </a>
              <a
                href="#uslugi"
                className="inline-flex items-center justify-center gap-2 border border-stone-light text-text-soft px-8 py-4 rounded-full text-sm font-medium hover:border-sage hover:text-sage-dark transition-colors duration-200"
              >
                Zobacz zakres usług
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              {[
                "7 lat doświadczenia",
                "Certyfikowany księgowy",
                "SGH + UW WPiA",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle size={15} className="text-sage flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero photo */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/gfx/aneta_1.png"
                alt="Aneta Bedyńska — księgowa, ekspert ds. rachunkowości i podatków"
                fill
                className="object-cover object-top"
                sizes="50vw"
                priority
              />
              {/* Subtle gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(250,249,246,0.6) 0%, transparent 100%)" }}
                aria-hidden="true"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-5 -left-6 bg-cream rounded-2xl shadow-md border border-stone-light px-6 py-4">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {[
                  { val: "7 lat", label: "doświadczenia" },
                  { val: "100%", label: "online" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-xl text-sage-dark leading-none mb-0.5">{stat.val}</p>
                    <p className="text-xs text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DLA KOGO ─── */}
      <section id="dla-kogo" className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs tracking-widest uppercase text-sage font-medium mb-4">
              Dla kogo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
              Dla kogo są moje usługi
            </h2>
            <div className="w-12 h-0.5 bg-sage mb-14" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {forWhom.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="bg-cream rounded-2xl p-8 border border-stone-light hover:border-sage-light hover:shadow-sm transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-sage-mist flex items-center justify-center mb-5">
                      <Icon size={20} className="text-sage-dark" />
                    </div>
                    <p className="text-text-soft font-medium leading-snug">{item.label}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ZAKŁADANIE DZIAŁALNOŚCI ─── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="text-xs tracking-widest uppercase text-sage font-medium mb-4">
                Nowe firmy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-text leading-tight mb-6">
                Zakładanie działalności{" "}
                <span className="italic text-sage-dark">gospodarczej</span>
              </h2>
              <div className="w-12 h-0.5 bg-sage mb-8" />
              <p className="text-text-muted leading-relaxed text-base">
                Pomagam przyszłym przedsiębiorcom bezpiecznie i świadomie
                rozpocząć działalność. Przeprowadzam przez cały proces
                rejestracji krok po kroku, wyjaśniam formalności prostym
                językiem oraz pomagam wybrać najkorzystniejszą formę
                opodatkowania dopasowaną do rodzaju działalności i planowanych
                przychodów. Dzięki temu startujesz z dobrze ustawionymi
                podatkami i bez ryzyka kosztownych błędów na początku biznesu.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 mt-8 text-sage-dark text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Zapytaj o pomoc przy rejestracji
                <ArrowRight size={15} />
              </a>
            </ScrollReveal>

            {/* Steps */}
            <ScrollReveal delay={2}>
              <div className="space-y-4">
                {[
                  { n: "01", title: "Rejestracja w CEIDG", desc: "Krok po kroku przez cały proces rejestracji działalności." },
                  { n: "02", title: "Wybór formy opodatkowania", desc: "Analiza i dobór optymalnego rozwiązania do Twojej sytuacji." },
                  { n: "03", title: "Zgłoszenie do ZUS", desc: "Obsługa formalności ZUS i wdrożenie ulg dla nowych firm." },
                  { n: "04", title: "Gotowy do działania", desc: "Zaczynasz z prawidłowo ustawioną księgowością od pierwszego dnia." },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-5 p-5 rounded-2xl bg-stone-lighter border border-stone-light hover:border-sage-light transition-colors duration-200"
                  >
                    <span className="font-serif text-2xl text-sage/40 leading-none flex-shrink-0 pt-0.5">
                      {step.n}
                    </span>
                    <div>
                      <p className="font-medium text-text-soft text-sm mb-1">{step.title}</p>
                      <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── ZAKRES USŁUG ─── */}
      <section id="uslugi" className="py-20 md:py-28 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs tracking-widest uppercase text-sage font-medium mb-4">
              Oferta
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
              Zakres usług
            </h2>
            <div className="w-12 h-0.5 bg-sage mb-14" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal
                  key={service.title}
                  delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}
                >
                  <div
                    className={`bg-cream rounded-2xl p-7 border border-stone-light hover:border-sage-light hover:shadow-sm transition-all duration-300 h-full flex flex-col ${
                      i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage-mist flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon size={18} className="text-sage-dark" />
                    </div>
                    <h3 className="font-serif text-lg text-text mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed flex-1">
                      {service.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ULGI PODATKOWE — ciemna sekcja ─── */}
      <section className="py-20 md:py-28" style={{ background: "#3d4d38" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="text-xs tracking-widest uppercase text-sage-light font-medium mb-4">
                Optymalizacja
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream leading-tight mb-6">
                Ulgi podatkowe i optymalizacja{" "}
                <span className="italic" style={{ color: "#c8b99a" }}>rozliczeń</span>
              </h2>
              <div className="w-12 h-0.5 mb-8" style={{ background: "#c8b99a" }} />
              <p className="leading-relaxed text-base" style={{ color: "rgba(250,249,246,0.75)" }}>
                Analizuję możliwość zastosowania dostępnych ulg podatkowych
                i sprawdzam, z których rozwiązań możesz skorzystać legalnie
                i bezpiecznie. Dzięki temu nie przepłacasz podatków
                i wykorzystujesz wszystkie przysługujące Ci preferencje zgodnie
                z aktualnymi przepisami.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Ulga dla klasy średniej" },
                  { label: "Ulga IP Box" },
                  { label: "Ulga B+R" },
                  { label: "Ulga na start (ZUS)" },
                  { label: "Preferencyjne składki ZUS" },
                  { label: "Odliczenia od dochodu" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-xl px-4 py-3.5"
                    style={{ background: "rgba(250,249,246,0.07)", border: "1px solid rgba(250,249,246,0.1)" }}
                  >
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#8a9e82" }} />
                    <p className="text-sm" style={{ color: "rgba(250,249,246,0.8)" }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── O MNIE ─── */}
      <section id="o-mnie" className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Photo placeholder */}
            <ScrollReveal>
              <div className="relative">
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden">
                  <Image
                    src="/gfx/aneta_2.png"
                    alt="Aneta Bedyńska — ekspert ds. rachunkowości i podatków"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-cream rounded-2xl shadow-md border border-stone-light px-5 py-4 hidden md:block">
                  <p className="font-serif text-lg text-sage-dark">7 lat</p>
                  <p className="text-xs text-text-muted">doświadczenia</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal delay={2}>
              <div className="pt-2">
                <p className="text-xs tracking-widest uppercase text-sage font-medium mb-4">
                  O mnie
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-text leading-tight mb-6">
                  Aneta Bedyńska —{" "}
                  <span className="italic text-sage-dark">ekspert ds. rachunkowości i podatków</span>
                </h2>
                <div className="w-12 h-0.5 bg-sage mb-8" />

                <p className="text-text-muted leading-relaxed mb-6">
                  Jestem ekspertem ds. rachunkowości i podatków z 7-letnim
                  doświadczeniem zawodowym. Wykształcenie zdobywałam w Szkole
                  Głównej Handlowej na kierunku finanse i rachunkowość oraz na
                  Uniwersytecie Warszawskim (WPiA) na kierunku prawo finansowe.
                </p>
                <p className="text-text-muted leading-relaxed mb-6">
                  Posiadam certyfikat samodzielnego księgowego, a na co dzień
                  pracuję jako ekspert ds. rozliczeń podatkowych w dużej firmie
                  z branży medycznej. Dzięki temu łączę praktyczne doświadczenie
                  biznesowe z aktualną wiedzą prawnopodatkową, co przekłada się
                  na realne bezpieczeństwo moich klientów.
                </p>

                {/* Qualifications */}
                <div className="space-y-3 mt-8">
                  {qualifications.map((q) => {
                    const Icon = q.icon;
                    return (
                      <div key={q.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sage-mist flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-sage-dark" />
                        </div>
                        <p className="text-sm text-text-soft">{q.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── KONTAKT ─── */}
      <section id="kontakt" className="py-20 md:py-28 bg-stone-lighter">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-widest uppercase text-sage font-medium mb-4">
              Kontakt
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-text mb-5">
              Zapytaj o wycenę księgowości
            </h2>
            <p className="text-text-muted leading-relaxed">
              Napisz lub zadzwoń — przygotuję ofertę dopasowaną do Twojej
              działalności i liczby dokumentów.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Phone */}
            <ScrollReveal delay={1}>
              <a
                href="tel:+48XXXXXXXXX"
                className="group flex items-center gap-5 bg-cream rounded-2xl p-7 border border-stone-light hover:border-sage-light hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-mist flex items-center justify-center flex-shrink-0 group-hover:bg-sage-dark transition-colors duration-300">
                  <Phone size={20} className="text-sage-dark group-hover:text-cream transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Telefon</p>
                  {/* ZMIEŃ: numer telefonu */}
                  <p className="font-medium text-text">+48 XXX XXX XXX</p>
                  <p className="text-xs text-text-muted">Aneta Bedyńska</p>
                </div>
              </a>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={2}>
              <a
                href="mailto:kontakt@aneta-bedynska.pl"
                className="group flex items-center gap-5 bg-cream rounded-2xl p-7 border border-stone-light hover:border-sage-light hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-mist flex items-center justify-center flex-shrink-0 group-hover:bg-sage-dark transition-colors duration-300">
                  <Mail size={20} className="text-sage-dark group-hover:text-cream transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide mb-1">E-mail</p>
                  {/* ZMIEŃ: adres e-mail */}
                  <p className="font-medium text-text">kontakt@aneta-bedynska.pl</p>
                </div>
              </a>
            </ScrollReveal>
          </div>

          {/* Note */}
          <ScrollReveal delay={3}>
            <p className="text-center text-xs text-text-muted mt-10">
              Odpowiadam zwykle w ciągu 24 godzin w dni robocze.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-cream-dark border-t border-stone-light py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© 2026 Aneta Bedyńska — Biuro Rachunkowe</p>
          <div className="flex items-center gap-6">
            {/* ZMIEŃ: dodaj linki do polityki prywatności i regulaminu */}
            <a href="#" className="hover:text-sage-dark transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="hover:text-sage-dark transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
