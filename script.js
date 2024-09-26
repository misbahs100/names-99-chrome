const names = [
    { name: "الرَّحْمَنُ (Ar-Rahman)", meaning: "The All-Compassionate" },
    { name: "الرَّحِيمُ (Ar-Rahim)", meaning: "The All-Merciful" },
    { name: "الْمَلِكُ (Al-Malik)", meaning: "The Absolute Ruler" },
    { name: "الْقُدُّوسُ (Al-Quddus)", meaning: "The Pure One" },
    { name: "السَّلاَمُ (As-Salam)", meaning: "The Source of Peace" },
    { name: "الْمُؤْمِنُ (Al-Mu'min)", meaning: "The Inspirer of Faith" },
    { name: "الْمُهَيْمِنُ (Al-Muhaymin)", meaning: "The Guardian" },
    { name: "الْعَزِيزُ (Al-Aziz)", meaning: "The Victorious" },
    { name: "الْجَبَّارُ (Al-Jabbar)", meaning: "The Compeller" },
    { name: "الْمُتَكَبِّرُ (Al-Mutakabbir)", meaning: "The Greatest" },
    { name: "الْخَالِقُ (Al-Khaliq)", meaning: "The Creator" },
    { name: "الْبَارِئُ (Al-Bari')", meaning: "The Maker of Order" },
    { name: "الْمُصَوِّرُ (Al-Musawwir)", meaning: "The Shaper of Beauty" },
    { name: "الْغَفَّارُ (Al-Ghaffar)", meaning: "The Forgiving" },
    { name: "الْقَهَّارُ (Al-Qahhar)", meaning: "The Subduer" },
    { name: "الْوَهَّابُ (Al-Wahhab)", meaning: "The Giver of All" },
    { name: "الرَّزَّاقُ (Ar-Razzaq)", meaning: "The Sustainer" },
    { name: "الْفَتَّاحُ (Al-Fattah)", meaning: "The Opener" },
    { name: "اَلْعَلِيْمُ (Al-'Alim)", meaning: "The Knower of All" },
    { name: "الْقَابِضُ (Al-Qabid)", meaning: "The Constrictor" },
    { name: "الْبَاسِطُ (Al-Basit)", meaning: "The Reliever" },
    { name: "الْخَافِضُ (Al-Khafid)", meaning: "The Abaser" },
    { name: "الرَّافِعُ (Ar-Rafi)", meaning: "The Exalter" },
    { name: "الْمُعِزُّ (Al-Mu'izz)", meaning: "The Bestower of Honors" },
    { name: "المُذِلُّ (Al-Mudhill)", meaning: "The Humiliator" },
    { name: "السَّمِيعُ (As-Sami)", meaning: "The Hearer of All" },
    { name: "الْبَصِيرُ (Al-Basir)", meaning: "The Seer of All" },
    { name: "الْحَكَمُ (Al-Hakam)", meaning: "The Judge" },
    { name: "الْعَدْلُ (Al-'Adl)", meaning: "The Just" },
    { name: "اللَّطِيفُ (Al-Latif)", meaning: "The Subtle One" },
    { name: "الْخَبِيرُ (Al-Khabir)", meaning: "The All-Aware" },
    { name: "الْحَلِيمُ (Al-Halim)", meaning: "The Forbearing" },
    { name: "الْعَظِيمُ (Al-Azim)", meaning: "The Magnificent" },
    { name: "الْغَفُورُ (Al-Ghafur)", meaning: "The Forgiver and Hider of Faults" },
    { name: "الشَّكُورُ (Ash-Shakur)", meaning: "The Rewarder of Thankfulness" },
    { name: "الْعَلِيُّ (Al-Ali)", meaning: "The Highest" },
    { name: "الْكَبِيرُ (Al-Kabir)", meaning: "The Greatest" },
    { name: "الْحَفِيظُ (Al-Hafiz)", meaning: "The Preserver" },
    { name: "الْمُقِيتُ (Al-Muqit)", meaning: "The Nourisher" },
    { name: "الْحسِيبُ (Al-Hasib)", meaning: "The Accounter" },
    { name: "الْجَلِيلُ (Al-Jalil)", meaning: "The Mighty" },
    { name: "الْكَرِيمُ (Al-Karim)", meaning: "The Generous" },
    { name: "الرَّقِيبُ (Ar-Raqib)", meaning: "The Watchful One" },
    { name: "الْمُجِيبُ (Al-Mujib)", meaning: "The Responder to Prayer" },
    { name: "الْوَاسِعُ (Al-Wasi)", meaning: "The All-Comprehending" },
    { name: "الْحَكِيمُ (Al-Hakim)", meaning: "The Perfectly Wise" },
    { name: "الْوَدُودُ (Al-Wadud)", meaning: "The Loving One" },
    { name: "الْمَجِيدُ (Al-Majid)", meaning: "The Majestic One" },
    { name: "الْبَاعِثُ (Al-Ba'ith)", meaning: "The Resurrector" },
    { name: "الشَّهِيدُ (Ash-Shahid)", meaning: "The Witness" },
    { name: "الْحَقُّ (Al-Haqq)", meaning: "The Truth" },
    { name: "الْوَكِيلُ (Al-Wakil)", meaning: "The Trustee" },
    { name: "الْقَوِيُّ (Al-Qawiyy)", meaning: "The Possessor of All Strength" },
    { name: "الْمَتِينُ (Al-Matin)", meaning: "The Forceful One" },
    { name: "الْوَلِيُّ (Al-Wali)", meaning: "The Governor" },
    { name: "الْحَمِيدُ (Al-Hamid)", meaning: "The Praised One" },
    { name: "الْمُحْصِي (Al-Muhsi)", meaning: "The Appraiser" },
    { name: "الْمُبْدِئُ (Al-Mubdi)", meaning: "The Originator" },
    { name: "الْمُعِيدُ (Al-Mu'id)", meaning: "The Restorer" },
    { name: "الْمُحْيِي (Al-Muhyi)", meaning: "The Giver of Life" },
    { name: "اَلْمُمِيتُ (Al-Mumit)", meaning: "The Taker of Life" },
    { name: "الْحَيُّ (Al-Hayy)", meaning: "The Ever Living One" },
    { name: "الْقَيُّومُ (Al-Qayyum)", meaning: "The Self-Existing One" },
    { name: "الْوَاجِدُ (Al-Wajid)", meaning: "The Finder" },
    { name: "الْمَاجِدُ (Al-Majid)", meaning: "The Glorious" },
    { name: "الْواحِدُ (Al-Wahid)", meaning: "The Only One" },
    { name: "اَلاَحَدُ (Al-Ahad)", meaning: "The One" },
    { name: "الصَّمَدُ (As-Samad)", meaning: "The Satisfier of All Needs" },
    { name: "الْقَادِرُ (Al-Qadir)", meaning: "The All-Powerful" },
    { name: "الْمُقْتَدِرُ (Al-Muqtadir)", meaning: "The Creator of All Power" },
    { name: "الْمُقَدِّمُ (Al-Muqaddim)", meaning: "The Expediter" },
    { name: "الْمُؤَخِّرُ (Al-Mu'akhkhir)", meaning: "The Delayer" },
    { name: "الأوَّلُ (Al-Awwal)", meaning: "The First" },
    { name: "الآخِرُ (Al-Akhir)", meaning: "The Last" },
    { name: "الظَّاهِرُ (Az-Zahir)", meaning: "The Manifest One" },
    { name: "الْبَاطِنُ (Al-Batin)", meaning: "The Hidden One" },
    { name: "الْوَالِي (Al-Wali)", meaning: "The Sole Governor" },
    { name: "الْمُتَعَالِي (Al-Muta'ali)", meaning: "The Self Exalted" },
    { name: "الْبَرُّ (Al-Barr)", meaning: "The Source of All Goodness" },
    { name: "التَّوَابُ (At-Tawwab)", meaning: "The Acceptor of Repentance" },
    { name: "المُنْتَقِمُ (Al-Muntaqim)", meaning: "The Avenger" },
    { name: "العَفُوُ (Al-'Afuww)", meaning: "The Forgiver" },
    { name: "الرَّؤُوفُ (Ar-Ra'uf)", meaning: "The Clement" },
    { name: "مَالِكُ ٱلْمُلْكُ (Malik-al-Mulk)", meaning: "The Owner of All" },
    { name: "ذُوالْجَلاَلِ وَالإكْرَامِ (Dhul-Jalali Wal-Ikram)", meaning: "The Lord of Glory and Honour" },
    { name: "الْمُقْسِطُ (Al-Muqsit)", meaning: "The Just One" },
    { name: "الْجَامِعُ (Al-Jami)", meaning: "The Gatherer" },
    { name: "ٱلْغَنيُ (Al-Ghani)", meaning: "The Self-Sufficient" },
    { name: "ٱلْمُغْنِيُ (Al-Mughni)", meaning: "The Enricher" },
    { name: "اَلْمَانِعُ (Al-Mani')", meaning: "The Preventer of Harm" },
    { name: "الضَّارَ (Ad-Darr)", meaning: "The Creator of The Harmful" },
    { name: "النَّافِعُ (An-Nafi)", meaning: "The Creator of Good" },
    { name: "النُّورُ (An-Nur)", meaning: "The Light" },
    { name: "الْهَادِي (Al-Hadi)", meaning: "The Guide" },
    { name: "الْبَدِيعُ (Al-Badi)", meaning: "The Originator" },
    { name: "اَلْبَاقِي (Al-Baqi)", meaning: "The Everlasting" },
    { name: "ٱلْوَارِثُ (Al-Warith)", meaning: "The Inheritor of All" },
    { name: "الرَّشِيدُ (Ar-Rashid)", meaning: "The Righteous Teacher" },
    { name: "الصَّبُورُ (As-Sabur)", meaning: "The Patient" }
];



let currentIndex = 0;

const nameElement = document.getElementById("name");
const meaningElement = document.getElementById("meaning");
const nextButton = document.getElementById("next-btn");

function displayNextName() {
    const currentName = names[currentIndex];
    nameElement.innerText = currentName.name;
    meaningElement.innerText = currentName.meaning;

    currentIndex = (currentIndex + 1) % names.length;  // Loop back to the start after the last name
}

nextButton.addEventListener("click", displayNextName);

// Display the first name on load
displayNextName();
