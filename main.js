/*
    Define a variable named `notes` and assign a value of an empty array
*/
let notes = [{
    id: 1,
    text: "Make sure to eat tacos.",
    author: "Your mom.",
    date: "04/20/22",
    topics: ["task", "feelings"]
},
{
    id: 2,
    text: "This code is terrible.  Burn computer.",
    author: "Me",
    date: "05/17/22",
    topics: ["task", "feelings", "code"]
}]

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

//add three more notes to your array using the .push method.
notes.push({
    id: 3,
    text: "The end is nigh.",
    author: "Prophet downstairs",
    date: "06/01/22",
    topics: ["apocalypse", "lunch"]
})

notes.push({
    id: 4,
    text: "The toilet in the break room is destroyed.",
    author: "The boss",
    date: "06/07/22",
    topics: ["apocalypse", "health concerns"]
})

notes.push({
    id: 5,
    text: "The client has absconded with your cat.",
    author: "Me",
    date: "06/22/22",
    topics: ["tragedy", "apocalypse"]
})

//print the text of each note to the console
for (let note of notes) {
    console.log(note.text)
}

//print all the topics with only one instance
let noteTopics = []
console.log("\n*** All Note Topics ***")
for (let note of notes) {
    for (let top of note.topics) {
        if (!(noteTopics.includes(top)) ) {
            noteTopics.push(top)
            console.log(top) 
        } 
    }
}

//print the average number of topics per post
console.log("\n*** Average Topics Per Note ***")

//calculate total of topics and notes
let totalNumOfTopics = 0
let totalNotes = 0

for (let note of notes) {
    for (let top of note.topics) {
        totalNumOfTopics ++
    }
    totalNotes ++
}

//Calculate and print average topics per note
console.log(totalNumOfTopics / totalNotes)

//Filter by topics
//new variables to complete task: an empty array and a string for the search criteria
let filteredNotes = []
let criteria = "apocalypse"

//iterate each object and iterate through topics, adding each object conatining search criteria to the new array.
for (let note of notes) {
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note)
  }
}


//console log the new array
console.log(`\n*** Notes with the ${criteria} topic ***`)
console.log(filteredNotes)


//Note Articles//
//Iterate through notes and print just the text section with <aritcle> tags for each one.
//Iterate throgh the topics and add each one as a child <section> on a new line
console.log("\n*** Note Articles ***")

for (let note of notes) {
    console.log(`\n<article>\n    ${note.text}`)
    for (let topic of note.topics) {
        console.log(`   <section>${topic}</section>`)
    }
    console.log(`</article>`)

}

