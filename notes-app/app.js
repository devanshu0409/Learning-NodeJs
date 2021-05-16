const notes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk')
const { demandOption, command } = require('yargs')
const { argv } = require('process')

//Customize yargs

//Create add command in yargs
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Title of the note',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Things to be written in the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    } 
})

//Create remove command in yargs
yargs.command({
    command : 'remove',
    describe : 'Remove the note',
    builder : {
        title : {
            describe : 'Title of the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

//Create list command in yargs
yargs.command({
    command : 'list',
    describe : 'List all available notes',
    handler() {
        notes.listNotes()
    } 
})

//Create read command in yargs
yargs.command({
    command : 'read',
    describe : 'Read the note',
    builder : {
        title : {
            describe : 'Title of the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

// console.log(process.argv)
yargs.parse()
