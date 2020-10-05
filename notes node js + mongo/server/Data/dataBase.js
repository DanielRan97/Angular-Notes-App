const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/notes', {useUnifiedTopology: true, useNewUrlParser: true} )
.then(
    () => console.log('connect to mongo/notes..')
)