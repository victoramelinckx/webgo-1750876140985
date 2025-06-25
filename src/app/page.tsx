
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos recomendaciones en ventas digitales con nuestra web lista en un día y soporte 24/7." cta1="Digitaliza Ya" />
<How step1Title="Agenda una consulta" step1Desc="Hablemos de tu negocio y tus metas." step2Title="Construcción exprés" step2Desc="Creamos tu web en menos de 24 horas." step3Title="Soporte continuo" step3Desc="Atención 24/7 para mantenerte en línea." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Ya" subheadline="Transformamos tus ventas en línea, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Fácil y Rápido" beneficio1="Simplificamos la venta online en minutos." beneficiotitulo2="Aumenta Clientes" beneficio2="Llega a más clientes sin esfuerzo." />
<Services heading="Transforma Tu Negocio en 24 Horas" description="asdas (Precio: 123) - asda crea ventas online sin complicaciones." services={[{"name":"Diseño Web Rápido","icon":"rocket","description":"Webs listas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Ayuda continua para tu tranquilidad."},{"name":"SEO Optimización","icon":"search","description":"Aparece primero en búsquedas."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Conviértete al comercio digital fácilmente."},{"name":"Marketing Digital","icon":"bullhorn","description":"Atracción de clientes efectiva."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido que engancha y vende."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en soluciones digitales de impacto." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi pequeño negocio?","respuesta":"WebGo te ofrece un servicio integral que transforma tu negocio tradicional a un exitoso comercio online. Nos encargamos de todo, desde crear un sitio web atractivo hasta implementar estrategias de marketing digital para que consigas más clientes sin depender solo de recomendaciones."},{"pregunta":"¿Cuánto cuesta el servicio de digitalización de WebGo?","respuesta":"Nuestro servicio tiene un costo inicial de 123. Este precio incluye el desarrollo de tu sitio web y la implementación de campañas de marketing personalizadas para maximizar tus ventas online."},{"pregunta":"¿Qué beneficios obtengo al trabajar con WebGo?","respuesta":"Con WebGo, obtienes más clientes y más ventas sin preocuparte por la gestión del sitio web. Nos encargamos de todo, desde el mantenimiento hasta las estrategias de ventas digitales, para que puedas enfocarte en crecer tu negocio."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo puede WebGo ayudarme?","respuesta":"No te preocupes, en WebGo nos encargamos de la gestión completa de tu sitio web. Nos ocupamos de todo, desde actualizaciones hasta la creación de contenido, permitiéndote dedicarte a lo que realmente importa: tu negocio."},{"pregunta":"¿Qué tan rápido puedo empezar a ver resultados con WebGo?","respuesta":"Con WebGo, comenzarás a ver resultados en poco tiempo. Nuestra estrategia está diseñada para atraer nuevos clientes rápidamente, gracias a nuestro enfoque personalizado en marketing digital y optimización de ventas online."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Santiago Hoy" 
                      description="Con WebGo, digitaliza tus ventas sin complicaciones y maximiza tus ingresos. No esperes más para conquistar el mercado online."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
