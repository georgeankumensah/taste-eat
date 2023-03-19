const usersCollection = require("./Users.mongo");

async function validateAdmin(type, value) {
	let res = await usersCollection.findOne({ [type]: value });
	if (!res) {
		throw new Error("Invalid admin password");
		return;
	}
	return res;
}

module.exports = {
	validateAdmin,
};
