import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const threadSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    file: {
      type: String,
    },
    upvotes: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    downvotes: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    comments: [{
      type: Schema.Types.ObjectId,
      ref: "Comment",
    }],
  },
  { timestamps: true }
);

const Thread = mongoose.model("Thread", threadSchema);

export default Thread;