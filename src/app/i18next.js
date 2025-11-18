"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        gettingMarriedText: "We're Getting Married!",
        joinUsText: "Join us as we celebrate our special day!",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Sec.",
        viewProgram: "View Program",
        sectionTwoTitle: "Dear family and friends,",
        sectionTwoText:
          "we are happy to announce that we are getting married. We look forward to seeing you at our wedding on September 5, 2026 at 16:00.",
        eventOrder: "Event Order",
        eventSectionSubheading: "Here's what to expect on our special day",
        locationTitle: "Location",
        freeParkingText: "Free parking is available on site",
        feedbackTitle:
          "Please send us your feedback until December 15, 2025 date and fill out the form for everyone attending (also children).",
        feedbackSubtext:
          "If you have any questions, pls do not hesitate to text or call us.",
        gettingToVenueTitle: "Getting to the wedding location",
        gettingToVenueDescription:
          "Please note that there is limited parking available at the venue. If you plan to arrive by car, we recommend choosing accommodation that offers parking.The easiest way to reach the venue is by Uber, Bolt, taxi, or public transport — trams 17, 19, or 41 stop at Westminster street, the closest station to the wedding location.",
        accommodationTitle: "Accommodation",
        accommodationDescription: `Please arrange your accommodation individually according to your preferences.
If you’d like to stay close to the venue, we recommend The Aquincum Hotel London. It’s 2.3 km from the wedding location, about 6 minutes by car, 18 minutes by public transport, or a 30, minute walk.
The hotel offers a spa and parking for an additional fee. Check-in is available from 3 PM, and please keep in mind that the festivities begin at 4 PM.
If the hotel is fully booked, let us know, we’ll be happy to help you find an alternative nearby.

There are also more budget-friendly options on Airbnb and Booking.com. If you need help organizing your stay, just let us know.
If you’re planning to spend a few extra days in London, a centrally located accommodation might be a better fit.
`,
        contactsText:
          "If you have any organizational questions, feel free to reach out to us or our wedding planner, Daniel. If you’re planning to give a speech or prepare a special surprise, please get in touch with our master of ceremony, Jane. She’ll be happy to help bring your ideas to life and can translate your speech into German or Hungarian so everyone can enjoy it. For speeches, please send your text to Jane at least two weeks before the wedding so she has time to translate it.",
        eventOneTitle: "Welcome Reception",
        eventOneDescription: "Guests arrive and enjoy welcome drinks.",
        eventTwoTitle: "Ceremony",
        eventTwoDescription: " Exchange of vows at the garden pavilion.",
        eventThreeTitle: "Dinner",
        eventThreeDescription: "Dinner is served and the celebration begins.",
        eventFourTitle: " Cake",
        eventFourDescription: "Time to cut the cake and sweeten the night.",
        eventFiveTitle: "Midnight Dinner",
        eventFiveDescription: "A late-night bite to keep the energy up.",
        eventSixTitle: " Party Until Dawn",
        eventSixDescription: "Dance, laugh, and celebrate the night away!",
        dressCodeTitle: "Dress Code",
        dressCodeDescription:
          "Please wear something you feel comfortable and confident in. Light suits, flowy dresses, and airy fabrics are perfect choices, as September in London can still be rather warm.",
        childrenTitle: "Children",
        childrenDescription:
          "Children are very welcome! While there isn’t a playground nearby, we’ll have games, coloring books, and other activities to keep even the little ones entertained. There’s also a small separate room where children can play or rest during the evening.",
        giftTitle: "Gifts",
        giftDescription:
          "The greatest gift for us is having you celebrate with us. If you’d still like to surprise us with a gift, we would be grateful for something that fits in an envelope or contributes to our honeymoon fund. If you’d prefer to contribute digitally, you can do so by clicking on the revolut button — and we’ll be truly grateful.",
        weddingPlanner: "Wedding planner",
        masterOfCeremony: "Master of ceremony",
      },
    },
    hu: {
      translation: {
        gettingMarriedText: "Összeházasodunk!",
        joinUsText: "Ünnepeljük együtt ezt a különleges napot!",
        days: "Nap",
        hours: "Óra",
        minutes: "Perc",
        seconds: "Mp.",
        viewProgram: "Program megtekintése",
        sectionTwoTitle: "Kedves család és barátok,",
        sectionTwoText:
          "Örömmel jelentjük be, hogy összeházasodunk. Alig várjuk, hogy találkozzunk az esküvőnkön 2026. szeptember 5-én 15:00-kor.",
        eventOrder: "Program terv",
        eventSectionSubheading: "Mire számithatsz ezen a különleges napon",
        locationTitle: "Helyszín",
        freeParkingText: "Ingyenes parkolás a helyszínen",
        feedbackTitle:
          "Kérünk, jelezz vissza december 15-ig az űrlap kitöltésével minden résztvevő (gyerekek is) nevében.",
        feedbackSubtext:
          "Ha bármilyen kérdésed van, kérlek, ne habozz üzenetet küldeni vagy felhívni minket.",
        gettingToVenueTitle: "Esküvői helyszín megközelítése ",
        gettingToVenueDescription:
          "Kérjük, vedd figyelembe, hogy a helyszínen korlátozott a parkolási lehetőség. Ha autóval érkezel, javasoljuk, hogy olyan szállást válassz, ahol biztosított a parkolás. A legegyszerűbben Uberrel, Bolttal, taxival vagy tömegközlekedéssel tudsz eljutni a helyszínre — a 17-es, 19-es és 41-es villamosok a Westminster utcánál állnak meg, ami a legközelebbi megálló az esküvő helyszínéhez.",
        accommodationTitle: "Szálláslehetőségek",
        accommodationDescription: `Kérjük, hogy a szállásodat egyénileg foglald le, a saját igényeid szerint.
Ha szeretnél közel lenni az esküvő helyszínéhez, ajánljuk a The Aquincum Hotel Londont-t. A hotel mindössze 2,3 km-re van a helyszíntől, kb. 6 perc autóval, 18 perc tömegközlekedéssel vagy 30 perc gyalog.
A szálloda wellness-részleggel rendelkezik, és parkolás felár ellenében elérhető. A bejelentkezés 15:00 órától lehetséges, ne feledd, hogy az esküvő 16:00-kor kezdődik.
Ha a hotel megtelt, kérjük, jelezd nekünk, és segítünk alternatív szállást találni a közelben.`,
        contactsText:
          "Ha bármilyen szervezéssel kapcsolatos kérdésed van, bátran kereshetsz minket vagy az esküvőszervezőnket, Daniel. Ha beszéddel vagy valamilyen meglepetéssel készülsz, vedd fel a kapcsolatot a ceremóniamesterünkkel, Jane-nel. Ő örömmel segít megvalósítani az ötleteidet, és a beszéded lefordításában németre vagy magyarra is segíthet, hogy mindenki élvezhesse azt. A beszédek szövegét kérjük, küldd el Jane-nek legalább két héttel az esküvő előtt, hogy legyen ideje lefordítani.",
        eventOneTitle: "Vendégfogadás",
        eventOneDescription:
          "A vendégeket üdvözlőitalokkal és falatokkal várjuk.",
        eventTwoTitle: "Szertartás",
        eventTwoDescription: "Fogadalomtételek az erkélyen.",
        eventThreeTitle: "Vacsora",
        eventThreeDescription:
          "Vacsora felszolgálása és kezdődhet az ünneplés.",
        eventFourTitle: "Torta",
        eventFourDescription: "A tortavágás ideje!",
        eventFiveTitle: "Éjféli vacsora",
        eventFiveDescription: "Késő esti falatok, hogy bírjuk a táncot.",
        eventSixTitle: "Buli hajnalig",
        eventSixDescription: "Tánc, nevetés és ünneplés hajnalhasadtáig!",
        dressCodeTitle: "Dresszkód",
        dressCodeDescription:
          "Viselj olyasmit, amiben kényelmesen és jól érzed magad. Könnyű öltönyök, légies ruhák és világos anyagok ideálisak, mivel szeptemberben Londonban még  eléggé meleg időre lehet számítani.",
        childrenTitle: "Gyerekek",
        childrenDescription:
          "A gyerekeket is nagy szeretettel várjuk! Bár nincs játszótér a közelben, készülünk játékokkal, színezőkkel és apró meglepetésekkel, hogy a legkisebbek se unatkozzanak. Ezen kívül lesz egy kis külön helyiség is, ahol a gyerekek játszhatnak vagy pihenhetnek.",
        giftTitle: "Ajándékok",
        giftDescription:
          "Számunkra a legnagyobb ajándék, hogy velünk ünnepelsz. Ha mégis szeretnél meglepni minket valamivel, örömmel fogadunk bármit, ami elfér egy borítékban, vagy hozzájárul nászutas álmaink megvalósításához. Ha inkább digitálisan szeretnél hozzájárulni, azt megteheted az alábbi gombra kattíntva — nagyon hálásak leszünk érte.",
        weddingPlanner: "Esküvőszervező",
        masterOfCeremony: "Ceremóniamester",
      },
    },
    de: {
      translation: {
        gettingMarriedText: "Wir heiraten!",
        joinUsText: "Feiert mit uns unseren besonderen Tag!",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sek.",
        viewProgram: "Programm ansehen",
        sectionTwoTitle: "Liebe Familie und Freunde,",
        sectionTwoText:
          "endlich ist es soweit! Wir heiraten am 5. September 2026 um 15:00 Uhr und freuen uns darauf, diesen besonderen Tag mit euch zu feiern.",
        eventOrder: "Programm",
        eventSectionSubheading: "Das erwartet euch an unserem besonderen Tag",
        locationTitle: "Location",
        freeParkingText: "Kostenlose Parkplätze sind vor Ort verfügbar",
        feedbackTitle:
          "Bitte sendet uns euer Feedback bis zum 15. Dezember 2025 und füllt das Formular für alle Teilnehmenden (auch Kinder) aus.",
        feedbackSubtext:
          "Wenn ihr Fragen habt, zögert bitte nicht, uns zu schreiben oder anzurufen.",
        gettingToVenueTitle: "Anreise zur Hochzeitslocation",
        gettingToVenueDescription:
          "Bitte beachte, dass es vor Ort nur begrenzte Parkmöglichkeiten gibt. Falls du mit dem Auto anreist, empfehlen wir, eine Unterkunft mit Parkplatz zu wählen. Am einfachsten erreichst du die Location mit Uber, Bolt, Taxi oder öffentlichen Verkehrsmitteln – die Straßenbahnen 17, 19 und 41 halten an der Westminster street, der nächstgelegenen Station zur Hochzeitslocation.",
        accommodationTitle: "Unterkunft",
        accommodationDescription: `Bitte bucht eure Unterkunft individuell nach euren eigenen Vorlieben. Wenn ihr gerne in der Nähe der Hochzeitslocation übernachten möchtet, empfehlen wir The Aquincum Hotel. Es verfügt über einen Wellnessbereich und bietet Parkplätze gegen Aufpreis. Der Check-in ist ab 15:00 Uhr möglich, bitte beachtet, dass die Feierlichkeiten um 16:00 Uhr beginnen.
Günstigere Optionen findet ihr auch auf Airbnb oder Booking.com. Wenn ihr Hilfe bei der Organisation oder Buchung braucht, meldet euch einfach bei uns. Wenn ihr plant, noch ein paar Tage in London zu bleiben, ist eine zentral gelegene Unterkunft die bessere Wahl..`,
        contactsText:
          "Wenn ihr organisatorische Fragen habt, wendet euch gerne an uns oder unsere Hochzeitsplanerin Daniel. Wenn ihr eine Rede halten oder eine besondere Überraschung vorbereiten möchtet, kontaktiert bitte unsere Hochzeitsmoderatorin Jane. Sie hilft euch dabei, eure Ideen umzusetzen und kann eure Rede ins Deutsche oder Ungarische übersetzen. Bitte sendet die Rede spätestens zwei Wochen vor der Hochzeit an Jane, damit genug Zeit für die Übersetzung bleibt.",
        eventOneTitle: "Empfang",
        eventOneDescription:
          "Empfang mit Willkommensgetränken und kleinen Häppchen.",
        eventTwoTitle: "Zeremonie",
        eventTwoDescription: " Austausch der Eheversprechen.",
        eventThreeTitle: "Abendessen",
        eventThreeDescription:
          "Das Dinner wird serviert – lasst die Feier beginnen!",
        eventFourTitle: "Torte",
        eventFourDescription: "Zeit für den Anschnitt der Hochzeitstorte!",
        eventFiveTitle: "Mitternachtsessen",
        eventFiveDescription: "Späte Snacks, um Energie fürs Tanzen zu tanken.",
        eventSixTitle: "Party bis zum Morgengrauen",
        eventSixDescription:
          "Tanzen und feiern bis in die frühen Morgenstunden!",
        dressCodeTitle: "Dresscode",
        dressCodeDescription:
          "Tragt am besten etwas, in dem ihr euch wohlfühlt und das auch bei den warmen September-Temperaturen in London angenehm ist.",
        childrenTitle: "Kinder",
        childrenDescription:
          "Kinder sind bei uns herzlich willkommen! Zwar gibt es keinen Spielplatz in der Nähe, aber wir sorgen für Spiele, Malbücher und kleine Überraschungen, damit auch die Kleinsten Spaß haben. Außerdem gibt es einen kleinen separaten Raum, in dem Kinder spielen oder sich ausruhen können.",
        giftTitle: "Geschenke",
        giftDescription:
          "Das schönste Geschenk für uns ist, dass ihr diesen besonderen Tag mit uns feiert. Wenn ihr uns dennoch ein Geschenk machen möchtet, freuen wir uns über etwas, das in einen Umschlag passt oder uns digital erreicht – einfach über den Revolut-Button. Wir freuen uns von Herzen über jede Unterstützung für unsere Hochzeitskasse.",
        weddingPlanner: "Hochzeitsplanerin",
        masterOfCeremony: "Hochzeitsmoderatorin",
      },
    },
  },
});
