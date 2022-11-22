const express = require("express");
const upload = require("../middleware/upload");
const { uploadToCloudinary, removeFromCloudinary } = require("../config/cloudinary");
const router = new express.Router();





router.post("/dishes", async (req, res) => {
    try {
        const dish = new Dish(req.body);
        await dish.save();
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/image/:id", upload.single("dishes-img"), async (req, res) => {
    try {
        const data = await uploadToCloudinary(req.file.path, "dishes-images");
        const saveImg = await Dish.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    imageUrl: data.url,
                    publicId: data.public_id,
                },
            }
        );
        res.status(200).send("User image uploaded with success!");
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/image/:id", async (req, res) => {
    try {
        const dish = await Dish.findOne({ _id: req.params.id });
        const publicId = dish.publicId;
        await removeFromCloudinary(publicId);
        const deleteImg = await Dish.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    imageUrl: "",
                    publicId: ""
                },
            }
        );
        res.status(200).send("User image was deleted");
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;