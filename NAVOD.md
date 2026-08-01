# Návod na správu webu — Urbár Pongrácovce

Web beží zadarmo na GitHub Pages. Všetok obsah (oznamy, fotky, dokumenty) sa spravuje
priamo cez **github.com** — funguje to aj z mobilu, netreba nič inštalovať.

**Najpohodlnejšie:** otvorte si na webe stránku **`/admin/`** (odkaz „Správa obsahu"
je aj v pätičke) — sú tam tlačidlá, ktoré vás hodia rovno do správneho formulára.

Po každom uložení („Commit changes") sa web **automaticky prebuduje a do minúty je zmena
živá**. Priebeh vidíte v záložke **Actions** na GitHube (zelená fajka = hotovo).

---

## 1. Ako pridať oznam

1. Prihláste sa na github.com účtom **urbar-pongracovce**.
2. Otvorte priečinok `src/content/oznamy` a kliknite **Add file → Create new file**
   (alebo použite tlačidlo na stránke `/admin/`, ktoré šablónu predvyplní).
3. Hore zadajte **názov súboru** v tvare: `2026-08-15-pozvanka-na-zhromazdenie.md`
   (dátum-nazov-bez-diakritiky.md).
4. Do obsahu vložte/upravte šablónu:

   ```markdown
   ---
   title: "Pozvánka na zhromaždenie"
   date: 2026-08-15
   kategoria: pozvanka
   popis: "Krátke zhrnutie do jednej-dvoch viet — zobrazuje sa v zozname oznamov."
   ---

   Sem napíšte text oznamu. Môžete použiť **tučné písmo**, zoznamy aj nadpisy (## Nadpis).
   ```

   - `kategoria` môže byť: `oznam`, `pozvanka` alebo `zapisnica`.
   - `date` je dátum zverejnenia v tvare RRRR-MM-DD.
5. Kliknite na zelené **Commit changes** (2×). Hotovo!

### Oznam s prílohou (napr. pozvánka v PDF)

1. Najprv nahrajte PDF do `public/dokumenty` (postup nižšie).
2. V ozname pridajte do hlavičky riadok: `priloha: "/dokumenty/nazov-suboru.pdf"`
   — na stránke oznamu sa zobrazí tlačidlo „Stiahnuť prílohu".

## 2. Ako nahrať fotky do galérie

1. Otvorte priečinok `src/assets/galeria` → **Add file → Upload files**.
2. Pretiahnite fotky (JPG/PNG) do okna a potvrďte **Commit changes**.
3. Fotky sa v galérii zobrazia automaticky, zoradené od najnovšej.

**Tip:** názov súboru sa použije ako popis fotky. `2026-vysadba-mladiny.jpg`
sa zobrazí ako „Vysadba mladiny". Používajte názvy bez diakritiky.

## 3. Ako nahrať dokument (PDF)

1. Otvorte priečinok `public/dokumenty` → **Add file → Upload files**.
2. Pretiahnite súbor a potvrďte **Commit changes**.
3. Dokument sa automaticky objaví na stránke **Dokumenty**.
   Názov súboru = zobrazený názov (napr. `zmluva-o-spolocenstve.pdf` → „Zmluva o spolocenstve").

## 4. Ako upraviť alebo zmazať oznam

- **Upraviť:** otvorte súbor v `src/content/oznamy`, kliknite na **ceruzku** (Edit),
  upravte a potvrďte Commit changes.
- **Zmazať:** otvorte súbor → tri bodky vpravo hore → **Delete file** → Commit changes.

## 5. Ako doplniť členov výboru a dozornej rady

Mená sú v súbore `src/pages/organy.astro` — v hornej časti súboru sú zoznamy `vybor`
a `dozorna`. Prepíšte „Bude doplnené" na skutočné mená a funkcie, potvrďte Commit changes.

## 6. Časté otázky

- **Zmena sa nezobrazila?** Počkajte minútu a obnovte stránku (Ctrl+F5). Skontrolujte
  záložku Actions — červený krížik znamená chybu, najčastejšie preklep v hlavičke oznamu
  (chýbajúca úvodzovka, zlý dátum).
- **Web beží lokálne?** `npm install` a `npm run dev` v priečinku projektu.
- **Vlastná doména?** V nastaveniach repozitára Settings → Pages → Custom domain
  (doménu ako urbarpongracovce.sk treba najprv kúpiť u registrátora).
