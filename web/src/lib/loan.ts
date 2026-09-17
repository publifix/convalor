/**
 * Tasa anual de referencia para la calculadora — constante ajustable.
 * No proviene del Manual de Marca ni fue provista por Convalor: es solo un valor de
 * referencia razonable para un préstamo con garantía inmobiliaria en México, pensado
 * para producir una estimación creíble mientras no exista una tasa oficial del producto.
 * Cambia este único número para ajustar el resultado en todo el sitio.
 */
export const REFERENCE_ANNUAL_RATE = 0.28; // 28% anual de referencia

export const LOAN_RANGE = {
  min: 100_000,
  max: 5_000_000,
  step: 10_000,
  default: 1_000_000,
} as const;

export const TERM_RANGE = {
  min: 12,
  max: 60,
  step: 1,
  default: 36,
} as const;

/** Pago mensual con amortización estándar (sistema francés / cuota fija). */
export function monthlyPayment(
  principal: number,
  months: number,
  annualRate: number = REFERENCE_ANNUAL_RATE,
): number {
  const r = annualRate / 12;
  if (r === 0) return principal / months;
  const factor = (1 + r) ** months;
  return (principal * (r * factor)) / (factor - 1);
}

export function formatCurrency(value: number, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits,
  }).format(value);
}

export function whatsappLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
