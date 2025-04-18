import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id: req.body.userId});
        
        if (!userData) {
            return res.json({success: false, message: "User not found"});
        }
        
        // Initialize cartData if it doesn't exist
        if (!userData.cartData) {
            userData.cartData = {};
        }
        
        // No need for await here - cartData is just an object property
        let cartData = userData.cartData;
        
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Item added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

// remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id: req.body.userId});
        
        if (!userData) {
            return res.json({success: false, message: "User not found"});
        }
        
        // Initialize cartData if it doesn't exist
        if (!userData.cartData) {
            userData.cartData = {};
        }
        
        let cartData = userData.cartData;
        
        if (cartData[req.body.itemId] > 1) {
            cartData[req.body.itemId] -= 1;
        } else {
            delete cartData[req.body.itemId];
        }
        
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Item removed from cart"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

//fetch user cart data
const getCart = async (req, res) => {
    
}

export { addToCart, removeFromCart, getCart };