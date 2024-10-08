import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
	plot: String,
	genres: [String],
	runtime: Number,
	cast: [String],
	poster: String,
	title: {
		type: String,
		required: true,
		index: true,
	},
	fullplot: String,
	languages: [String],
	released: Date,
	directors: Array,
	rated: String,
	awards: {
		wins: Number,
		nominations: Number,
		text: String,
	},
	lastupdated: Date,
	year: {
		type: Number,
		required: true,
		index: true,
	},
	imdb: {
		rating: Number,
		votes: Number,
		id: Number,
	},
	countries: [String],
	type: String,
	tomatoes: {
		viewer: {
			rating: Number,
			numReviews: Number,
			meter: Number,
		},
		fresh: Number,
		critic: {
			rating: Number,
			numReviews: Number,
			meter: Number,
		},
		rotten: Number,
		lastUpdated: Date,
	},
	num_mflix_comments: Number,
});

export default mongoose.model("Movie", moviesSchema);
