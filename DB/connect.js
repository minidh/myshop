const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://newuser:1234@mindohui.qlrxppf.mongodb.net/?retryWrites=true&w=majority&appName=mindohui')
    } catch (error) {
        throw new Error("Connection Failed!")
    }
};