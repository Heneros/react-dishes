const cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

uploadToCloudinary = (path, folder) => {
    return cloudinary.v2.uploader.upload(path, {
        folder
    }).then((data) => {
        return { url: data.url, public_id: data.public_id };
    }).catch((error) => {
        console.log(error);
    })
}

removeFromCloudinary = async (public_id) => {
    await cloudinary.v2.uploader.destroy(public, function (error, result) {
        console.log(result.error);
    })
}

module.exports = { uploadToCloudinary, removeFromCloudinary };