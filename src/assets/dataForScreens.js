const dream1 = [
  'Wyobraź sobie',
  'wszystkie',
  'urządzenia',
  'elektryczne,',
  'które używasz na codzień...',
];
const dream2 = [
  'Wyobraź sobie',
  'nowoczesne',
  'panele',
  'słoneczne',
  'na dachu Twojego domu...',
];
const dream3 = [
  'Wyobraź sobie',
  'jakieś',
  'zero',
  'złotych',
  'na rachunkach za energię',
];
const finalText = [
  'Wyobraź sobie',
  'oszczędzone',
  'pieniądze,',
  'które przeznaczasz na',
];
const itemsToBuy = [
  'pasjonujące książki...',
  'prezenty dla dzieci...',
  'cele charytatywne...',
  'hamburgery i frytki...',
  'egzotyczne podróże...',
  'odważne inwestycje...',
  'odjechane koncerty...',
  'zakupowe szaleństwa...',
  'dobre whisky z Islay...',
  'bezdomne zwierząta...',
];

const modalAboutText = {
  line1: 'Najlepsze solary pod Słońcem!',
  line2:
    'Właśnie tym dzielimy się z naszymi Klienami. Chcesz aby Słońce było do Twojej dyspozycji i działało na Twój rachunek? Zaufaj duploELEMENTS. Wiemy jak to zrobić!',
  line3:
    'Kilka słów o tym, jak doszliśmy do tego, że Słońce powinno działać w naszej ekipie...',
  scope:
    'Działamy na terenie województwa Dolnośląskiego, Opolskiego, Lubuskiego, Śląskiego',
  letsContact:
    'Poszukujących najlepszych solarów pod Słońcem zapraszamy do kontakt:',
  localization: {
    label: 'Lokalizacja',
    street: 'ul. Zacisze XXX',
    city: '58-200 Dzierżoniów',
    gps1: "50° 43' 55.8516'' N",
    gps2: "16° 39' 38.6928'' E",
  },
};
const ourStory = {
  story:
    'W branży budowlanej działamy od 2000 roku. Zdobywaliśmy doświadczenie na licznych inwestycjach w kraju i za granicą. Pewnego, szalenie pracowitego dnia, kiedy nie wszystko szło po maszej myśl a ja właśnie nuciłem sobie "Alvays look on the bright side of life" nastąpił przełom. W zasadzie to oślepiło mnie Słońce. Ale było w tym rónież jakieś olśnienie! Świat jakby na momen się zatrzymał... A do mnie dotarła pewna myśl.. Zapragnąłem mieć Słońce w swojej ekipie, współpracować z Nim (a może Nią ?!)... Dlatego powstało duploELEMENTS! ',
};

// const textBox1 = [
//   { id: 1, text: 'Wyobraź sobie proszę' },
//   { id: 2, text: 'nowoczesne panele słoneczne' },
//   { id: 3, text: 'na dachu Twojego domu...' },
// ];
// const textBox2 = [
//   { id: 1, text: 'Wyobraź sobie te wszystkie' },
//   { id: 2, text: 'niezastąpione sprzęty domowe' },
//   { id: 3, text: 'których używasz na codzień...' },
// ];

// const textBox3 = [
//   { id: 1, text: 'Wyobraź sobie jeszcze,' },
//   { id: 2, text: 'że to wszystko pięknie działa' },
//   { id: 3, text: 'za około zero złotych...' },
// ];

// const textBox4 = [
//   { id: 1, text: 'a zaoszczędzone pieniądze ' },
//   { id: 2, text: 'z radością przeznaczasz na' },
// ];

//Date for: Page/contacts; Components/molecule/form = <Form>
const messageForSmarty = [
  { id: 1, message: 'same puste pola...' },
  { id: 2, message: 'jest w tym coś poetyckiego...' },
  { id: 3, message: 'mimo to zapraszam do kontaktu!' },
];
const telephonInputLabel = [
  {
    id: 1,
    text: 'Cenisz sobie otwarty, żywy dialog?',
  },
  {
    id: 2,
    text: 'Proponuję zatem kontakt telefoniczny.',
  },
];
const telephonInputWarnings = [
  {
    id: 1,
    message: 'Chyba zaponiałeś o jakiej cyferce... Sprawdź proszę',
  },
  {
    id: 2,
    message: 'Upewnij się proszę czy ',
  },
];
const emailInputLabel = [
  {
    id: 1,
    text: 'Chcesz potrenować warsztat literacki?',
  },
  {
    id: 2,
    text: 'Zapraszam do kontaktu mailowego.',
  },
];
const emailInputWarnings = [
  {
    id: 1,
    message: 'Chyba zaponiałeś o jakiej cyferce... Sprawdź proszę',
  },
  {
    id: 2,
    message: 'Upewnij się proszę czy ',
  },
];

//==================================================================
// const screenLinesText = {
//   article1a: 'Wyobraź sobie proszę',
//   article1b: 'nowoczesne panele słoneczne',
//   article1c: 'na dachu Twojego domu...',
//   //
//   article2a: 'Wyobraź sobie te wszystkie',
//   article2b: 'niezastąpione sprzęty domowe',
//   article2c: 'których używasz na codzień...',
//   //
//   article3a: 'Teraz wyobraź sobie proszę,',
//   article3b: 'że to wszystko pięknie działa',
//   article3c: 'za dokładnie 0,00 zł....',
//   article3d: 'a zaoszczędzone pieniądze ',
//   article3e: 'z rozkoszą przeznaczasz',
// };

//=================================================================
// const contactPageInvitation = {
//   a1: 'Cześć!',
//   a2: 'Jesteśmy duploELEMENTS.',

//   b1: 'Rozumiemy, że wyobraziłeś sobie',
//   b2: 'swój ukochany dom z całą tą',
//   b3: 'infastrukturą fotowoltaiczną,',
//   b4: 'oraz te wszystkie kierunki rozwoju',
//   b5: 'wynikające z uzyskanych oszczędności',

//   c1: 'Znakomicie! Bo tak to właśnie działa.',
//   c2: 'Zostaw nam proszę kontakt do siebie',
//   c3: 'może być mail lub numer telefonu',

//   d1: 'Chętnie pokażemy Ci, jakie to  proste.',

//   ax1:
//     'Skoro wyobraziłeś sobie to wszystko, swój ukochany dom z cała tą infastrukturą fotowoltaiczną pozostaje nam już tylko jedno...',
//   ax2:
//     'Skontaktujmy się! Zostaw swojego maila lun numer terlefonu, jak wolisz.',
// };

// const contactPageForm = {
//   requiredEmail: 'Proszę wpisz swój email w polu powyżej',
//   requiredTerms:
//     'Proszę abyś wyraził zgodę zaznaczając powyższe pole. Jeden mały znaczek i wszystko załatwione',
//   emailLength: 'Wpisany email wydaje się trochę zbyt krótki...',
//   emailTypes: 'Niesamowite, że twój email nie zawiera małpy...czyli tego: @',
//   numberlength:
//     'Wpisz dokładnie 9 cyfr, bez jakichkolwiek odstępów (dodatkowych znaków)',
//   numberTypes: 'Czyzby twój numer składał sie nie tylko z cyfr???',
// };

export {
  dream1,
  dream2,
  dream3,
  finalText,
  itemsToBuy,
  modalAboutText,
  ourStory,
  //
  messageForSmarty,
  telephonInputLabel,
  emailInputLabel,
  telephonInputWarnings,
  emailInputWarnings,
};
