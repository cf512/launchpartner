const mongoose = require("mongoose");
const db = require("../models");

// Clears all characters and loads the default set below

mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/punchoutDB"
);

const characterSeed = [
  {
    name: "ReactJS Connor, a.k.a Good MERNing",
    from: "Austin, Texas",
    image: "https://content.screencast.com/users/ConnorConnorF/folders/Snagit/media/73a0993b-ff89-454b-b13d-911cbc522450/connor-profile-pic.jpeg",
    about: "Connor is a lifelong Texan who was born in 1982. He is husband to an amazing wife, father to a precious daughter, and he enjoys software development, fishing, the outdoors, and traveling.",
    date: new Date(Date.now())
  },
  {
    name: "Little Mac",
    from: "Bronx, NY, USA",
    image: "https://static.comicvine.com/uploads/original/8/85165/1827432-litle_mac.jpg",
    about: "Little Mac is 17 years old, 5' 7\", weighs 107 lb (49 kg) and hails from the Bronx, New York. He usually appears as a medium built Italian-American with black hair and wears a black singlet, black and white shoes and green shorts and boxing gloves.",
    date: new Date(Date.now())
  },
  {
    name: "Iron Mike",
    from : "Catskill, NY, USA",
    image: "https://vignette.wikia.nocookie.net/punchout/images/0/00/Mike_Tyson.png",
    about: "Mike Tyson made hme debut in \"Mike Tyson's Punch-Out!!\" on the Nintendo Entertainment System as the final opponent of the game, whom Little Mac faces in the Dream Fight at the end.",
    date: new Date(Date.now())
  },
  {
    name: "Mr. Dream",
    from: "Dreamland",
    image: "https://vignette.wikia.nocookie.net/punchout/images/9/9a/Screenshot_2016-03-18_at_10.21.58_AM.png",
    about: "Mr. Dream made his only appearance in a re-release of \"Mike Tyson's Punch-Out!!\" now referred to as Punch-Out!! Featuring Mr. Dream.",
    date: new Date(Date.now())
  },
  {
    name: "Glass Joe",
    from: "Paris, France",
    image: "https://vignette.wikia.nocookie.net/punchout/images/2/2f/GlassJOE.gif",
    about: "Glass Joe is usually seen as the easiest character to beat in any version of \"Punch-Out!!\" he is in. He has poor defensive skills and takes quite a while to mount any offense. His lone signature maneuver is his \"Taunt Punch\" in which he takes a few steps back, shakes his gloves, and shouts, \"Eh, eh? Vive la France! (Long live France)\" before he rushes forward to unleash his right hook, which can easily be counter-punched for an immediate knockdown.",
    date: new Date(Date.now())
  },
  {
    name: "Von Kaiser",
    from: "Berlin, Germany",
    image: "https://vignette.wikia.nocookie.net/punchout/images/4/49/VonKaiserGif.gif",
    about: "Von Kaiser made his first appearance on the 1987 Nintendo Entertainment System game \"Mike Tyson's Punch-Out!!\" as the second opponent in the Minor Circuit. Von Kaiser is generally regarded as harder than Glass Joe, although some may argue that the fact that his OHKD is much quicker and more accessible than Glass Joe's and the fact that he has an infinite makes him easier.",
    date: new Date(Date.now())
  },
  {
    name: "Piston Honda",
    from: "Tokyo, Japan",
    image: "https://vignette.wikia.nocookie.net/punchout/images/7/78/Nes_piston_honda.gif",
    about: "Piston Honda (ピストン本田 Pisuton Honda) is a boxer from Tokyo, Japan. His quirks include the fact that Piston Hondo'snameand trademark Banzai Rush Attack (also known as the Piston Rush and the Hondo Rush) are reminiscent of Piston Hurricane from the earlier \"Punch-Out!!\" arcade game and later \"Super Punch-Out!!\" Super Nintendo game.",
    date: new Date(Date.now())
  },
  {
    name: "Don Flamenco",
    from: "in",
    image: "https://vignette.wikia.nocookie.net/punchout/images/7/71/Nes_don_flamenco.gif",
    about: "Don Flamenco is a palette swap of Glass Joe, appearing as the first opponent in the Major Circuit, ranked #3. At the start of his fight, Flamenco dances with a rose in his mouth to the overture from Carmen, then shows off with a vicious uppercut.",
    date: new Date(Date.now())
  },
  {
    name: "King Hippo",
    from: "Hippo Island, South Pacific",
    image: "https://vignette.wikia.nocookie.net/punchout/images/3/31/King_hippo.gif",
    about: "In \"Mike Tyson's Punch-Out!!\", King Hippo is truly the most unique character of the Worxing Association, as well as the only character whave a palette swap. His defense is impenetrable until he opens his mouth. When his mouth is hit, Hippo reveals his one weakness: his overly large trunks start falling down, and he has to keep pulling them up whilst trying to fend off Little Mac's body blows. Once Little Mac floors King Hippo, he does not get up.",
    date: new Date(Date.now())
  },
  {
    name: "Great Tiger",
    from: "Mumbai, India",
    image: "https://vignette.wikia.nocookie.net/punchout/images/c/ca/Nes_great_tiger.gif",
    about: "The music played for Great Tiger (also used for Von Kaiser and Super Macho Man) is an excerpt from the classical compositionthe Valkyries\". Unlike the other opponents that have theme music, the music is played at the beginning of the second and third round when he teleports to the ring center and not the first.",
    date: new Date(Date.now())
  },
  {
    name: "Bald Bull",
    from: "Istanbul, Turkey",
    image: "https://vignette.wikia.nocookie.net/punchout/images/9/97/Nes_bald_bull.gif",
    about: "Bald Bull returned to the ring in the NES game \"Mike Tyson's Punch-Out!!\" in 1987; in which Little Mac first encounters him as the Major Circuit Champion and then later on as the #3 ranked competitor in the WVBA World Circuit.",
    date: new Date(Date.now())
  },
  {
    name: "Soda Popinski",
    from: "Moscow, U.S.S.R.",
    image: "https://vignette.wikia.nocookie.net/punchout/images/4/43/Nes_soda_popinski.gif",
    about: "In the 1987 Nintendo Entertainment System game \"Punch-Out!!\", Soda is the #4 ranked competitor in the World Circuit. Interestingly, despite removing the alcoholic reference from his origiy from the arcade game \"Super Punch-Out!!\", some of his quotes suggest that he still drinks alcohol, rather than soda. He is known for his infamous laugh, which was also used in the Game Over sequence in Zelda II: The Adventure Of Link.",
    date: new Date(Date.now())
  },
  {
    name: "Mr. Sandman",
    from: "Philadelphia, PA, USA",
    image: "https://vignette.wikia.nocookie.net/punchout/images/d/d3/Nes_mr_sandman.gif",
    about: "Mr. Sandman returned in \"Mike Tyson's Punch-Out!!\". Although he was dropped down to #1 in the World Circuit with Super Macho Man being the champion, he sports the ability to guard himself whilst stunned and possesses unpredictable punching behavior so it won't be an easy battle.",
    date: new Date(Date.now())
  },
  {
    name: "Super Macho Man",
    from: "Hollywood, CA, USA",
    image: "https://vignette.wikia.nocookie.net/punchout/images/e/e7/Nes_super_macho_man.gif",
    about: "In \"Mike Tyson's Punch-Out!!\" Super Macho Man became World Circuit Champion. His attacks are the exact same punches as Soda Popinski's. He will usually use his special attack Macho Spin Punch two times in a row, but it doesn't require the player to duck as in all of the other \"Punch-Out!!\" games.",
    date: new Date(Date.now())
  },
  {
    name: "Doc",
    from: "Louisville, KY, USA",
    image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/e/e7/1445910018683.gif/revision/latest?cb=20180306121930",
    about: "Formerly a heavyweight boxer, Jerome 'Doc' Louis' presence achieved fame in the United States around 1954. Decades later Doc, now coaching the sport, has a chance encounter with a young fightername Little Mac, who has aspirations to box professionally. Louis agrees to take charge of Mac, teaching him everything there is to know about boxing. In between rounds, Doc Louis often advises on a weakness or trick in Little Mac's opponent for him to exploit.",
    date: new Date(Date.now())
  }
];

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
