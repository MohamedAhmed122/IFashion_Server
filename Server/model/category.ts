import mongoose from 'mongoose'


const categorySchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Store',
      },
    name :{
        type: String,
        required: true
    },
   image :{
       type: String,
       required: true,
   },
})

const Category = mongoose.model('Category', categorySchema);

export default  Category;