// All homepage and 404 copy, in English and Ukrainian. Paragraphs are HTML strings so links stay inline.

export type Lang = "en" | "uk";

export const POST_URL = "/blog/whats-wrong-with-telegram/";

export const copy = {
  en: {
    htmlLang: "en",
    title: "Nazarii Klymok",
    description: "Engineering Lead at BotsCrew in Lviv. AI agents, drums, Japanese.",
    name: "Nazarii Klymok",
    city: "Lviv",
    switchLabel: "Українською",
    switchHref: "/uk/",
    switchText: "УКР",
    photoAlt: "Nazarii playing drums in a rehearsal studio",
    kyotoPhotoAlt: "A visitor walking through the torii gates at Fushimi Inari Shrine in Kyoto",
    kyotoPhotoCaption: "Fushimi Inari, Kyoto",
    sections: [
      {
        emoji: "🛠️",
        kind: "tool",
        tag: "Work",
        html: [
          `I'm an Engineering Lead at <a href="https://botscrew.com">BotsCrew</a>, an AI transformation company that helps enterprises move AI from pilots into production. I lead the engineering of production-grade AI agents for our clients: agents that work with a company's own data and systems, and that people rely on every day.`,
        ],
      },
      {
        emoji: "🥁",
        kind: "drum",
        tag: "Music",
        photo: "drums",
        html: [
          `I play drums in a band called <a href="https://www.instagram.com/honey_jam.lviv/">Honey Jam</a>. We've played exactly one gig so far, on Make Music Day at Black Honey. I also play guitar and have written a couple of songs.`,
        ],
      },
      {
        emoji: "🌏",
        kind: "globe",
        tag: "Beyond Lviv",
        photo: "kyoto",
        html: [
          `I love Japan: the streets, the everyday life, the language. So I study Japanese with a tutor, and the JLPT N4 is in December. At 16 I spent a year in New Hampshire on the FLEX exchange program, and saw more than 25 states on road trips.`,
        ],
      },
      {
        emoji: "☕",
        kind: "coffee",
        tag: "Lately",
        html: [
          `Lately I've been playing S.T.A.L.K.E.R. 2 and listening to The Unsleeping's <span lang="uk">«Справжній бедрум панк»</span>. Both Ukrainian, both great. Otherwise: walks around Lviv, cycling, and a lot of coffee. In 2024 I ran the Frankivsk half marathon and finished somewhere in the middle.`,
        ],
      },
      {
        emoji: "✍️",
        kind: "write",
        tag: "Writing",
        html: [
          `I used to write <a href="https://t.me/novochasnyi" lang="uk">Новочасний</a>, a Ukrainian channel about the tech industry. It's resting for now, but <a href="${POST_URL}">one longer post</a> lives here.`,
        ],
      },
    ],
    hi: { tag: "Say hi", small: "Happy to talk about AI agents, drums or Japanese." },
  },

  uk: {
    htmlLang: "uk",
    title: "Назарій Климок",
    description: "Engineering Lead у BotsCrew, Львів. AI-агенти, барабани, японська.",
    name: "Назарій Климок",
    city: "Львів",
    switchLabel: "In English",
    switchHref: "/",
    switchText: "EN",
    photoAlt: "Назарій грає на барабанах у репетиційній студії",
    kyotoPhotoAlt: "Відвідувач іде поміж воротами торії у святилищі Фушімі Інарі в Кіото",
    kyotoPhotoCaption: "Фушімі Інарі, Кіото",
    sections: [
      {
        emoji: "🛠️",
        kind: "tool",
        tag: "Робота",
        html: [
          `Я Engineering Lead у <a href="https://botscrew.com">BotsCrew</a>. Ми займаємося AI-трансформацією: допомагаємо великому бізнесу довести ШІ від пілотів до продакшну. Я керую розробкою AI-агентів для наших клієнтів: вони працюють із власними даними й системами компанії, і люди користуються ними щодня.`,
        ],
      },
      {
        emoji: "🥁",
        kind: "drum",
        tag: "Музика",
        photo: "drums",
        html: [
          `Граю на барабанах у гурті <a href="https://www.instagram.com/honey_jam.lviv/">Honey Jam</a>. Поки що ми зіграли рівно один концерт, на Дні музики в кавʼярні Black Honey. Ще граю на гітарі й написав пару пісень.`,
        ],
      },
      {
        emoji: "🌏",
        kind: "globe",
        tag: "Поза Львовом",
        photo: "kyoto",
        html: [
          `Люблю Японію: її вулиці, повсякдення, мову. Тож вивчаю японську з репетиторкою, а в грудні складаю JLPT N4. У 16 років я прожив рік у Нью-Гемпширі за програмою обміну FLEX і під час поїздок машиною побачив понад 25 штатів.`,
        ],
      },
      {
        emoji: "☕",
        kind: "coffee",
        tag: "Останнім часом",
        html: [
          `Останнім часом граю в S.T.A.L.K.E.R. 2 і слухаю «Справжній бедрум панк» гурту The Unsleeping. Усе українське й усе класне. А ще люблю прогулянки Львовом, велосипед і багато кави. У 2024 році пробіг напівмарафон у Франківську й фінішував десь посередині.`,
        ],
      },
      {
        emoji: "✍️",
        kind: "write",
        tag: "Тексти",
        html: [
          `Колись я вів <a href="https://t.me/novochasnyi">Новочасний</a>, український канал про IT-індустрію. Зараз він на паузі, але <a href="${POST_URL}">один довший пост</a> можна прочитати тут.`,
        ],
      },
    ],
    hi: { tag: "Напишіть", small: "Залюбки поговорю про AI-агентів, барабани чи японську." },
  },
} as const;

