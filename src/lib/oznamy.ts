export const KATEGORIE = {
  oznam: {
    label: 'Oznam',
    badge: 'bg-forest-100 text-forest-800',
  },
  pozvanka: {
    label: 'Pozvánka',
    badge: 'bg-gold-400/20 text-gold-600',
  },
  zapisnica: {
    label: 'Zápisnica',
    badge: 'bg-forest-800/10 text-forest-700',
  },
} as const;

export function formatDate(date: Date): string {
  return date.toLocaleDateString('sk-SK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
