import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    threadId: {
        type: Schema.Types.ObjectId,
        ref: "Thread",
        required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;