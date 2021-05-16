const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your Notes . . . . '
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    //const duplicates = notes.filter((note) => note.title === title)
    const duplicates = notes.find((note) => note.title === title)

    if(!duplicates){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.green('Note added successfully'))
    }else {
        console.log(chalk.red('Note already exists'))
    }
    
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( (note) => note.title !== title)

    if(notes.length === notesToKeep.length){
        console.log(chalk.red('Note does not exists'))
    }else{
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed successfully'))

    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse.blueBright('Your Notes...'))
    notes.forEach(note => {
        console.log(note)
    });
}

const readNotes = (title) => {
    const notes = loadNotes();
    const result = notes.find((note) => note.title === title)

    if(result){
        console.log(result)
    }else {
        console.log(chalk.red('Note does not exist'))
    }
}

const saveNotes = (notes) => {
    const noteString = JSON.stringify(notes)
    return fs.writeFileSync('notes.json', noteString)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e) {
        return []
    }
}

module.exports = {
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}