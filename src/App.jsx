import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Check,
  Heart,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const talleres = [
    {
      titulo: "Transformando el dolor con sentido",
      modulos: [
        "El duelo y sus procesos",
        "El trabajo emocional",
        "Descubrir el potencial del espíritu",
        "Transformando el dolor con sentido",
      ],
      icon: "heart",
    },
    {
      titulo: "Cuando la vida te confronta",
      descripcion: "Herramientas existenciales para momentos de crisis",
      icon: "users",
    },
    {
      titulo: "Vivir con Sentido",
      descripcion: "Descubre el propósito en tu vida cotidiana",
      icon: "sparkles",
    },
  ];

  const maestros = [
    {
      nombre: "Miriam Herrera Vargas",
      titulo: "Logoterapeuta",
      credenciales:
        "Directora del Instituto Mexicano Humanista y Existencial AC. Miembro acreditado de la Asociación Internacional de Análisis Existencial y Logoterapia del Viktor Frankl Institute en Viena.",
    },
    {
      nombre: "Rubén González Vargas",
      titulo: "Psicólogo",
      credenciales:
        "Licenciado en Psicología de la Universidad del Iberoamericana. Maestría en Adicciones por el Instituto Kanankil. Práctica Privada en Psicoterapia desde 1993.",
    },
    {
      nombre: "José J. Karam Espósitos",
      titulo: "Psicólogo Clínico",
      credenciales:
        "Master of Science in Community Counseling en Western Carolina University. Supervisor Clínico y Consejero en Adicciones.",
    },
    {
      nombre: "Felipe Miramontes",
      titulo: "Especialista en Logoterapia",
      credenciales:
        "Terapeuta Grupal e Individual. Formador de Logoterapeutas. Expositor Internacional sobre Logoterapia y A.E.",
    },
    {
      nombre: "Fabricio de Souza Miranda Pereira",
      titulo: "Teólogo y Filósofo",
      credenciales:
        "Consejero en Logoterapia por el Instituto Dau de Perú. Labora en el Hospital Madre Teresa de Belo Horizonte Brasil.",
    },
    {
      nombre: "Alfonso Villareal Vidal",
      titulo: "Psicólogo",
      credenciales:
        "Licenciatura en Psicología por la Universidad Marista de Mérida. Maestría en Terapia Familiar. Consulta Privada en Terapia de Pareja e Individual.",
    },
    {
      nombre: "Claudia Ponce Góngora",
      titulo: "Psicóloga y Tanatóloga",
      credenciales:
        "Diplomada en Logoterapia. Diplomada en Duelo Normal y Complicado por el Instituto IPIR de Barcelona. Docente y Facilitadora de Duelo en consulta privada.",
    },
    {
      nombre: "Elisa Sánchez Márquez",
      titulo: "Psicóloga",
      credenciales:
        "Especialista en Orientación Vocacional. Psicoterapeuta y Orientadora Vocacional. Docente por más de 20 años.",
    },
    {
      nombre: "Cecilia Paredes Aldama",
      titulo: "Terapeuta",
      credenciales:
        "Maestra en Psicoterapia Individual y de Pareja. Especialidad en Logoterapia. Consulta privada, talleres y conferencias.",
    },
  ];

  const diplomadoModulos = [
    "Biografía de Viktor Frankl",
    "Antecedentes Filosóficos y Psicológicos de la Logoterapia",
    "Ontología del Ser",
    "Cura de Almas",
    "Libertad/Responsabilidad y Sentido de la Vida",
    "Sentido de Vida",
    "Muerte, Culpa y Sufrimiento",
    "Aplicación de la Logoterapia en la Familia",
    "Autotrascendencia",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegación */}
      <nav className="bg-[#303086] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold">LOGOTERAPIA</div>
              <div className="hidden md:block text-sm text-gray-200">
                Instituto Mexicano Humanista y Existencial A.C.
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="hover:text-[#f7b54f] transition">
                Inicio
              </a>
              <a href="#nosotros" className="hover:text-[#f7b54f] transition">
                Nosotros
              </a>
              <a href="#diplomado" className="hover:text-[#f7b54f] transition">
                Diplomado
              </a>
              <a href="#talleres" className="hover:text-[#f7b54f] transition">
                Talleres
              </a>
              <a href="#maestros" className="hover:text-[#f7b54f] transition">
                Maestros
              </a>
              <a href="#contacto" className="hover:text-[#f7b54f] transition">
                Contacto
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="md:hidden bg-[#252066] pb-4">
            <a
              href="#inicio"
              className="block px-4 py-2 hover:bg-[#3a3a9e]"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="block px-4 py-2 hover:bg-[#3a3a9e]"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#diplomado"
              className="block px-4 py-2 hover:bg-[#3a3a9e]"
              onClick={() => setMenuOpen(false)}
            >
              Diplomado
            </a>
            <a
              href="#talleres"
              className="block px-4 py-2 hover:bg-[#3a3a9e]"
              onClick={() => setMenuOpen(false)}
            >
              Talleres
            </a>
            <a
              href="#maestros"
              className="block px-4 py-2 hover:bg-[#3a3a9e]"
              onClick={() => setMenuOpen(false)}
            >
              Maestros
            </a>
            <a
              href="#contacto"
              className="block px-4 py-2 hover:bg-[#3a3a9e]"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-[#F5F1E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 bg-[#303086] bg-opacity-10 text-[#303086] rounded-full font-medium text-sm">
                ✨ Acreditación oficial del Instituto Viktor Frankl de Viena
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light text-[#303086] leading-tight">
                Transforma tu <span className="font-semibold italic">vida</span>
                <br />
                <span className="text-[#6B7B8C]">y descubre</span> tu sentido
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Acompaña procesos de crecimiento personal y profesional desde la
                logoterapia y el pensamiento existencial de Viktor Frankl
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#diplomado"
                  className="inline-flex items-center justify-center bg-[#303086] text-white px-8 py-4 rounded-full font-medium hover:bg-[#252066] transition-all hover:shadow-lg"
                >
                  Explorar Diplomado
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center border-2 border-[#303086] text-[#303086] px-8 py-4 rounded-full font-medium hover:bg-[#303086] hover:text-white transition-all"
                >
                  Comenzar ahora
                </a>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#303086] to-[#6B7B8C] rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-50">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🧘‍♀️</div>
                    <p className="text-lg font-light">
                      Coloca aquí una imagen inspiradora
                    </p>
                    <p className="text-sm mt-2">
                      (Persona en meditación, reflexión o conexión espiritual)
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f7b54f] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#303086] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#303086] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-light text-[#f7b54f]">
                  18+
                </div>
                <div className="text-gray-300 font-light">
                  Años de experiencia
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-light text-[#f7b54f]">
                  9
                </div>
                <div className="text-gray-300 font-light">
                  Maestros certificados
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-light text-[#f7b54f]">
                  500+
                </div>
                <div className="text-gray-300 font-light">
                  Vidas transformadas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section id="nosotros" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f7b54f] font-medium mb-4 tracking-wide uppercase text-sm">
              Nuestro Propósito
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#303086] mb-6">
              Un espacio de{" "}
              <span className="font-semibold italic">transformación</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acompañamos procesos humanos desde la profundidad del pensamiento
              existencial
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F5F1E8] to-[#e8dfd0] rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-[#303086] text-opacity-40">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🌱</div>
                    <p className="text-lg font-light">Imagen sugerida:</p>
                    <p className="text-sm mt-2">
                      Espacio de terapia acogedor, libros, o símbolo de
                      crecimiento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#303086] bg-opacity-10 rounded-2xl mb-4">
                  <Heart className="text-[#303086]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-[#303086] mb-4">
                  Misión
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Acompañar procesos humanos de crecimiento y formación
                  profesional, desde la logoterapia y el pensamiento
                  existencial, para ayudar a las personas a descubrir el sentido
                  en todas las circunstancias de la vida.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f7b54f] bg-opacity-10 rounded-2xl mb-4">
                  <Sparkles className="text-[#f7b54f]" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-[#303086] mb-4">
                  Visión
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Ser un referente en el sureste de México en formación y
                  acompañamiento humanista, promoviendo una vida con propósito,
                  libertad y responsabilidad.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="relative bg-gradient-to-br from-[#303086] to-[#4a4ab0] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
            <div className="relative p-12 lg:p-16 text-center">
              <div className="text-6xl text-[#f7b54f] mb-6">"</div>
              <p className="text-2xl lg:text-3xl font-light text-white mb-6 max-w-4xl mx-auto leading-relaxed italic">
                El ser humano siempre conserva la libertad de adoptar una
                actitud ante lo que vive, y en esa elección puede descubrir el
                sentido que lo sostiene
              </p>
              <p className="text-[#f7b54f] text-lg font-medium">
                — Viktor Frankl
              </p>
            </div>
          </div>

          {/* Accreditation */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F1E8] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#303086] rounded-2xl mb-6">
                <Check className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-[#303086] mb-3">
                Acreditación Internacional
              </h4>
              <p className="text-gray-600">Instituto Viktor Frankl de Viena</p>
            </div>

            <div className="bg-[#F5F1E8] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#303086] rounded-2xl mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-[#303086] mb-3">
                Clases Presenciales
              </h4>
              <p className="text-gray-600">En Mérida, Yucatán</p>
            </div>

            <div className="bg-[#F5F1E8] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#303086] rounded-2xl mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-[#303086] mb-3">
                Filosofía Frankliana
              </h4>
              <p className="text-gray-600">Conexión directa con la fuente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Diplomado */}
      <section id="diplomado" className="py-20 lg:py-32 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f7b54f] font-medium mb-4 tracking-wide uppercase text-sm">
              Formación Profesional
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#303086] mb-6">
              Diplomado en{" "}
              <span className="font-semibold italic">Logoterapia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Para quienes desean encontrar sentido y acompañar a otros a
              encontrarlo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-[#303086] mb-4">
                  Análisis Existencial y Logoterapia
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Integra a tu vida personal y práctica profesional el
                  pensamiento de Viktor Frankl enfocado a la búsqueda de
                  sentido. Una herramienta de transformación personal y
                  profesional.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#f7b54f] bg-opacity-20 rounded-xl flex items-center justify-center">
                      <span className="text-[#f7b54f] font-bold">📅</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#303086]">Inicio</p>
                      <p className="text-gray-600">26 de Septiembre</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#f7b54f] bg-opacity-20 rounded-xl flex items-center justify-center">
                      <span className="text-[#f7b54f] font-bold">⏰</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#303086]">Horario</p>
                      <p className="text-gray-600">Viernes 5 PM a 9 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#f7b54f] bg-opacity-20 rounded-xl flex items-center justify-center">
                      <span className="text-[#f7b54f] font-bold">⏱️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#303086]">Duración</p>
                      <p className="text-gray-600">
                        72 horas en 18 sesiones presenciales
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#contacto"
                className="block w-full bg-[#303086] text-white text-center py-4 rounded-2xl font-medium hover:bg-[#252066] transition-all hover:shadow-lg"
              >
                Solicitar Información
              </a>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#303086] to-[#6B7B8C] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-40">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-lg font-light">Imagen sugerida:</p>
                    <p className="text-sm mt-2">
                      Estudiantes en clase, libros de logoterapia, o certificado
                      del diplomado
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#f7b54f] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-3xl font-light text-[#303086] mb-8 text-center">
              <span className="font-semibold">Contenido</span> del Diplomado
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diplomadoModulos.map((modulo, index) => (
                <div key={index} className="group">
                  <div className="bg-[#F5F1E8] p-6 rounded-2xl hover:bg-[#303086] hover:text-white transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#303086] group-hover:bg-white rounded-xl flex items-center justify-center text-white group-hover:text-[#303086] font-bold transition-all">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <p className="text-gray-700 group-hover:text-white font-medium leading-relaxed transition-all">
                        {modulo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Talleres */}
      <section id="talleres" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f7b54f] font-medium mb-4 tracking-wide uppercase text-sm">
              Crecimiento Personal
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#303086] mb-6">
              Nuestros <span className="font-semibold italic">Talleres</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Espacios de reflexión y transformación desde la logoterapia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {talleres.map((taller, index) => (
              <div
                key={index}
                className="group bg-[#F5F1E8] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#6B7B8C] to-[#303086] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-40">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-3">
                        {taller.icon === "heart" && "💝"}
                        {taller.icon === "users" && "🤝"}
                        {taller.icon === "sparkles" && "✨"}
                      </div>
                      <p className="text-sm font-light">Imagen del taller</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#303086] to-transparent opacity-60"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#303086] mb-4 group-hover:text-[#f7b54f] transition-colors">
                    {taller.titulo}
                  </h3>

                  {taller.modulos ? (
                    <div className="space-y-3 mb-6">
                      {taller.modulos.map((modulo, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Check
                            className="text-[#f7b54f] flex-shrink-0 mt-1"
                            size={18}
                          />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {modulo}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {taller.descripcion}
                    </p>
                  )}

                  <a
                    href="#contacto"
                    className="inline-flex items-center text-[#303086] font-medium hover:text-[#f7b54f] transition group"
                  >
                    Más información
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#F5F1E8] to-[#e8dfd0] rounded-3xl p-12">
            <h3 className="text-2xl font-semibold text-[#303086] mb-4">
              ¿Listo para comenzar tu transformación?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestros talleres están diseñados para acompañarte en tu proceso
              de búsqueda de sentido
            </p>
            <a
              href="#contacto"
              className="inline-block bg-[#303086] text-white px-10 py-4 rounded-full font-medium hover:bg-[#252066] transition-all hover:shadow-lg"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Sección Maestros */}
      <section id="maestros" className="py-20 lg:py-32 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f7b54f] font-medium mb-4 tracking-wide uppercase text-sm">
              Nuestro Equipo
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#303086] mb-6">
              Maestros{" "}
              <span className="font-semibold italic">Certificados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Profesionales con formación internacional en logoterapia y
              análisis existencial
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {maestros.map((maestro, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#6B7B8C] to-[#303086] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-40">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-3">👤</div>
                      <p className="text-sm font-light">
                        Foto de {maestro.nombre.split(" ")[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#303086] mb-2 group-hover:text-[#f7b54f] transition-colors">
                    {maestro.nombre}
                  </h3>
                  <p className="text-[#f7b54f] font-medium mb-4 text-sm">
                    {maestro.titulo}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {maestro.credenciales}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Accreditation Banner */}
          <div className="relative bg-gradient-to-br from-[#303086] to-[#4a4ab0] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#f7b54f] rounded-2xl mb-6">
                <Check className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Acreditados Internacionalmente
              </h3>
              <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
                Todos nuestros maestros son miembros acreditados de la
                Asociación Internacional de Análisis Existencial y Logoterapia
                del Instituto Viktor Frankl de Viena
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#f7b54f] font-medium mb-4 tracking-wide uppercase text-sm">
              Comienza Tu Camino
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#303086] mb-6">
              Conecta con <span className="font-semibold italic">Nosotros</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#303086] mb-4">
                  ¿Listo para descubrir tu sentido?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Contáctanos para más información sobre nuestros programas de
                  formación en logoterapia y análisis existencial.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:9999476993"
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#303086] rounded-2xl flex items-center justify-center group-hover:bg-[#f7b54f] transition-all">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#303086] mb-1">
                      Teléfono / WhatsApp
                    </p>
                    <p className="text-gray-600 group-hover:text-[#f7b54f] transition-colors">
                      9999 47 69 93
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#303086] rounded-2xl flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#303086] mb-1">
                      Ubicación
                    </p>
                    <p className="text-gray-600">Mérida, Yucatán, México</p>
                  </div>
                </div>

                <a
                  href="https://instagram.com/logoterapiamerida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#303086] rounded-2xl flex items-center justify-center group-hover:bg-[#f7b54f] transition-all">
                    <Instagram className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#303086] mb-1">
                      Instagram
                    </p>
                    <p className="text-gray-600 group-hover:text-[#f7b54f] transition-colors">
                      @logoterapiamerida
                    </p>
                  </div>
                </a>

                <a
                  href="https://facebook.com/Logoterapia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#303086] rounded-2xl flex items-center justify-center group-hover:bg-[#f7b54f] transition-all">
                    <Facebook className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#303086] mb-1">
                      Facebook
                    </p>
                    <p className="text-gray-600 group-hover:text-[#f7b54f] transition-colors">
                      Logoterapia
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#303086] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-light mb-4">
                <span className="font-semibold">LOGOTERAPIA</span> MÉRIDA
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Instituto Mexicano Humanista y Existencial A.C.
              </p>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                "El ser humano siempre conserva la libertad de adoptar una
                actitud ante lo que vive"
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Navegación</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#nosotros"
                    className="text-gray-300 hover:text-[#f7b54f] transition"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#diplomado"
                    className="text-gray-300 hover:text-[#f7b54f] transition"
                  >
                    Diplomado
                  </a>
                </li>
                <li>
                  <a
                    href="#talleres"
                    className="text-gray-300 hover:text-[#f7b54f] transition"
                  >
                    Talleres
                  </a>
                </li>
                <li>
                  <a
                    href="#maestros"
                    className="text-gray-300 hover:text-[#f7b54f] transition"
                  >
                    Maestros
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-300 hover:text-[#f7b54f] transition"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/logoterapiamerida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center hover:bg-[#f7b54f] transition-all group"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a
                  href="https://facebook.com/Logoterapia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center hover:bg-[#f7b54f] transition-all group"
                >
                  <Facebook className="text-white" size={20} />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="tel:9999476993"
                  className="text-gray-300 hover:text-[#f7b54f] transition flex items-center space-x-2"
                >
                  <Phone size={18} />
                  <span>9999 47 69 93</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Instituto de Logoterapia Mérida. Todos los derechos
                reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Miembro acreditado del Instituto Viktor Frankl de Viena
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
