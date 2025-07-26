// We put our different adhkar into a list, so that the code can cycle through each time we click a button
// Each item of the list has 4 parts: arabic, transliteration, translation, & source - organizing it like this makes it easier to display
const adhkar = [
    {
        arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ.",
        transliteration: "Lā ilāha illā-Allāh",
        translation: "There is no god but Allah.",
        source: "The Messenger of Allah ﷺ said: “The best dhikr is [above]” (Nasā’ī)"
    }, 

    {
        arabic: "سُبْحَانَ اللّٰهِ ، اَلْحَمْدُ لِلّٰهِ ، اَللّٰهُ أَكْبَرُ",
        transliteration: "Subḥāna-llāh. Alḥamdu li-llāh, Allāhu akbar.",
        translation: "Allah is free from imperfection. All praise be to Allah. Allah is the Greatest.",
        source: "The Messenger of Allah ﷺ said: “The most beloved statements to Allah are four: سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَا إِلهَ إِلَّا اللهُ ، وَاللهُ أَكْبَر.” (Muslim)"
    },

    {
        arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ",
        transliteration: "Lā ḥawla wa lā quwwata illā bi-llāh.",
        translation: "There is no power (in averting evil) or strength (in attaining good) except through Allah.",
        source: "The Messenger of Allah ﷺ said: “Shall I not teach you a statement which lies beneath the Throne and is from the treasures of Paradise? Say لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِالله upon which Allah says: ‘My slave has submitted and surrendered himself.’” (Hākim)"
    },

    {
        arabic: "اَللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيْمَ وَعَلَىٰ آلِ إِبْرَاهِيْمَ ، إِنَّكَ حَمِيْدٌ مَّجِيْدٌ ، اَللّٰهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيْمَ وَعَلَىٰ آلِ إِبْرَاهِيْمَ ، إِنَّكَ حَمِيْدٌ مَّجِيْدٌ",
        transliteration: "Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdu-m-Majīd, Allāhumma bārik ʿalā Muḥammad, wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdu-m-Majīd.",
        translation: "O Allah, honour and have mercy upon Muhammad and the family of Muhammad as You have honoured and had mercy upon Ibrāhīm and the family of Ibrāhīm. Indeed, You are the Most Praiseworthy, the Most Glorious. O Allah, bless Muhammad and the family of Muhammad as You have blessed Ibrāhīm and the family of Ibrāhīm. Indeed, You are the Most Praiseworthy, the Most Glorious.",
        source: "ʿAbd al-Raḥmān ibn Abī Laylā (raḥimahullāh) said: “Kaʿb ibn ʿUjrah (raḍiy Allāhu ʿanhu) met me and said: ‘Shall I not give you a gift I received from the Messenger of Allah ﷺ?’ I replied: ‘Yes of course, gift it to me.’ So he said: ‘We asked the Messenger of Allah ﷺ: “O Messenger of Allah ﷺ, how should we invoke ṣalāh upon you, the members of the family, for Allah has taught us how to send salām upon you?” He ﷺ replied: “Say: [the above].” (Bukhārī 3370)"
    },

    {
        arabic: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ",
        transliteration: "Lā ilāha illā-Allāh, waḥdahū lā sharīka lah, lahu-l-mulk, wa lahu-l-ḥamd, wa Huwa ʿalā kulli shay’in Qadīr.",
        translation: "There is no god but Allah. He is Alone and He has no partner whatsoever. To Him Alone belong all sovereignty and all praise. He is over all things All-Powerful.",
        source: "Ibn ‘Amr (radiy Allāhū ‘anhumā) narrates that the Messenger of Allah ﷺ said: “The best duʿā’ is the duʿā’ of the day of ʿArafah. The best of what I and the Prophets before me have said is [the above].” (Tirmidhī 3585)"
    },

    {
        arabic: "سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ وَلَا إِلٰهَ إِلَّا اللهُ ، وَاللهُ أَكْبَرُ",
        transliteration: "Subḥāna-llāh. wal-lḥamdu li-llāh, wa lā ilāha illa-llāhu wa-llāhu akbar.",
        translation: "Allah is free from imperfection. All praise be to Allah. There is no god worthy of worship but Allah. Allah is the Greatest.",
        source: "Samura b. Jundub (raḍiy Allāhu ‘anhu) that the Messenger of Allah ﷺ said: “The most beloved statements to Allah are four: [the above]. There is no harm for you in which of them begin with (while remembering Allah). And do not give these names to your servants: Yasār and Rabāḥ and Najīḥ and Aflaḥ.” (Muslim 2137)"
    },

    {
        arabic: "يَا حَيُّ يَا قَيُّوْمُ ، بِرَحْمَتِكَ أَسْتَغِيْثُ",
        transliteration: "Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth.",
        translation: "O The Ever Living, The One Who sustains and protects all that exists; I seek assistance through Your Mercy.",
        source: "Anas b. Mālik (raḍiy Allāhu ‘anhu) narrates that the when the Prophet ﷺ would be distressed, he would say [the above]. (Tirmidhī 3524)"
    },

    {
        arabic: "لَآ إِلٰهَ إِلَّآ أَنْتَ سُبۡحٰنَكَ إِنِّيْ كُنْتُ مِنَ الظّٰلِمِيْنَ",
        transliteration: "Lā ilāha illā Anta subḥānaka innī kuntu mina-ẓ-ẓālimīn.",
        translation: "There is no god worthy of worship except You; You are free from all imperfection. Indeed, I have been of the wrongdoers. (21:87)",
        source: "Ibrahim b. Muhammad b. Sa‘d narrated from his father, from Sa‘d (raḍiy Allāhu ‘anhu) that the Messenger of Allah ﷺ said: “The supplication of Dhun-Nūn (Prophet Yūnus) when he supplicated, while in the belly of the whale was: [the above]. ”No Muslim man ever supplicates with [the above] except that Allah answers his supplication.” (Tirmidhī 3505)"
    },

    {
        arabic: "أَسْتَغْفِرُ اللهَ الْعَظِيْمَ الَّذِيْ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ ، وَأَتُوْبُ إِلَيْهِ",
        transliteration: "Astaghfiru-l-llāha-l-aẓīm al-ladhī lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, wa atūbu ilayh.",
        translation: "I seek forgiveness from Allah, the Greatest, whom there is none worthy of worship except Him, The Ever Living, The One Who sustains and protects all that exists, I turn in repentance towards you.",
        source: "Bilāl b. Yasār b. Zayd (raḍiy Allāhu ‘anhu) (the freed slave of the Prophet ﷺ narrated: “My father narrated to me, from my grandfather, that he heard the Prophet ﷺ say: ‘Whoever says [the above], then Allah will forgive him, even if he fled from battle.’” (Tirmidhī 3577)"
    }

    // Add in 1 or 2 more adhkar below here - don't forget the comma!
];

// This is what we use to track which adhkar we are on in the whole list
// Note: computers don't start counting at 1, they start at 0
let currentIndex = 0;

// This is how we tell our JavaScript code to connect to the HTML code
const quoteBox = document.getElementById("ajr");
const button = document.getElementById("generate");

// Now we will tell the computer what to do when someone clicks the button
button.addEventListener("click", function () {

  // We'll be using 'currentIndex' to track where we are in that list of adhkar, so it can loop through
  const entry = adhkar[currentIndex];

  // This is where we display each adhkar on the HTML page
  // Recognize the HTML tags?
  quoteBox.innerHTML = `
    <p style="font-size: 24px;">${entry.arabic}</p>
    <p><em>${entry.transliteration}</em></p>
    <p>${entry.translation}</p>
    <p><small><strong>${entry.source}</strong></small></p>
  `;

  // If we don't do this, it won't update to the next adhkar in the list!
  currentIndex = (currentIndex + 1) % adhkar.length;
});


