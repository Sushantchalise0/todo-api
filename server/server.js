const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedDate: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: ' Sleep Fast'
// });

// newTodo.save().then((docs) => {
//     console.log(docs);
// }, (e) => {
//     console.log('Unable to save');
// });


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true
    }
});

var newUser = new User({
    email: 'sushant@gmail.com'
});

newUser.save().then((docs) => {
    console.log(JSON.stringify(docs));
}, (e) => {
    console.log(e);
});