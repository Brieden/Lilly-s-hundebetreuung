
import React, { useState, useEffect } from 'react';
import { 
  Dog, 
  MapPin, 
  Home, 
  Heart, 
  Calendar, 
  CheckCircle2, 
  Menu, 
  X,
  Bone,
  Trees,
  Sofa,
  ArrowRight
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-amber-600 p-2 rounded-full">
              <Dog className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-stone-800 tracking-tight">Lillys <span className="text-amber-600">Pack</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#über-uns" className="hover:text-amber-600 transition-colors">Über Uns</a>
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#vorteile" className="hover:text-amber-600 transition-colors">Warum wir?</a>
            <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition-all shadow-md">
              Anfrage schicken
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 py-4 px-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#über-uns" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Über Uns</a>
          <a href="#services" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#vorteile" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Warum wir?</a>
          <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold">Kontakt aufnehmen</button>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-6">
              🐾 Wuff! Hier spricht Lilly
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1] mb-6">
              Pfoten hoch in <span className="italic text-amber-600">Zürich!</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-xl">
              Ich bin Lilly – und ich teile meinen Papa, mein Sofa und meine Abenteuer auf dem Üetliberg mit deinem Hund. Professionell betreut, hündisch geliebt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-200">
                Komm in mein Rudel <ArrowRight size={20} />
              </button>
              <div className="flex items-center justify-center gap-2 text-stone-500 font-medium">
                <MapPin size={18} /> Zürich & Quartier Bachwiesen
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-3xl -rotate-2 -z-10 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=800" 
              alt="Glücklicher Hund" 
              className="rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">5y</div>
              <div>
                <p className="text-xs text-stone-400 font-bold uppercase">Alter</p>
                <p className="font-bold">Lillyberta Brieden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutMe: React.FC = () => {
  return (
    <section id="über-uns" className="py-24 bg-white border-y border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-8 text-stone-900">Über mich & meinen Papa</h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                Ich bin <span className="font-bold text-stone-900 italic">Lillyberta Brieden Carranza</span> – kurz Lilly. Ich bin 5 Jahre alt und lebe seit drei Jahren als stolze Zürcherin. Wenn ich nicht gerade Bällen hinterherjage (meine absolute Leidenschaft!), bin ich die beste Aufpasserin, die man sich vorstellen kann.
              </p>
              <p>
                Mein Papa ist allerdings der wahre Star. Er arbeitet im <span className="font-bold text-stone-900">Homeoffice</span>, was bedeutet: Er ist eigentlich immer da. Er hat eine magische Gabe, genau zu wissen, wann ein Hund ein Leckerli oder eine Krauleinheit braucht.
              </p>
              <p>
                Lange bevor wir in die Hundeschule gingen, wusste er schon alles über <span className="font-bold text-amber-600 underline decoration-amber-200 underline-offset-4">positive Verstärkung</span>. Bei uns wird nicht geschimpft, sondern gelobt – meistens mit etwas sehr Leckerem. Ich mag fast alle Hunde und bin sehr sozial, solange du nicht versuchst, meinen Lieblingsball zu stehlen (Spaß, den teile ich auch!).
              </p>
            </div>
            <div className="mt-10 flex gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                  <Bone className="text-amber-600" />
                </div>
                <p className="text-xs font-bold text-stone-400 uppercase">Ball-Junkie</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                  <Heart className="text-amber-600" />
                </div>
                <p className="text-xs font-bold text-stone-400 uppercase">Schmuserin</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-2 mx-auto">
                  <CheckCircle2 className="text-amber-600" />
                </div>
                <p className="text-xs font-bold text-stone-400 uppercase">Profi-Papa</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
             <img 
              src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=400" 
              alt="Hund im Park" 
              className="rounded-2xl shadow-md h-full object-cover"
            />
             <div className="space-y-4">
               <img 
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=400" 
                alt="Zuhause" 
                className="rounded-2xl shadow-md aspect-square object-cover"
              />
               <img 
                src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400" 
                alt="Gemütlich" 
                className="rounded-2xl shadow-md aspect-square object-cover"
              />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-stone-900 italic underline decoration-amber-600 underline-offset-8">Meine Services</h2>
          <p className="text-lg text-stone-600">
            Ich biete dir (und deinem Menschen) genau das an, was wir Hunde am meisten lieben: Action draußen und Entspannung drinnen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Trees className="text-amber-600 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900">Gassi-Service</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Keine Lust auf langweilige Runden um den Block? Wir erobern die <span className="font-bold">Bachwiesen</span> und den <span className="font-bold">Üetliberg</span>! Papa holt deinen Hund direkt im Quartier oder bei euch zu Hause ab. Ich komme natürlich mit (im Sommer trage ich mein kurzes Fell für extra lange Touren!), und wir schnüffeln uns durch Zürichs schönste Ecken.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-stone-700 font-medium">
                <CheckCircle2 size={18} className="text-amber-600" /> Abhol- & Bringservice
              </li>
              <li className="flex items-center gap-3 text-stone-700 font-medium">
                <CheckCircle2 size={18} className="text-amber-600" /> Bachwiesen/Üetliberg
              </li>
              <li className="flex items-center gap-3 text-stone-700 font-medium">
                <CheckCircle2 size={18} className="text-amber-600" /> Kleine, harmonische Gruppen
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Sofa className="text-amber-600 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-stone-900">Tagesbetreuung</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Bei uns gibt es keine Zwinger – nur Familienanschluss. In unserer gemütlichen Wohnung darf dein Hund auf das <span className="font-bold">Sofa oder sogar ins Bett</span> (wenn das für dich okay ist!). Da Papa im Homeoffice arbeitet, ist er immer da. Wir schauen aus dem Fenster, spielen im Flur und halten ausgiebige Mittagsschläfchen.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-stone-700 font-medium">
                <CheckCircle2 size={18} className="text-amber-600" /> 100% Homeoffice-Aufmerksamkeit
              </li>
              <li className="flex items-center gap-3 text-stone-700 font-medium">
                <CheckCircle2 size={18} className="text-amber-600" /> Sofa-Erlaubnis inklusive
              </li>
              <li className="flex items-center gap-3 text-stone-700 font-medium">
                <CheckCircle2 size={18} className="text-amber-600" /> Maximal 2 Gast-Hunde
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs: React.FC = () => {
  return (
    <section id="vorteile" className="py-24 bg-amber-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Warum dein Hund hier glücklich wird</h2>
          <p className="text-amber-100 text-lg max-w-xl mx-auto">
            Gute Gründe, warum ich (Lilly) und mein Papa die perfekte Wahl für deinen Vierbeiner sind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
              <Bone className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 italic">Positive Verstärkung</h3>
            <p className="text-amber-50">
              Papa ist ein Profi im Belohnen. Wir nutzen Leckerlis und viel Lob, um gute Laune und gute Manieren zu fördern. Hier fühlt sich jeder Hund wie ein Champion.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
              <Calendar className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 italic">Maximale Flexibilität</h3>
            <p className="text-amber-50">
              Egal ob du deinen Liebling bringen willst oder wir ihn abholen sollen – wir finden eine Lösung, die in deinen Zeitplan passt. Zürich-Quartier-Service inklusive!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
              <Heart className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 italic">Echte Sozialisierung</h3>
            <p className="text-amber-50">
              Bei uns gibt es echte Hundefreundschaften. Ich bin super sozial und freue mich immer über Besuch. Dein Hund ist hier nie allein, sondern Teil meines Packs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center space-x-2">
            <div className="bg-amber-600 p-2 rounded-full">
              <Dog className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Lillys <span className="text-amber-600">Pack</span></span>
          </div>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#über-uns" className="hover:text-white transition-colors">Über Lilly</a>
            <a href="#services" className="hover:text-white transition-colors">Betreuung</a>
            <a href="#vorteile" className="hover:text-white transition-colors">Anfahrt</a>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Lillyberta Brieden Carranza & Papa. Alle Pfotenabdrücke vorbehalten.</p>
          <p className="mt-2 italic">Website erzählt von Lilly, getippt von ihrem menschlichen Assistenten.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <WhyUs />
        <section className="py-24 bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-stone-200 relative">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-amber-600 p-4 rounded-full shadow-lg border-4 border-stone-50">
                 <Heart className="text-white w-8 h-8" />
               </div>
               <h2 className="text-3xl font-bold mb-6 text-stone-900 italic">Lust auf ein Schnupper-Gassi?</h2>
               <p className="text-lg text-stone-600 mb-10">
                 Schreib meinem Papa eine Nachricht! Ich kann es kaum erwarten, dich kennenzulernen und vielleicht ein paar Bälle mit dir zu teilen.
               </p>
               <button className="bg-stone-900 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-stone-800 transition-all shadow-lg">
                 Sende uns ein Wuff 🐾
               </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
