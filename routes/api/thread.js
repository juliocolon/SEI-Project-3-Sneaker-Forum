const express = require('express');
const router = express.Router();
const Thread = require('../../models/Thread');



// //INDEX 
// router.get("/", (req, res) => {
//     Thread.find({}, (err, foundThreads) => {
//         if (!err) {
//             res.status(200).json(foundThreads)
//         } else {
//             res.status(400).json(err)
//         }
//     })
// })

// //Table route 

// router.get('/table', (req, res) => {
//     Thread.find({}, (err, foundThreads) => {
//         if (!err) {
//             const formattedData = foundThreads.reduce((acc, item) => {
//                 acc[item.brandcategory] = acc[item.brandcategory] ? [...acc[item.brandcategory], item] : [item]
//                 return acc
//             }, {})
//             res.status(200).json(formattedData)
//         } else {
//             res.status(400).json(err)
//         }
//     })
// })



//CREATE
router.post('/', (req, res) => {
    const { body } = req
    Thread.create(body, (err, createdThread) => {
        if (!err) {
            res.status(200).json({ message: "All Good!", createdThread: createdThread })
        } else {
            res.status(400).json(err)
        }
    })
})




// //Update 

// router.put('/:id', (req, res) => {
//     const { body } = req

//     Thread.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedThread) => {
//         if (!err) {
//             res.status(200).json(updatedThread)
//         } else {
//             res.status(400).json(err)
//         }
//     })

// })






// // DELETE
// router.delete("/:id", (req, res) => {
//     Thread.findByIdAndDelete(req.params.id, (err) => {
//         if (!err) {
//             res.status(200).json({ message: "Deleted that task" })
//         } else {
//             res.status(400).json(err)
//         }
//     })
// })



// //SHOW
// router.get('/:id', (req, res) => {
//     Thread.findById(req.params.id, (err, foundTask) => {
//         if (!err) {
//             res.status(200).json(foundTask)
//         } else {
//             res.status(400).json(err)
//         }
//     })
// })









module.exports = router;