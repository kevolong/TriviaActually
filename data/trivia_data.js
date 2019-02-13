/* KEYS
    question: "Question String"
    answer: "Answer String"
    wrong: [Array of 3 wrong answers]
    tag: "Picture category tag String"
    level: "Difficulty string" (easy, med, hard)

  TAGS
    main 
    juliet 
    mark
    peter
    daniel 
    sam 
    daniel_sam
    joanna
    david 
    natalie 
    david_natalie
    colin
    caterer 
    billy
    joe 
    aurelia 
    jamie 
    karen 
    harry
    daisy
    mia
    john
    judy
    john_judy
    sarah
    karl
    rufus
    president
    babes
    tony
    anon_male
    anon_female
    question
*/

const template = {
  question: "",
  answer: "",
  wrong: ["", "", ""],
  tag: "",
  level: ""
};

module.exports = [
  {
    question: "What final distraction lets Sam go up to Joanna at the gate?",
    answer: "Billy Mack performing naked on tv",
    wrong: [
      "Rufus looking for his boarding pass",
      "Daniel faking a heart attack",
      "Macaulay Culkin lookalike dropping a bunch of breakable ornaments"
    ],
    tag: "sam",
    level: "easy"
  },
  {
    question: "What airport does Jamie fly to Portugal from?",
    answer: "Gatwick",
    wrong: ["Heathrow", "Luton", "Stanstead"],
    tag: "jamie",
    level: "hard"
  },
  {
    question: "Who does Daniel meet at the nativity play and instantly fall for?",
    answer: "Carol",
    wrong: ["Claudia", "Christine", "Carla"],
    tag: "daniel",
    level: "med"
  },
  {
    question: "Where does Karen confront Harry about the necklace?",
    answer: "school auditorium",
    wrong: ["kitchen", "school parking lot", "bedroom"],
    tag: "karen",
    level: "easy"
  },
  {
    question: "Who sings with Joanna?",
    answer: "her mom",
    wrong: ["her dad", "her brother", "her aunt"],
    tag: "joanna",
    level: "easy"
  },
  {
    question: "How does The Prime Minister introduce Natalie to Karen?",
    answer: "Catering Manager",
    wrong: ["Nutrition Supervisor", "Cuisine Administrator", "Refreshment Officer"],
    tag: "david",
    level: "med"
  },
  {
    question: "What excuse does The Prime Minister give Natalie's family so he can talk to her?",
    answer: "state business",
    wrong: ["national crisis", "catering emergency", "major catastrophe"],
    tag: "david",
    level: "med"
  },
  {
    question: "What inspires The Prime Minister to go after Natalie?",
    answer: "her Christmas card",
    wrong: ["her love letter", "her voicemail", "her mix-tape"],
    tag: "david_natalie",
    level: "easy"
  },
  {
    question: "Which is NOT one of Mark's cue cards?",
    answer: "I LOVE YOU",
    wrong: ["TO ME, YOU ARE PERFECT", "MERRY CHRISTMAS", "(AND AT CHRISTMAS YOU TELL THE TRUTH)"],
    tag: "mark",
    level: "easy"
  },
  {
    question: "Why does Karen think Harry bought her a necklace?",
    answer: "finds it in his coat pocket",
    wrong: ["finds the receipt", "sees him wrapping it", "overhears him on the phone"],
    tag: "karen",
    level: "med"
  },
  {
    question: `"America, watch out. Here comes Colin Frissell, and he's got a _____."`,
    answer: "big knob",
    wrong: ["giant peter", "big bobby", "fat pickle"],
    tag: "colin",
    level: "easy"
  },
  {
    question: "What color is the necklace Harry buys Mia?",
    answer: "gold",
    wrong: ["silver", "white", "red"],
    tag: "harry",
    level: "med"
  },
  {
    question: "How does Sarah's brother try to attack her at the mental health facility?",
    answer: "hit",
    wrong: ["bite", "scratch", "spit"],
    tag: "sarah",
    level: "hard"
  },
  {
    question: `"Nowadays, the only clothes I can get into were once owned by _____."`,
    answer: "Pavarotti",
    wrong: ["Bocelli", "Rossini", "Puccini"],
    tag: "karen",
    level: "med"
  },
  {
    question: `"I'm not quite sure it's gonna be possible to get The _____ on the phone tonight."`,
    answer: "Pope",
    wrong: ["Queen", "Emperor", "Lord"],
    tag: "sarah",
    level: "med"
  },
  {
    question: "What does Sarah NOT do before Karl comes upstairs?",
    answer: "spray air freshener",
    wrong: ["hide her teddy bear", "hide her clothes", "dance of joy"],
    tag: "sarah",
    level: "med"
  },
  {
    question: `"Just one dance? Before _____."`,
    answer: "we run out of chances",
    wrong: ["the night is over", "we sober up", "we get too drunk"],
    tag: "karl",
    level: "med"
  },
  {
    question: `"It's for you. It's _____, sir."`,
    answer: "all for you",
    wrong: ["the season to be sinful", "going to be a Merry Christmas", "time for your present"],
    tag: "mia",
    level: "easy"
  },
  {
    question: `"I think it's brilliant. I think it's stellar. Apart from the one obvious, tiny, little, _____."`,
    answer: "baby little hiccup",
    wrong: ["tiny insignificant detail", "small little problem", "minor small issue"],
    tag: "daniel",
    level: "easy"
  },
  {
    question: "What are the women dressed as in Billy Mack's music video?",
    answer: "sexy Mrs. Claus",
    wrong: ["sexy reindeer", "sexy elves", "sexy snowflakes"],
    tag: "billy",
    level: "easy"
  },
  {
    question: `Who says, "There was for you. There is for me. She's the one."?`,
    answer: "Sam (the little drummer boy)",
    wrong: [
      "David (The Prime Minister)",
      "Jamie (the forlorn writer)",
      "Daniel (the super stepdad)"
    ],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: `"It's a _____ thing, you see."`,
    answer: "self-preservation",
    wrong: ["self-protection", "self-defense", "self-conservation"],
    tag: "mark",
    level: "easy"
  },
  {
    question: "What excuse does Mark use to leave Juliet alone in his apartment?",
    answer: "early lunch",
    wrong: ["meeting", "doctor's appointment", "matinee show"],
    tag: "mark",
    level: "med"
  },
  {
    question: "How does Juliet find out Mark is in love with her from the wedding footage?",
    answer: "it's all of her",
    wrong: [
      "he mumbles it on camera",
      "Sarah comments about it in the background",
      "video diary confession cuts in"
    ],
    tag: "juliet",
    level: "easy"
  },
  {
    question: "Where is Joanna from?",
    answer: "America",
    wrong: ["France", "South Africa", "Jamaica"],
    tag: "joanna",
    level: "easy"
  },
  {
    question: `Who says, "You stayed rather close, haven't you?"`,
    answer: "Juliet (the newlywed bride)",
    wrong: [
      "Judy (the cute naked co-worker)",
      "Karen (the faithful wife)",
      "Mia (the evil seductress)"
    ],
    tag: "anon_female",
    level: "easy"
  },
  {
    question: `"This better not be some shit _____ could have written."`,
    answer: "my grandmother",
    wrong: ["a monkey", "my two-year old nephew", "a tumblr teenager"],
    tag: "aurelia",
    level: "easy"
  },
  {
    question: `"It's not worth it! This isn't bloody _____!"`,
    answer: "Shakespeare",
    wrong: ["Dickens", "Tolkien", "Chaucer"],
    tag: "jamie",
    level: "easy"
  },
  {
    question: `"I really must do _____."`,
    answer: "copies",
    wrong: ["backups", "saves", "duplicates"],
    tag: "jamie",
    level: "easy"
  },
  {
    question: `Who says, "True love lasts a lifetime."?`,
    answer: "Karen (the faithful wife)",
    wrong: [
      "Juliet (the newlywed bride)",
      "Aurelia (the temporary housekeeper)",
      "Joanna (the cute naked co-worker)"
    ],
    tag: "anon_female",
    level: "hard"
  },
  {
    question:
      "Who does The Prime Minister pretend is on the other line to get off the phone with Karen?",
    answer: "Chancellor of the Exchequer",
    wrong: ["Japanese Ambassador", "The Queen", "Lord Chief Justice"],
    tag: "david",
    level: "med"
  },
  {
    question: `"We may be a _____, but we're a _____ one too."`,
    answer: "small, great",
    wrong: ["tiny, major", "little, leading", "wee, prominent"],
    tag: "david",
    level: "easy"
  },
  {
    question: "What does The President say to The Prime Minister when caught creeping on Natalie?",
    answer: "It's great scotch.",
    wrong: ["What?", "You have a great staff here.", "Howdy."],
    tag: "president",
    level: "med"
  },
  {
    question: "What does The President comment about Natalie to The Prime Minister?",
    answer: "pretty little son of a bitch",
    wrong: ["hot piece of ass", "total babe", "sexy siren"],
    tag: "president",
    level: "easy"
  },
  {
    question: "What color is Aurelia's coat?",
    answer: "red",
    wrong: ["purple", "black", "pink"],
    tag: "aurelia",
    level: "hard"
  },
  {
    question: "Actually, they're not funny. They're _____.",
    answer: "art",
    wrong: ["masterpieces", "serious", "somber"],
    tag: "mark",
    level: "easy"
  },
  {
    question: `Who says, "Basically you're fucked, aren't you?"`,
    answer: "Daniel (the super stepdad)",
    wrong: [
      "Mark (the unrequited lover)",
      "Tony (the extremely tolerant friend)",
      "John (the shy naked rambler)"
    ],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "What is John asked to do immediately after meeting Judy?",
    answer: "fondle her breasts",
    wrong: ["grab her butt", "pull her hair", "simulate oral"],
    tag: "john_judy",
    level: "easy"
  },
  {
    question: "What does The Prime Minister not want to act like in front of The President?",
    answer: "petulant child",
    wrong: ["unruly brother", "nagging wife", "rebellious teenager"],
    tag: "david",
    level: "med"
  },
  {
    question: `What is wrong with "Christmas" in Billy Mack's cover?`,
    answer: "extra syllable",
    wrong: ["ruins the rhyme", "doesn't make sense", "different pitch"],
    tag: "billy",
    level: "easy"
  },
  {
    question: `Who says, "Think about it, for all our sakes. It's Christmas."?`,
    answer: "Harry (the cheating husband)",
    wrong: [
      "Peter (the newlywed groom)",
      "David (The Prime Minister)",
      "Daniel (the super stepdad)"
    ],
    tag: "anon_male",
    level: "med"
  },
  {
    question: "How does Sarah react to finding out everyone knows she's in love with Karl?",
    answer: "Oh, that is...that is bad news.",
    wrong: ["Fuck me.", "Oh...that's bad.", "Oh, dear god, no."],
    tag: "sarah",
    level: "easy"
  },
  {
    question: "Who is Sarah's boss?",
    answer: "Harry (the cheating husband)",
    wrong: [
      "Daniel (the super stepdad)",
      "Mark (the unrequited lover)",
      "Peter (the newlywed groom)"
    ],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "What is Daniel's relationship to Sam?",
    answer: "stepfather",
    wrong: ["grandfather", "uncle", "father"],
    tag: "daniel",
    level: "easy"
  },
  {
    question: `Who is Daniel "share Frosted Flakes out of the box" friends with?`,
    answer: "Karen (the faithful wife)",
    wrong: [
      "Juliet (the newlywed bride)",
      "Judy (the cute naked co-worker)",
      "Aurelia (the temporary housekeeper)"
    ],
    tag: "daniel",
    level: "easy"
  },
  {
    question: `Who says, "Junction 13 is just murder, isn't it? Total gridlock this morning."?`,
    answer: "John (the shy naked rambler)",
    wrong: [
      "Tony (the extremely tolerant friend)",
      "David (The Prime Minister)",
      "Mark (the unrequited lover)"
    ],
    tag: "anon_male",
    level: "med"
  },
  {
    question: "What does Colin say the wedding appetizer looks like?",
    answer: "dead baby's finger",
    wrong: ["rat tail", "rotting worm", "decomposing dildo"],
    tag: "colin",
    level: "easy"
  },
  {
    question: "What is The Prime Minister's reaction after meeting Natalie?",
    answer: "Oh, god. That is so inconvenient.",
    wrong: ["Uh oh.", "Oh, no. I'm doomed.", "Oh, bloody hell."],
    tag: "david",
    level: "med"
  },
  {
    question: `Who says, "Yeah, I'm mature now"?`,
    answer: "Mark (the unrequited lover)",
    wrong: [
      "Peter (the newlywed groom)",
      "Sam (the little drummer boy)",
      "Colin (the seeker of American babes)"
    ],
    tag: "anon_male",
    level: "med"
  },
  {
    question: "What does Mark say to Peter right before the wedding ceremony?",
    answer: "Good luck, kiddo.",
    wrong: ["Cheers, mate.", "Knock 'em dead, kiddo.", "Go get married, mate."],
    tag: "mark",
    level: "med"
  },
  {
    question: `Who says, "I did have an awful premonition I was gonna fuck up on the first day!"?`,
    answer: "Natalie (the plumpy tea lady)",
    wrong: [
      "Karen (the faithful wife)",
      "Juliet (the newlywed bride)",
      "Judy (the cute naked co-worker"
    ],
    tag: "anon_female",
    level: "easy"
  },
  {
    question: "What year was Love Actually released?",
    answer: "2003",
    wrong: ["2005", "2007", "2001"],
    tag: "main",
    level: "hard"
  },
  {
    question: "What candy does Juliet offer Mark as a peace offering?",
    answer: "Munchies",
    wrong: ["Smarties", "Maltesers", "Crunchies"],
    tag: "juliet",
    level: "med"
  },
  {
    question: 'What does Juliet admit she has "terrible taste in"?',
    answer: "pie",
    wrong: ["men", "clothes", "candy"],
    tag: "juliet",
    level: "easy"
  },
  {
    question: "What song is played live at Juliet and Peter's wedding ceremony?",
    answer: "All You Need Is Love",
    wrong: ["Puppy Love", "God Only Knows", "Like I Love You"],
    tag: "juliet",
    level: "easy"
  },
  {
    question: `Who does The Prime Minister NOT mention in his "standing up for his country" speech?`,
    answer: "Spice Girls",
    wrong: ["Harry Potter", "David Beckham", "Churchill"],
    tag: "david",
    level: "easy"
  },
  {
    question: "What format is Mark's footage of Peter and Juliet's wedding in?",
    answer: "VHS",
    wrong: ["DVD", "YouTube", "Blu-Ray"],
    tag: "mark",
    level: "easy"
  },
  {
    question: "What was Natalie's first profanity in front of The Prime Minister?",
    answer: "shit",
    wrong: ["fuck", "wanker", "piss it"],
    tag: "natalie",
    level: "med"
  },
  {
    question: "Who wrote and directed?",
    answer: "Richard Curtis",
    wrong: ["Edgar Wright", "Mike Newell", "Stephen Frears"],
    tag: "anon_male",
    level: "hard"
  },
  {
    question:
      "What was Rufus originally supposed to be in a twist that was ultimately cut from the film?",
    answer: "angel",
    wrong: ["ghost", "undercover agent", "elf"],
    tag: "rufus",
    level: "hard"
  },
  {
    question:
      "Not great at drums, but what world-class talent did Sam have that would have been showcased in the airport scene, that was cut from the film?",
    answer: "gymnast",
    wrong: ["sprinter", "martial artist", "limbo"],
    tag: "sam",
    level: "hard"
  },
  {
    question:
      "Colin's insulting-the-wedding-caterer scene was taken from the cutting room floor of another film. What film?",
    answer: "Four Weddings and a Funeral",
    wrong: ["Notting Hill", "Bridget Jones's Diary", "Nine Months"],
    tag: "colin",
    level: "hard"
  },
  {
    question: `"I feel it in my ____, I feel it in my _____."`,
    answer: "fingers, toes",
    wrong: ["spirit, heart", "nature, soul", "stomach, head"],
    tag: "billy",
    level: "easy"
  },
  {
    question: `Who says, "The truth is, actually, I'm in love."?`,
    answer: "Sam (the little drummer boy)",
    wrong: [
      "David(The Prime Minister)",
      "Mark (the unrequited lover)",
      "Jamie (the forlorn writer)"
    ],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "What is Aurelia's native language?",
    answer: "Portuguese",
    wrong: ["Spanish", "French", "Italian"],
    tag: "aurelia",
    level: "easy"
  },
  {
    question: "What part does Daisy have in the nativity play?",
    answer: "1st Lobster",
    wrong: ["1st Crab", "1st Octopus", "1st Whale"],
    tag: "daisy",
    level: "easy"
  },
  {
    question: "Which superhero is a kid randomly face-painted as in the nativity play?",
    answer: "Spider-Man",
    wrong: ["Iron Man", "Superman", "Batman"],
    tag: "anon_male",
    level: "med"
  },
  {
    question: "Who works with John and Judy?",
    answer: "Tony (the extremely tolerant friend)",
    wrong: [
      "Peter (the newlywed groom)",
      "Daniel (the super stepdad)",
      "Colin (the seeker of American babes)"
    ],
    tag: "anon_male",
    level: "med"
  },

  {
    question: "What is Jamie's occupation?",
    answer: "novelist",
    wrong: ["journalist", "columnist", "screenwriter"],
    tag: "jamie",
    level: "med"
  },
  {
    question: "What present does Harry give to Mia?",
    answer: "necklace",
    wrong: ["lingerie", "earings", "ring"],
    tag: "harry",
    level: "easy"
  },
  {
    question: "What is the wedding caterer's name?",
    answer: "Nancy",
    wrong: ["Fiona", "Bridget", "Emma"],
    tag: "caterer",
    level: "med"
  },
  {
    question: "What is Colin's backpack chockerbock full of?",
    answer: "condoms",
    wrong: ["American cash", "Axe body spray", "Plan B"],
    tag: "colin",
    level: "easy"
  },
  {
    question: "What Christmas carol does The Prime Minister and his copper sing to kids?",
    answer: "Good King Wenceslas",
    wrong: ["Silent Night", "Joy to the World", "O Holy Night"],
    tag: "david",
    level: "med"
  },
  {
    question: `What body part of Natalie's did her ex insult as being fat?`,
    answer: "thighs",
    wrong: ["arms", "waist", "butt"],
    tag: "natalie",
    level: "med"
  },
  {
    question: "Who did Billy Mack joke was his greatest shag?",
    answer: "Britney Spears",
    wrong: ["J-Lo", "Posh Spice", "Alanis Morissette"],
    tag: "billy",
    level: "easy"
  },
  {
    question: "What is John's and Judy's occupation?",
    answer: "stand-ins",
    wrong: ["actors", "porn stars", "models"],
    tag: "john_judy",
    level: "easy"
  },
  {
    question: "Which local radio station does Billy Mack go on for an interview?",
    answer: "Watford",
    wrong: ["Wembley", "Wimbledon", "Westminster"],
    tag: "billy",
    level: "med"
  },
  {
    question: "Who keeps calling and interrupting Sarah?",
    answer: "brother",
    wrong: ["ex", "father", "sister"],
    tag: "sarah",
    level: "easy"
  },
  {
    question:
      "What does Jamie's brother claim he was over to borrow when caught cheating with Jamie's girlfriend?",
    answer: "cds",
    wrong: ["movies", "sugar", "batteries"],
    tag: "jamie",
    level: "med"
  },
  {
    question: "Who plays The President?",
    answer: "Billy Bob Thornton",
    wrong: ["Kevin Kline", "David Morse", "Clint Eastwood"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "How does Judy introduce herself?",
    answer: "Just Judy",
    wrong: ["Juicy Judy", "Jolly Judy", "Judge Judy"],
    tag: "judy",
    level: "med"
  },
  {
    question: "Which actor does John name-drop as having stood-in for?",
    answer: "Brad Pitt",
    wrong: ["Robert Downy Jr.", "Tom Cruise", "Ryan Gosling"],
    tag: "john",
    level: "med"
  },
  {
    question: "What was the original version of Billy Mack's hit single?",
    answer: "Love Is All Around",
    wrong: ["Sex Is All Around", "Love Is In The Air", "Sex Is In The Air"],
    tag: "billy",
    level: "easy"
  },
  {
    question: "Who is Daniel's celebrity crush?",
    answer: "Claudia Schiffer",
    wrong: ["Elle Macpherson", "Tyra Banks", "Kathy Ireland"],
    tag: "daniel",
    level: "easy"
  },
  {
    question: `Who plays Carla, "the real friendly" American sister that comes back with Colin?`,
    answer: "Denise Richards",
    wrong: ["Scarlett Johansson", "Amy Adams", "Rachel McAdams"],
    tag: "anon_female",
    level: "med"
  },
  {
    question: "What was the name of Sam's mother?",
    answer: "Joanna",
    wrong: ["Jane", "Julie", "Jordan"],
    tag: "sam",
    level: "hard"
  },
  {
    question: "Who was NOT one of the three American girls at the bar?",
    answer: "Shannon Elizabeth",
    wrong: ["Ivana Milicevic", "January Jones", "Elisha Cuthbert"],
    tag: "anon_female",
    level: "hard"
  },
  {
    question:
      "What is the name of the new lady companion Billy Mack brings back with him at the airport?",
    answer: "Greta",
    wrong: ["Daisy", "Nina", "Gemma"],
    tag: "billy",
    level: "med"
  },
  {
    question: "Karl is the ______ chief designer.",
    answer: "enigmatic",
    wrong: ["brilliant", "ingenious", "sophisticated"],
    tag: "karl",
    level: "med"
  },
  {
    question: "What was the name of The Prime Minister's pervy uncle?",
    answer: "Terence",
    wrong: ["Martin", "Walter", "George"],
    tag: "david",
    level: "med"
  },
  {
    question: `"Who do I have screw around here to get a _____ and a _____?"`,
    answer: "cup of tea, chocolate biscuit",
    wrong: ["tea, biscuit", "biscuits, scotch", "cup of tea, shortbread biscuit"],
    tag: "david",
    level: "easy"
  },
  {
    question: "What state does Colin go to?",
    answer: "Wisconsin",
    wrong: ["Texas", "California", "Maine"],
    tag: "colin",
    level: "easy"
  },
  {
    question: `Which word does Tony NOT say leading up to Colin's "Ja, darling!"?`,
    answer: "non",
    wrong: ["nyet", "nein", "no"],
    tag: "tony",
    level: "easy"
  },
  {
    question: "Which does Rufus NOT use to decorate the box for Harry's purchase?",
    answer: "chocolate buttons",
    wrong: ["lavender", "cinnamon stick", "roses"],
    tag: "harry",
    level: "hard"
  },
  {
    question: `"Now which doll shall we give Daisy's little friend Emily? The one that looks like a transvestite or the one that looks like a _____?"`,
    answer: "dominatrix",
    wrong: ["escort", "stripper", "hussy"],
    tag: "karen",
    level: "easy"
  },
  {
    question: "What film does Daniel use to comfort Sam?",
    answer: "Titanic",
    wrong: ["The Princess Bride", "Notting Hill", "Shakespeare in Love"],
    tag: "daniel",
    level: "easy"
  },
  {
    question: `"I will miss you and your very slow typing, and your very bad _____."`,
    answer: "driving",
    wrong: ["writing", "eating", "swimming"],
    tag: "aurelia",
    level: "easy"
  },
  {
    question: "What band does Billy mock for having little pricks?",
    answer: "Blue",
    wrong: ["Five", "One Direction", "Ultra"],
    tag: "billy",
    level: "med"
  },
  {
    question: "What is The Prime Minister's address?",
    answer: "10 Downing Street",
    wrong: ["10 Dawn Street", "10 Devonshire Street", "10 Downes Street"],
    tag: "david",
    level: "hard"
  },
  {
    question: "What instrument does Sam learn to play?",
    answer: "drums",
    wrong: ["guitar", "bass", "piano"],
    tag: "sam",
    level: "easy"
  },
  {
    question: "Who is The Prime Minister related to?",
    answer: "Karen (the faithful wife)",
    wrong: [
      "Juliet (the newlywed bride)",
      "Mark (the unrequited lover)",
      "Daniel (the super stepdad)"
    ],
    tag: "david",
    level: "easy"
  },
  {
    question: `"Let's get pissed and watch _____."`,
    answer: "porn",
    wrong: ["wrestling", "football", "boxing"],
    tag: "billy",
    level: "easy"
  },
  {
    question: `"I hate Uncle _____."`,
    answer: "Jamie",
    wrong: ["Mark", "Harry", "Bill"],
    tag: "jamie",
    level: "easy"
  },
  {
    question: "Which band does Jamie awkwardly try to hum in front of Aurelia?",
    answer: "Frankie Valli and the Four Seasons",
    wrong: ["Beach Boys", "The Beatles", "N'Sync"],
    tag: "jamie",
    level: "easy"
  },
  {
    question: "What is Aurelia's family name?",
    answer: "Barros",
    wrong: ["Acosta", "Bento", "Avelar"],
    tag: "aurelia",
    level: "hard"
  },
  {
    question: "Which is NOT one of the production companies?",
    answer: "New Line",
    wrong: ["Working Title", "StudioCanal", "Universal"],
    tag: "main",
    level: "hard"
  },
  {
    question: "Who narrates the opening?",
    answer: "Hugh Grant",
    wrong: ["Alan Rickman", "Liam Neeson", "Colin Firth"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: `"I've got a sneaky feeling that you'll find that love, actually, is _____.`,
    answer: "all around",
    wrong: ["everywhere", "already here", "easy to find"],
    tag: "david",
    level: "easy"
  },
  {
    question: "What is Billy Mack's profanity-laced outburst after screwing up the recording?",
    answer: "Oh fuck wank bugger shitting arse head and hole",
    wrong: [
      "Oh fuck fuck fuckity fuck",
      "Oh shit on my arse",
      "Oh shit wank bloody hell taking the piss"
    ],
    tag: "billy",
    level: "med"
  },
  {
    question: "How many weeks before Christmas does the film start?",
    answer: "5",
    wrong: ["4", "3", "6"],
    tag: "main",
    level: "hard"
  },
  {
    question: "Which does Colin NOT say when delivering food to Harry's office?",
    answer: "You can butter me up too.",
    wrong: [
      "Try my lovely nuts.",
      "Beautiful muffin for a beautiful lady.",
      "Good morning, my future wife."
    ],
    tag: "colin",
    level: "med"
  },
  {
    question: "How does John introduce himself?",
    answer: "Jack",
    wrong: ["Johnny", "Joe", "Bilbo"],
    tag: "john",
    level: "med"
  },
  {
    question: "What turned out to be wrong with the Brazilian prostitutes?",
    answer: "They were men.",
    wrong: ["They were cops.", "They blackmailed.", "They stole."],
    tag: "peter",
    level: "easy"
  },
  {
    question: `"How does it feel to be Prime Minister?" "_____."`,
    answer: "Cool. Powerful.",
    wrong: ["Sweet.", "Bloody good.", "Bitchin'."],
    tag: "david",
    level: "easy"
  },
  {
    question: `"Hurry up, big boy. I'm naked and I want you at least _____ before Jamie gets home."`,
    answer: "twice",
    wrong: ["three times", "two times", "five times"],
    tag: "jamie",
    level: "med"
  },
  {
    question: "What is Colin's complaint about English girls?",
    answer: "stuck up",
    wrong: ["cold", "ugly", "picky"],
    tag: "colin",
    level: "med"
  },
  {
    question: "Colin is the self-proclaimed _____ of sex.",
    answer: "god",
    wrong: ["master", "champion", "king"],
    tag: "colin",
    level: "med"
  },
  {
    question: "What song does Daniel play for his wife's funeral?",
    answer: "Bye Bye Baby",
    wrong: ["Knockin' on Heaven's Door", "Tears in Heaven", "I (Just) Died in Your Arms Tonight"],
    tag: "daniel",
    level: "med"
  },
  {
    question: "Who asks Mark if he's in love with Peter?",
    answer: "Sarah (the selfless sister)",
    wrong: [
      "Karen (the faithful wife)",
      "Juliet (the newlywed bride)",
      "Mia (the evil seductress)"
    ],
    tag: "mark",
    level: "easy"
  },
  {
    question: `What song does the wedding DJ play to earn him the title of "worst DJ in the world?"`,
    answer: "Puppy Love",
    wrong: ["Love Injection", "Your Body is a Wonderland", "Taste of My Love"],
    tag: "main",
    level: "med"
  },
  {
    question:
      "What drug is Billy Mack an ex-addict of and that Daniel worries Sam might be injecting into his eyeballs?",
    answer: "heroin",
    wrong: ["cocaine", "meth", "LSD"],
    tag: "billy",
    level: "med"
  },
  {
    question: `"I'll be stuck in some dingy flat with my manager Joe, _____ man in the world."`,
    answer: "ugliest",
    wrong: ["fattest", "chubbiest", "dumbest"],
    tag: "billy",
    level: "easy"
  },
  {
    question: "What company does Colin work for?",
    answer: "Munch Mob",
    wrong: ["Gobble Gang", "Chow Clan", "Lunch Lot"],
    tag: "colin",
    level: "hard"
  },
  {
    question: `"Oh god, you haven't got some six-foot, _____ boyfriend have you?"`,
    answer: "tight t-shirt wearing",
    wrong: ["muscle-bound jock", "tatted up", "motorcycle-riding"],
    tag: "harry",
    level: "med"
  },
  {
    question: `"Get a grip. People hate sissies. No one's ever gonna _____ you if you cry all the time."`,
    answer: "shag",
    wrong: ["bone", "screw", "ride"],
    tag: "karen",
    level: "easy"
  },
  {
    question: `"Worse than the _____ of love?"`,
    answer: "total agony",
    wrong: ["complete misery", "absolute awfulness", "shit-show"],
    tag: "sam",
    level: "easy"
  },
  {
    question: "Where is Jamie's writing retreat?",
    answer: "France",
    wrong: ["Italy", "Spain", "Germany"],
    tag: "jamie",
    level: "med"
  },
  {
    question: "Where does Natalie live?",
    answer: "Wandsworth, the dodgy end.",
    wrong: ["Wimbledon, the crap end.", "Westminster, the shit end.", "Wanstead, the dicey end."],
    tag: "natalie",
    level: "easy"
  },
  {
    question: `"The _____ are charming. Ruthless trained killers are just a phone call away."`,
    answer: "SAS",
    wrong: ["SIS", "SBS", "SRR"],
    tag: "david",
    level: "med"
  },
  {
    question: `Whose portrait does The Prime Minister call a "saucy minx?"`,
    answer: "Margaret Thatcher",
    wrong: ["Queen Elizabeth II", "Princess Diana", "Queen Elizabeth I"],
    tag: "david",
    level: "hard"
  },
  {
    question: "What is Uncle Bill's special message for kids?",
    answer: "Don't buy drugs.",
    wrong: ["Use condoms.", "Don't drink and drive.", "Get checked for STDs."],
    tag: "billy",
    level: "med"
  },
  {
    question: `What are the naked people wearing in the "art" at Mark's gallery?`,
    answer: "santa hats",
    wrong: ["elf ears", "Rudolph noses", "mistletoe"],
    tag: "mark",
    level: "easy"
  },
  {
    question: "What is wrong with Juliet's official wedding footage?",
    answer: "blue and wibbly",
    wrong: ["green and wiggly", "pink and pixelated", "brown and blurry"],
    tag: "juliet",
    level: "med"
  },
  {
    question: `It's an art gallery, full of _____ corners for doing _____ deeds.`,
    answer: "dark, dark",
    wrong: ["private, private", "secret, sinful", "hidden, hidden"],
    tag: "mia",
    level: "easy"
  },
  {
    question: "What Portuguese footballer does Jamie awkwardly mention to Aurelia?",
    answer: "Eusébio",
    wrong: ["Ronaldo", "Deco", "Nani"],
    tag: "jamie",
    level: "med"
  },
  {
    question: `"I'll give you anything you ask for, as long as it's not something I _____."`,
    answer: "don't want to give",
    wrong: ["want", "already claimed", "plan on having"],
    tag: "president",
    level: "easy"
  },
  {
    question: `"_____ taught your cold-hearted British wife how to feel."`,
    answer: "Joni Mitchell",
    wrong: ["Sinéad O'Conner", "Enya", "Alanis Morissette"],
    tag: "karen",
    level: "easy"
  },
  {
    question: "What song does The Prime Minister dance to?",
    answer: "Jump (For My Love)",
    wrong: ["Shout", "I'm so Excited", "Dancing with Myself"],
    tag: "david",
    level: "easy"
  },
  {
    question: "What does Aurelia warn Jamie not to disturb in the lake?",
    answer: "eels",
    wrong: ["snakes", "fish", "crabs"],
    tag: "aurelia",
    level: "easy"
  },
  {
    question: "What does Jamie write with?",
    answer: "typewriter",
    wrong: ["laptop", "pen and paper", "voice recorder"],
    tag: "jamie",
    level: "easy"
  },
  {
    question: "What percentage of the profits does Jamie offer Aurelia?",
    answer: "5%",
    wrong: ["50%", "15%", "25%"],
    tag: "jamie",
    level: "med"
  },
  {
    question: "What genre is Jamie's new novel?",
    answer: "crime",
    wrong: ["romance", "fantasy", "comedy"],
    tag: "jamie",
    level: "med"
  },
  {
    question: "The Prime Minister asks to have Natalie _____ to another department.",
    answer: "redistributed",
    wrong: ["transferred", "moved", "relocated"],
    tag: "david",
    level: "med"
  },
  {
    question: `"We need _____, and we need _____. And we need them now."`,
    answer: "Kate, Leo",
    wrong: ["Romeo, Juliet", "Baby, Johnny", "Harry, Sally"],
    tag: "daniel",
    level: "easy"
  },
  {
    question: "What misfortune befalls Jamie after he drops Aurelia off for the last time?",
    answer: "car crash",
    wrong: ["hit by a soccer ball", "trips and falls", "hit by big splash"],
    tag: "jamie",
    level: "easy"
  },
  {
    question: "What is NOT ever written on Sam's bedroom door chalkboard?",
    answer: "Feel the rhythm",
    wrong: ["Rhythm is my life", "I said I'm not hungry", "Ringo rules"],
    tag: "sam",
    level: "med"
  },
  {
    question: "What is Mia wearing at the office party?",
    answer: "devil horns",
    wrong: ["elf ears", "santa hat", "angel halo"],
    tag: "mia",
    level: "easy"
  },
  {
    question: `Who does Mia strongly correct as "not her boyfriend" at the office party?`,
    answer: "Mark (the unrequited lover)",
    wrong: [
      "Jamie (the forlorn writer)",
      "Peter (the newlywed groom)",
      "Colin (the seeker of American babes)"
    ],
    tag: "mia",
    level: "med"
  },
  {
    question: "What does Harry ask Mia that she needs for Christmas?",
    answer: "something along the stationary line",
    wrong: ["a tube pass", "a new office chair", "a better parking spot"],
    tag: "harry",
    level: "med"
  },
  {
    question: "What does Harry usually get Karen for Christmas?",
    answer: "scarves",
    wrong: ["sweaters", "shirts", "socks"],
    tag: "harry",
    level: "hard"
  },
  {
    question: "What does John exclaim when Judy agrees to a date?",
    answer: "Yay!",
    wrong: ["Woohoo!", "Yes!", "Sweet!"],
    tag: "john",
    level: "med"
  },
  {
    question: `"I'm on shag _____, heading west!"`,
    answer: "highway",
    wrong: ["airline", "airway", "freeway"],
    tag: "colin",
    level: "med"
  },
  {
    question: "What classic American beer does Colin order?",
    answer: "Budweiser",
    wrong: ["Coors", "Miller Light", "Pabst"],
    tag: "colin",
    level: "easy"
  },
  {
    question: "What can the American girls not afford?",
    answer: "pajamas",
    wrong: ["sheets", "underwear", "heat"],
    tag: "babes",
    level: "easy"
  },
  {
    question: `Who is "the sexy one?"`,
    answer: "Harriet",
    wrong: ["Stacey", "Carol-Anne", "Jeannie"],
    tag: "babes",
    level: "med"
  },
  {
    question: "Who invites Billy Mack to a party on Christmas Eve?",
    answer: "Elton John",
    wrong: ["David Bowie", "Rod Stewart", "Mick Jagger"],
    tag: "billy",
    level: "easy"
  },
  {
    question: `"All I want for Christmas is _____."`,
    answer: "you",
    wrong: ["love", "us", "sex"],
    tag: "judy",
    level: "easy"
  },
  {
    question: `"Is it all _____ down there?"`,
    answer: "party party party",
    wrong: ["fun fun fun", "dance dance dance", "feast feast feast"],
    tag: "sarah",
    level: "easy"
  },
  {
    question: "What food does Daniel try to lure Sam out of his room with?",
    answer: "chicken kebabs",
    wrong: ["burgers", "chicken tenders", "nachos"],
    tag: "daniel",
    level: "med"
  },
  {
    question: "What Christmas present does Sarah give to her brother?",
    answer: "scarf",
    wrong: ["hat", "sweater", "coat"],
    tag: "sarah",
    level: "hard"
  },
  {
    question: "Who does Mark tell Juliet to say is at the door?",
    answer: "carol singers",
    wrong: ["Jehova's witnesses", "charity collectors", "Santa"],
    tag: "mark",
    level: "easy"
  },
  {
    question: "Who is Billy's manager",
    answer: "Joe",
    wrong: ["Ted", "Jim", "Pat"],
    tag: "joe",
    level: "med"
  },
  {
    question: `"Where the _____ is my _____ coat."`,
    answer: "fuck, fucking",
    wrong: ["shit, bloody", "fuck, shitty", "hell, goddamn"],
    tag: "natalie",
    level: "med"
  },
  {
    question: "What costume is the kid wearing in the car with Natalie and The Prime Minster?",
    answer: "octopus",
    wrong: ["lobster", "whale", "shark"],
    tag: "david_natalie",
    level: "med"
  },
  {
    question: `"Catch a falling star and put it in your _____. Save it for a rainy day."`,
    answer: "pocket",
    wrong: ["backpack", "wardrobe", "nightstand"],
    tag: "main",
    level: "med"
  },
  {
    question: `"I am so in the wrong. A classic _____."`,
    answer: "fool",
    wrong: ["bastard", "wanker", "idiot"],
    tag: "harry",
    level: "med"
  },
  {
    question: "What color is Daisy's costume?",
    answer: "orange",
    wrong: ["red", "pink", "yellow"],
    tag: "daisy",
    level: "med"
  },
  {
    question: `"There was more than one lobster present at the birth of Jesus?" "_____."`,
    answer: "Duh",
    wrong: ["Obviously", "Apparently", "Doy"],
    tag: "daisy",
    level: "easy"
  },
  {
    question: `"Shut up Mrs _____ 2003!"`,
    answer: "Dunkin' Donut",
    wrong: ["Big Mac", "Taco Bell", "Double Decker"],
    tag: "aurelia_sister",
    level: "med"
  },
  {
    question: "What airport is featured?",
    answer: "Heathrow",
    wrong: ["Gatwick", "Luton", "Stanstead"],
    tag: "main",
    level: "easy"
  },
  {
    question: "Who composed the score?",
    answer: "Craig Armstrong",
    wrong: ["David Arnold", "John Powell", "Clint Mansell"],
    tag: "anon_male",
    level: "hard"
  },
  {
    question: "What is Aurelia's new job when Jamie proposes?",
    answer: "waitress",
    wrong: ["bartender", "hostess", "cook"],
    tag: "aurelia",
    level: "easy"
  },
  {
    question: `"Definitely go for England, girl. You'll meet _____. Then you can marry him instead."`,
    answer: "Prince William",
    wrong: ["Jude Law", "Daniel Craig", "David Beckham"],
    tag: "aurelia_sister",
    level: "med"
  },
  {
    question: "How long after Christmas does the epilogue take place?",
    answer: "1 month",
    wrong: ["1 week", "1 year", "1 day"],
    tag: "main",
    level: "hard"
  },
  {
    question: "What song ends the film?",
    answer: "God Only Knows",
    wrong: ["All You Need Is Love", "All I Want For Christmas Is You", "Christmas Is All Around"],
    tag: "main",
    level: "med"
  },
  {
    question: "What shape does the airport footage mosaic take before the credits roll?",
    answer: "heart",
    wrong: ['letters "LA"', 'word "love"', "Christmas tree"],
    tag: "question",
    level: "med"
  },
  {
    question: `Why was Oliva Olson's performance of "All I Want for Christmas is You" edited?`,
    answer: "sound more like a child",
    wrong: ["auto-tune errors", "lower pitch", "sound less breathy"],
    tag: "joanna",
    level: "hard"
  },
  {
    question: "Who had to wear a fat suit to appear heavier?",
    answer: "Emma Thompson",
    wrong: ["Martine McCutcheon	", "Martin Freeman", "Alan Rickman"],
    tag: "anon_female",
    level: "hard"
  },
  {
    question: "Whose subplot did ABC Family remove for tv broadcast?",
    answer: "John and Judy (the naked co-workers)",
    wrong: [
      "Mia (the evil seductress)",
      "Colin (the seeker of American babes)",
      "Sarah (the selfless sister)"
    ],
    tag: "main",
    level: "hard"
  },
  {
    question: `Who is the talk-show host that jokes Billy's "single" will "never make number one."`,
    answer: "Michael Parkinson",
    wrong: ["Graham Norton", "David Frost", "Jonathan Ross"],
    tag: "billy",
    level: "hard"
  },
  {
    question: `"Let's go get the _____ kicked out of us by love."`,
    answer: "shit",
    wrong: ["piss", "shite", "crap"],
    tag: "sam",
    level: "easy"
  },
  {
    question:
      "Sarah has been in love with Karl for two years, seven months, three days, and _____.",
    answer: "an hour and thirty minutes",
    wrong: ["a few hours", "an hour", "some change"],
    tag: "sarah",
    level: "hard"
  },
  {
    question: "Ready in the _____ of flashes.",
    answer: "flashiest",
    wrong: ["fastest", "fleetest", "flightiest"],
    tag: "rufus",
    level: "easy"
  },
  {
    question: `Joe refers to Billy's Christmas single as "solid _____ shit, maestro."`,
    answer: "gold",
    wrong: ["platinum", "diamond", "silver"],
    tag: "joe",
    level: "med"
  },
  {
    question: `"When I was young and successful, I was greedy and foolish, and now I'm left with no one, _____ and alone."`,
    answer: "wrinkled",
    wrong: ["old", "withered", "feeble"],
    tag: "billy",
    level: "med"
  },
  {
    question: `"_____ definitely got laid at least once. For God's sake, Ringo Starr married a Bond girl!"`,
    answer: "Meatloaf",
    wrong: ["Marilyn Manson", "Gene Simmons", "Lemmy"],
    tag: "daniel",
    level: "med"
  },
  {
    question: "What street does Natalie live on?",
    answer: "Harris",
    wrong: ["High", "Holborn", "Highbury"],
    tag: "natalie",
    level: "hard"
  },
  {
    question: `Which word do the American girls NOT have Colin say with his "cute British accent?"`,
    answer: "napkin",
    wrong: ["bottle", "straw", "table"],
    tag: "babes",
    level: "med"
  },
  {
    question: `"No, no. We'll want to _____ in every room, including yours."`,
    answer: "have sex",
    wrong: ["snog", "get busy", "get off"],
    tag: "daniel",
    level: "easy"
  },
  {
    question: `"Give them a quid and tell them to _____ off."`,
    answer: "bugger",
    wrong: ["piss", "sod", "bog"],
    tag: "peter",
    level: "med"
  },
  {
    question: `"You've seen the films, kiddo. It ain't _____ til it's _____."`,
    answer: "over",
    wrong: ["done", "lost", "gone"],
    tag: "daniel",
    level: "easy"
  },
  {
    question: `"Yeah, _____ broken from too much sex!"`,
    answer: "back",
    wrong: ["hip", "pelvis", "mind"],
    tag: "colin",
    level: "easy"
  },
  {
    question:
      "Who does Harry advise the girls to avoid if they don't want their breasts fondled at the office party?",
    answer: "Kevin",
    wrong: ["Charles", "Chase", "Keith"],
    tag: "harry",
    level: "hard"
  },
  {
    question: "Which does Jamie NOT say when learning Portuguese?",
    answer: "Watch out or the shark will eat you.",
    wrong: [
      "It must have been the prawns.",
      "My goodness, this is a very big fish.",
      "Oh my god, I've got a terrible stomach ache."
    ],
    tag: "jamie",
    level: "med"
  },
  {
    question: `"You know she is, darling. _____."`,
    answer: "Be careful there.",
    wrong: ["Watch out.", "Watch yourself.", "Tread carefully."],
    tag: "karen",
    level: "med"
  },
  {
    question: `"I don't want something I need; I want something I want. Something _____."`,
    answer: "pretty",
    wrong: ["sexy", "nice", "expensive"],
    tag: "mia",
    level: "med"
  },
  {
    question: `"I look quite _____."`,
    answer: "pretty",
    wrong: ["lovely", "fetching", "ravishing"],
    tag: "juliet",
    level: "easy"
  },
  {
    question: "What prize does Billy give for the competition winners?",
    answer: "personalized felt-tip pen",
    wrong: ["autographed cd", "autographed poster", "VIP tickets"],
    tag: "billy",
    level: "easy"
  },
  {
    question: "Why does Colin think American girls will dig him?",
    answer: "cute British accent",
    wrong: ["sexy British accent", "posh British accent", "charming British accent"],
    tag: "colin",
    level: "easy"
  },
  {
    question: `"I'll be hanging around the _____, hoping to be kissed."`,
    answer: "mistletoe",
    wrong: ["Christmas tree", "dark corner", "punch bowl"],
    tag: "mia",
    level: "easy"
  },
  {
    question: `"I know I seems an insane person because I hardly knows you, but sometimes things are so _____ they don't need evidential proof."`,
    answer: "transparency",
    wrong: ["plane", "visibility", "glare"],
    tag: "jamie",
    level: "easy"
  },
  {
    question: `"Life is full of interruptions and _____."`,
    answer: "complications",
    wrong: ["obstacles", "troubles", "problems"],
    tag: "karl",
    level: "med"
  },
  {
    question: `"Smile. Wave. _____."`,
    answer: "Take a bow.",
    wrong: ["Pose for pics.", "Exit stage left.", "No comment."],
    tag: "david_natalie",
    level: "easy"
  },
  {
    question: `"Yes, well, the difference is that you're sickeningly handsome, whereas I look increasingly like my Aunt _____."`,
    answer: "Mildred",
    wrong: ["Blythe", "Ethel", "Audrey"],
    tag: "david",
    level: "hard"
  },
  {
    question: `"What did my brother do today? He stood up and fought for his country. And what did I do? I made a _____ lobster head."`,
    answer: "papier-maché",
    wrong: ["styrofoam", "felt", "construction-paper"],
    tag: "karen",
    level: "easy"
  },
  {
    question: "Who plays David, The Prime Minister?",
    answer: "Hugh Grant",
    wrong: ["Colin Ferrell", "Pierce Brosnan", "Colin Firth"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Billy Mack, the comeback rock star?",
    answer: "Bill Nighy",
    wrong: ["David Bowie", "Rowan Atkinson", "Ciarán Hinds"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Daniel, the super stepdad?",
    answer: "Liam Neeson",
    wrong: ["Andrew Lincoln", "Ian McShane", "Patrick Stewart"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Mark, the unrequited lover?",
    answer: "Andrew Lincoln",
    wrong: ["Hugh Grant", "Andrew Scott", "Ewan McGregor"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Harry, the cheating husband?",
    answer: "Alan Rickman",
    wrong: ["Liam Neeson", "Gary Oldman", "Ralph Fiennes"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Karl, the object of Sarah's desire?",
    answer: "Rodrigo Santoro",
    wrong: ["Javier Bardem", "Antonio Banderas", "Pedro Pascal"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Peter, the newlywed groom?",
    answer: "Chiwetel Ejiofor",
    wrong: ["Andrew Lincoln", "Idris Elba", "Tom Hiddleston"],
    tag: "anon_male",
    level: "med"
  },
  {
    question: "Who plays Colin, the seeker of American babes?",
    answer: "Kris Marshall",
    wrong: ["Martin Freeman", "Simon Pegg", "Matt Smith"],
    tag: "anon_male",
    level: "med"
  },
  {
    question: "Who plays John, the shy naked rambler?",
    answer: "Martin Freeman",
    wrong: ["Andrew Lincoln", "Simon Pegg", "James McAvoy"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Jamie, the forlorn writer?",
    answer: "Colin Firth",
    wrong: ["Hugh Grant", "Jude Law", "Kenneth Branagh"],
    tag: "anon_male",
    level: "easy"
  },
  {
    question: "Who plays Karen, the faithful wife?",
    answer: "Emma Thompson",
    wrong: ["Kristin Scott Thomas", "Tilda Swinton", "Emma Watson"],
    tag: "anon_female",
    level: "easy"
  },
  {
    question: "Who plays Mia, the evil seductress?",
    answer: "Heike Makatsch",
    wrong: ["Franka Potente", "Diane Kruger", "Elisabeth Röhm"],
    tag: "anon_female",
    level: "med"
  },
  {
    question: "Who plays Judy, the cute naked co-worker?",
    answer: "Joanna Page",
    wrong: ["Rosamund Pike", "Hayley Atwell", "Vanessa Kirby"],
    tag: "anon_female",
    level: "med"
  },
  {
    question: "Who plays Juliet, the newlywed bride?",
    answer: "Kiera Knightley",
    wrong: ["Alice Eve", "Gemma Arterton", "Emma Watson"],
    tag: "anon_female",
    level: "easy"
  },
  {
    question: "Who plays Sarah, the selfless sister?",
    answer: "Laura Linney",
    wrong: ["Helen Hunt", "Laura Dern", "Michelle Pfeiffer"],
    tag: "anon_female",
    level: "easy"
  },
  {
    question: "Who plays Natalie, the plumpy potty-mouth?",
    answer: "Martine McCutcheon",
    wrong: ["Roxanne McKee", "Hayley Atwell", "Billie Piper"],
    tag: "anon_female",
    level: "med"
  },
  {
    question: "Who plays Aurelia, the temporary housekeeper?",
    answer: "Lucia Moniz",
    wrong: ["Roselyn Sanchez", "Melissa Fumero", "Natalie Martinez"],
    tag: "anon_female",
    level: "med"
  },
  {
    question: "Who plays Rufus, the methodical jewelry salseman?",
    answer: "Rowan Atkinson",
    wrong: ["John Cleese", "Eddie Izzard", "Ricky Gervais"],
    tag: "anon_male",
    level: "med"
  },
  {
    question: "Who plays Sam, the little drummer boy?",
    answer: "Thomas Brodie-Sangster",
    wrong: ["Frankie Muniz", "Jeremy Sumpter", "Freddie Highmore"],
    tag: "anon_male",
    level: "med"
  }
];
