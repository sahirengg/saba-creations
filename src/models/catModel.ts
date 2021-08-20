import mongoose from 'mongoose';

const CatSchema = new mongoose.Schema({
    catName: {
        type: String,
        
    },
    price:  {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    image:  {
        type: String,
        
    },
});

const CategoryList = mongoose.model('categoryList', CatSchema);
export default CategoryList;


 