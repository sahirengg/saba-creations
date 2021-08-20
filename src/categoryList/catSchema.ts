import mongoose from 'mongoose';

const CatSchema = new mongoose.Schema({
    catName: String,
    price: Number,
    description: String,
    image: String,
},{ collection: 'details'});

mongoose.model('Categories', CatSchema);
// await CategoryModel.createCollection();
export default mongoose.model('Categories');


 