import { Schema,model } from "mongoose";


const productSchema = new Schema({
    name : {
        type : String,
        required : [true, "Name is required"],
        minLength : [3, "Name must be atleast 3 character long"],
        maxLength : [50, "Name should be atmost 50 character long"],
        trim : true
    },

    description : {
        type : String,
        required : [true, "Description is required"],
        minLength : [5, "Description must be atleast 4 character long"],
        maxLength : [200, "Description should be atmost 50 character long"]
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a positive number"]
    },


    thumbnail : {
        public_id : {
            type : String,
            required : true
        },
        secure_url : {
            type : String,
            required : true
        }
    },
},  {

    timestamps : true
})

const Product = model("Produt",productSchema);
export default Product;