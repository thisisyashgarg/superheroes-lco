import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  madeUpName: {
    type: String,
    required: [true, "PLease enter a unique name"],
    unique: true,
    trim: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, "Please enter a short name"],
  },
});

// finds hero model, if not present creates a new model
export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
