import { Schema, model} from "mongoose";

const schema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    }
})

const movie = model("Movie", schema);

export default movie;