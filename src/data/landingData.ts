import {
  TreatmentItem,
  WhyChooseUsItem,
  CompanyValueItem,
  TestimonialItem,
} from '../types';

export const CLINIC_INFO = {
  name: 'Imax Dent',
  wordmark: 'IMAXDENT',
  tagline: 'Odontología Integral',
  instagramHandle: '@imax.dental',
  instagramUrl: 'https://www.instagram.com/imax.dental/',
  phoneFormatted: '+593 96 939 3900',
  whatsappNumber: '593969393900',
  address: 'Portete de Tarqui #5310 y la 27ava (Aurelio Uraga), Guayaquil, Ecuador',
  addressShort: 'Portete y la 27ava',
  hours: 'Lunes a sábado, 9:00 – 18:00',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Portete%20de%20Tarqui%20%235310%20y%20la%2027ava%2C%20Guayaquil%2C%20Ecuador',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Portete%20de%20Tarqui%20%235310%20y%20la%2027ava,%20Guayaquil,%20Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed',
  defaultWhatsAppMessage: 'Hola, quiero agendar una valoración en Imax Dent.',
};

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const HERO_COPY = {
  h1: 'Porque tu sonrisa merece una solución pensada para ti',
  subheadline:
    'Consultorio dental en Guayaquil — ortodoncia, limpiezas, resinas y prótesis con atención cercana y planes claros desde tu primera visita.',
  primaryCta: 'Agenda tu valoración',
  secondaryCta: 'Ver tratamientos',
  heroImage:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
};

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 1,
    title: 'Ubicados en Guayaquil',
    description:
      'Nos encontrarás en la calle Portete de Tarqui y la 27ava (Aurelio Uraga), a un mensaje de WhatsApp de distancia.',
  },
  {
    id: 2,
    title: 'Planes claros, sin sorpresas',
    description:
      'Tu tratamiento de ortodoncia puede empezar desde $25 en premolares, con el presupuesto definido desde la primera valoración.',
  },
  {
    id: 3,
    title: 'Te acompañamos, no solo te atendemos',
    description:
      'Te explicamos cada paso de tu tratamiento y te recordamos el cuidado que tu sonrisa necesita entre visita y visita.',
  },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    description:
      'Brackets con seguimiento personalizado; tu valoración inicial arranca desde $25 en premolares.',
    iconName: 'ortodoncia',
    badge: 'Desde $25 en premolares',
    whatsappMessage: 'Hola, me gustaría consultar por el tratamiento de Ortodoncia en Imax Dent.',
  },
  {
    id: 'resinas',
    name: 'Resinas y calzas',
    description:
      'Restauramos piezas dañadas o con caries con resinas estéticas que devuelven función y apariencia natural.',
    iconName: 'resinas',
    badge: 'Estética dental',
    whatsappMessage: 'Hola, me gustaría consultar por el tratamiento de Resinas y calzas en Imax Dent.',
  },
  {
    id: 'limpieza',
    name: 'Limpieza dental (profilaxis)',
    description:
      'Limpieza profesional para prevenir caries y enfermedad de encías — recomendada cada 6 meses.',
    iconName: 'limpieza',
    badge: 'Prevención cada 6 meses',
    whatsappMessage: 'Hola, me gustaría agendar una Limpieza dental (profilaxis) en Imax Dent.',
  },
  {
    id: 'protesis',
    name: 'Prótesis dental',
    description:
      'Soluciones fijas y removibles para recuperar piezas perdidas y volver a comer y sonreír con confianza.',
    iconName: 'protesis',
    badge: 'Fijas y removibles',
    whatsappMessage: 'Hola, me gustaría consultar por Prótesis dental en Imax Dent.',
  },
  {
    id: 'extracciones',
    name: 'Extracciones',
    description:
      'Extracciones simples y de muelas del juicio (terceros molares), con protocolos seguros y cómodos.',
    iconName: 'extracciones',
    badge: 'Incluye muelas del juicio',
    whatsappMessage: 'Hola, necesito información sobre Extracciones (muelas del juicio / simples) en Imax Dent.',
  },
];

export const ABOUT_US = {
  title: 'Sobre nosotros',
  headline: 'Odontología cercana y transparente en Guayaquil',
  description:
    'Imax Dent es un consultorio dental en Guayaquil, enfocado en una atención cercana, clara y accesible para toda la familia. Creemos que cuidar tu sonrisa no debería ser complicado: por eso explicamos cada tratamiento paso a paso y ponemos los precios sobre la mesa desde el primer momento.',
  image:
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  values: [
    {
      id: 'cercania',
      title: 'Cercanía',
      description: 'Atención sin tecnicismos innecesarios',
    },
    {
      id: 'precios-claros',
      title: 'Precios claros',
      description: 'Presupuesto definido desde la valoración',
    },
    {
      id: 'prevencion-primero',
      title: 'Prevención primero',
      description: 'Te recordamos tus controles',
    },
    {
      id: 'atencion-personalizada',
      title: 'Atención personalizada',
      description: 'Cada plan se ajusta a tu caso',
    },
  ] as CompanyValueItem[],
};

export const TESTIMONIAL_PLACEHOLDER_TEXT =
  'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial, servicio recibido y comentario.';

export const TESTIMONIALS: TestimonialItem[] = [
  { id: 1, slotNumber: 1, placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT },
  { id: 2, slotNumber: 2, placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT },
  { id: 3, slotNumber: 3, placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT },
  { id: 4, slotNumber: 4, placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT },
  { id: 5, slotNumber: 5, placeholderText: TESTIMONIAL_PLACEHOLDER_TEXT },
];

export const SERVICE_OPTIONS = [
  'Ortodoncia',
  'Resinas y calzas',
  'Limpieza dental (profilaxis)',
  'Prótesis dental',
  'Extracciones',
  'Otro',
];