export const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nklymok/" },
  { name: "GitHub", href: "https://github.com/nklymok" },
  { name: "Telegram", href: "https://t.me/nklymok" },
  { name: "Instagram", href: "https://instagram.com/je_suis_naz" },
];

// 404s: one is picked at random on each visit. Each riffs on something true.
export const notFound = [
  {
    emoji: "☢️",
    en: { title: "Anomaly ahead", body: "You've walked into an anomaly. This page isn't here, and neither is the artifact you came for. Get back to safety before the blowout." },
    uk: { title: "Попереду аномалія", body: "Ви вляпалися в аномалію. Цієї сторінки в Зоні немає, як і артефакту, за яким ви прийшли. Повертайтеся в укриття, поки не почався викид." },
  },
  {
    emoji: "🗾",
    en: { title: "ページが見つかりません", body: "That's Japanese for “page not found”. Good practice for my N4, bad news for you." },
    uk: { title: "ページが見つかりません", body: "Японською це означає «сторінку не знайдено». Мені гарна практика перед N4, а вам погана новина." },
  },
  {
    emoji: "🛸",
    en: { title: "This page is classified", body: "Like Area 51, it might exist, but you're not getting in. I saw more than 25 states and never found it either." },
    uk: { title: "Ця сторінка засекречена", body: "Як і Зона 51, вона, можливо, існує, але вас туди не пустять. Я побачив понад 25 штатів і теж її не знайшов." },
  },
  {
    emoji: "🥁",
    en: { title: "Missed the cue", body: "This page came in off-beat, so the band carried on without it." },
    uk: { title: "Не в такт", body: "Ця сторінка вступила не в такт, тож гурт грає далі без неї." },
  },
  {
    emoji: "🏃",
    en: { title: "Dropped out at kilometre 14", body: "This page didn't make it to the finish line. Somewhere in the middle, like me, would have been fine." },
    uk: { title: "Зійшла з дистанції на 14-му кілометрі", body: "Ця сторінка не добігла до фінішу. Могла б, як я, фінішувати десь посередині." },
  },
  {
    emoji: "☕",
    en: { title: "Out for coffee", body: "This page went out for coffee. Probably to Black Honey. Try again later." },
    uk: { title: "Пішла по каву", body: "Ця сторінка пішла по каву. Мабуть, у Black Honey. Заходьте пізніше." },
  },
];
