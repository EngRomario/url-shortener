import mongoose from "mongoose";
const { Schema } = mongoose;

interface IShort {
    shortURL: string;
    hash: string;
    originURL: string;
}


const shortSchema = new Schema<IShort>({
  shortURL: {type: "string", required: true},
  hash: {type: "string", required: true},
  originURL: {type: "string", required: true},
});

// export class URL extends Typegoose {
//   @prop({ required: true })
//   hash: string;

//   @prop({ required: true })
//   originURL: string;

//   @prop({ required: true })
//   shortURL: string;
// }

export const URLModel = mongoose.model<IShort>("URL", shortSchema);
