const express = require('express')
const router = express.Router();
const menu = require('./../models/menu')

// GET
router.get('/', async (req, res) => {
    try {
        const menuData = await menu.find();
        res.status(200).json(menuData);
    } catch (err) {
        res.status(500).json({ err: "Menu Not Fetched" })
    }
})

// POST method
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new menu(data);
        const response = await newMenu.save();

        console.log("Menu Fetched");
        res.status(200).json(response);
        
    } catch (err) {
        res.status(500).json({ err: "Something went wrong" })
    }
})

//  pararms
router.get('/:taste', async (req, res) => {
    try {
    const tasteType = req.params.taste;
    if (tasteType == 'sour' || tasteType == "spicy" || tasteType == "sweet") {
        const response = await menu.find({ taste: tasteType });
        console.log("Menu Fetched3");
        res.status(200).json(response)
    } else {
        res.status(404).json({ err: "Something went wrong" })
    }


    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Something went wrong" })
    }
})


// PUT Method
router.put('/:id', async (req, res) => {
    try {
        const menuID = req.params.id;
        const updateMenuData = req.body;

        const response = await menu.findByIdAndUpdate(menuID, updateMenuData, {
            new: true,  // returns the updaated document
            runValidators: true  //run mangoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Menu item not found' });
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Menu Item not found" })
    }

})



// DELETE Method
router.delete('/:id', async(req,res)=>{
    try{
        const menuID = req.params.id;
        const response = await menu.findByIdAndDelete(menuID);

        if(!response){
            return res.send(404).json({err:"Menu Item not FOund !!"});
    }

        console.log("Data Deleted Successfully");
        res.status(200).json({message : 'Menu Item Deleted Successfully !!'})

    }catch(err){
        console.log(err);
        res.status(500).json({ err: "Menu Item not found" })
    }
})


module.exports = router;