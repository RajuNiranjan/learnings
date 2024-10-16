let reviews = [
  {
    id: "1",
    reating: 9,
    content: "Great gameplay!",
    auther_id: "1",
    game_id: "2",
  },
  {
    id: "2",
    reating: 8,
    content: "Could be better.",
    auther_id: "2",
    game_id: "3",
  },
  { id: "3", reating: 10, content: "Amazing!", auther_id: "3", game_id: "1" },
  {
    id: "4",
    reating: 7,
    content: "Nice visuals.",
    auther_id: "4",
    game_id: "4",
  },
  { id: "5", reating: 6, content: "Not bad.", auther_id: "5", game_id: "5" },
  {
    id: "6",
    reating: 8,
    content: "Fun but repetitive.",
    auther_id: "6",
    game_id: "6",
  },
  { id: "7", reating: 9, content: "Loved it!", auther_id: "7", game_id: "7" },
];

let authors = [
  { id: "1", name: "Mario", verified: true },
  { id: "2", name: "Luigi", verified: false },
  { id: "3", name: "Peach", verified: true },
  { id: "4", name: "Toad", verified: false },
  { id: "5", name: "Yoshi", verified: true },
  { id: "6", name: "Bowser", verified: false },
  { id: "7", name: "Daisy", verified: true },
];

let games = [
  { id: "1", title: "Mario Kart", platform: ["Switch", "Xbox"] },
  { id: "2", title: "The Legend of Zelda", platform: ["Switch"] },
  { id: "3", title: "Super Smash Bros", platform: ["Switch", "Xbox", "PC"] },
  { id: "4", title: "Animal Crossing", platform: ["Switch", "PSS"] },
  { id: "5", title: "Splatoon", platform: ["PC"] },
  { id: "6", title: "Fire Emblem", platform: ["Switch", "PC"] },
  { id: "7", title: "Metroid Dread", platform: ["Switch"] },
];

export default { games, reviews, authors };
