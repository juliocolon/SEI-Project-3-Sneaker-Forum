const express = require('express');
const router = express.Router();
const Thread = require('../../models/Thread');
const User = require('../../models/User')



//INDEX 
router.get("/", (req, res) => {
    Thread.find({}, (err, foundThreads) => {
        if (!err) {
            res.status(200).json(foundThreads)
        } else {
            res.status(400).json(err)
        }
    })
})

router.get("/byuser/:id", async (req, res) => {
    const user = await User.findById(req.params.id).populate("threads")
    res.json(user.threads)
})

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
router.post('/:id', async (req, res) => {
    const { body } = req
    const thread = await Thread.create(body)
    if (thread) {
        const user = await User.findById(req.params.id)
        user.threads.push(thread._id)
        user.save()
        res.status(200).json({ message: "All Good!", createdThread: thread })
    } else {
        res.status(400).json(err)
    }

})




// //Update 

router.put('/:id', (req, res) => {
    const { body } = req

    Thread.findByIdAndUpdate(req.params.id, body, { new: true }, (err, updatedThread) => {
        if (!err) {
            res.status(200).json(updatedThread)
        } else {
            res.status(400).json(err)
        }
    })

})






// DELETE
router.delete("/:id", (req, res) => {
    Thread.findByIdAndDelete(req.params.id, (err) => {
        console.log(Thread)
        if (!err) {
            res.status(200).json({ message: "Deleted that thread" })
        } else {
            res.status(400).json(err)
        }
    })
})



//SHOW
router.get('/:id', (req, res) => {
    Thread.findById(req.params.id, (err, foundThread) => {
        if (!err) {
            res.status(200).json(foundThread)
        } else {
            res.status(400).json(err)
        }
    })
})









module.exports = router;