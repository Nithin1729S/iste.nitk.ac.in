 const questionList_ = [
  {
    id: 0,
    title: "GREEN",
    options: [
      "Red",
      "Green",
      "None of these"
    ],
    marked: null,
    correctOptionIndex: 0
  },
  {
    id: 1,
    title: "YELLOW",
    options: [
      "Yellow",
      "I have no idea",
      "Pink",
      "None of these"
    ],
    marked: null,
    correctOptionIndex: 2
  },
  {
    id: 2,
    title: "BLUE",
    options: [
      "Orange",
      "Blue",
      "None"
    ],
    marked: null,
    correctOptionIndex: 0
  },
  {
    id: 3,
    title: "BROWN",
    options: [
      "Orange",
      "Brown",
      "This is irritating"
    ],
    marked: null,
    correctOptionIndex: 1
  },
  {
    id: 4,
    title: "PURPLE",
    options: [
      "Violet",
      "Purple",
      "Aren't both the same?"
    ],
    marked: null,
    correctOptionIndex: 1
  },
  {
    id: 5,
    title: "Wheat",
    options: [
      "Never heard of this color",
      "Wheat",
      "Grey",
      "Never heard of both the colors"
    ],
    marked: null,
    correctOptionIndex: 2
  },
  {
    id: 6,
    title: "LIGHT BLUE",
    options: [
      "Skyblue",
      "Confusing",
      "Darkblue"
    ],
    marked: null,
    correctOptionIndex: 2
  },
  {
    id: 7,
    title: "CHOCOLATE",
    options: [
      "Crimson",
      "Chocolate",
    ],
    marked: null,
    correctOptionIndex: 0
  },
  {
    id: 8,
    title: "OLIVE",
    options: [
      "Olive",
      "Option which starts with O",
      "Orange"
    ],
    marked: null,
    correctOptionIndex: 2
  }
]

function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}
export let questionList=shuffle(questionList_).map((que,ind)=>{
             return {
               ...que,
               id:ind
             }
})