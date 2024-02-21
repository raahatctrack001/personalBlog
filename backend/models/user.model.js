import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }, 
    profilePicture: {
        type: String,
        default: 'https://www.dailymoss.com/wp-content/uploads/2019/08/Very-Funny-Profile-Pictures-5.jpg'
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;