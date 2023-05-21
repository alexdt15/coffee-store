import { Schema, model } from "mongoose";

const coffeeSchema = new Schema({
  name: String,
  price: Number,
  description: String,
});

const Coffee = model("coffee", coffeeSchema);

export default Coffee;
