import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarkSchema = new Schema({
  files: String,
  build: { type: Schema.Types.ObjectId, ref: 'Build' }
});

export default mongoose.model('Mark', MarkSchema);