import mongoose from 'mongoose'


const DBconnection=async ()=>{
    // const MONGODB_URI='mongodb://localhost:27017/fileSharing';
    // error while connecting to database URI must include hostname, domain name, and tld -> this error is due to the '@' thats why we write it in ASCII Value form.
    const MONGODB_URI=process.env.MONGODB_URI;

    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log("error while connecting to database",error.message);
    }
}

export default DBconnection;