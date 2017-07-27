const Note = require('mongoose').model('Note');

module.exports = {

    create(request, response){
        console.log('im in notes js file');
        const note = new Note(request.body);
        console.log('created new note', note);
        note.save()
        .then(function(note){
            console.log('save note', note);
            response.json(note);
        })
        .catch(function(error){
            console.log(error)
        })
    },

    getAll(request, response){
        console.log('fetching all notes');
        Note.find({})
        .then(function(notes){
            console.log(notes);
            response.json(notes);
        })
        .catch(function(error){
            console.log(error);
        })
    }

};