export const BRAND = {
  name: 'Convalor',
  tagline: 'Tu Patrimonio. Tu Solución.',
  city: 'Querétaro, México',
};

/**
 * TODO(convalor): número real de WhatsApp del equipo comercial.
 * No se proporcionó en el brief ni en el Manual de Marca — sustituir antes de publicar.
 * Formato: código de país + lada + número, sin espacios ni signos (ej. 524421234567).
 */
export const WHATSAPP_NUMBER = '524420000000';

export const CONTACT = {
  // TODO(convalor): dirección exacta de la oficina — solo se confirmó la ciudad.
  address: 'Querétaro, Qro., México',
  // TODO(convalor): correo de contacto real.
  email: 'hola@convalor.mx',
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Calculadora', href: '#calculadora' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
  { label: 'Contacto', href: '#contacto' },
] as const;

// TODO(convalor): perfiles reales de redes sociales — placeholders hasta tenerlos.
export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
] as const;
