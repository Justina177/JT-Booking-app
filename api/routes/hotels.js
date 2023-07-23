import express from "express";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin,  createHotel);

    // const newHotel = new Hotel(req.body)
    // try {
    //     const savedHotel = await newHotel.save()
    //     res.status(200).json(savedHotel)

    // } catch (err){
    //     res.status(500).json(err)
    // }



// UPDATE
router.put("/:id", verifyAdmin, updateHotel)
//     try {
//         const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
//             { $set: req.body},
//             { new: true }
//         )
//         res.status(200).json(updatedHotel)
//     } catch (err){
//         res.status(500).json(err)
//     }
// });

// DELETE

router.delete("/:id", verifyAdmin, deleteHotel)

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity)
router.get("/countByType", getHotel)

export default router