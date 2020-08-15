const express = require('express')
const router = express.Router()
const Picture = require('../models/Picture')
const geolib = require('geolib')

router.get('/', async (req,res)=> {
    try {

        var images = []
        const lat = req.query.lat
        const lng = req.query.lng
        const rad = req.query.rad
        const pictures = await Picture.find({})

        pictures.forEach((picture) => {
            if(geolib.isPointWithinRadius(
                {latitude: lat, longitude: lng},
                { latitude: picture.lat, longitude: picture.lng },
                rad)){
                    images.push(picture)
                }
        })

        res.json(images)

    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server error')
    }
});

module.exports = router;