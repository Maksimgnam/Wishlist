const Wish = require('../../models/Wish');
const WishList = require('../../models/WishList')
const mongoose = require('mongoose');

const db = mongoose.connection


exports.getAllWishesById = async (req, res)=>{
  try {
    const id = req.params.id;
    const wish = await WishList.findById(id);
    
    if (!wish) {
      return res.status(404).json({ error: 'Wish not found' });
    }
    res.status(200).json(wish);
  } catch (error) {
    console.error("Error getting jar:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
exports.deleteWishlistById = async (req, res)=>{
  try {
    const id = req.params.id;
    const deletedWishlist = await WishList.deleteOne({_id: id});
    res.status(200).json(deletedWishlist);
  } catch (error) {
    console.error("Error getting jar:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

exports.addWish = async (req, res)=>{
  try {
    const id = req.params.id;
    const data = req.body;


    const wish = await WishList.findById(id);
    if (!wish) {
      return res.status(404).json({ error: 'Wish not found' });
    }


    wish.wishes.push(data);
    await wish.save();
    await Wish.findByIdAndUpdate(id, { isBooked: true });

    res.status(201).json({ message: "Wish added successfully", id: data._id });
  } catch (error) {
    console.error("Error adding wish:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

exports.getAllWishLists = async (req, res)=>{
  try {
      const wishes = await WishList.find({});
      res.status(200).json(wishes);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
exports.addWishList = async (req, res)=>{
  try {
      const wishListData = req.body;
      const result = await db.collection('wishlists').insertOne(wishListData);
      console.log('Inserted data with ID:', result.insertedId);
      res.status(200).json({ message: 'Data received and saved successfully' });
    } catch (err) {
      console.error('Error inserting data into MongoDB:', err);
      res.status(500).json({ message: 'Failed to save data' });
    }
}

exports.bookWish = async (req, res) => {
  try {
    const { id, wishId } = req.params;

    const result = await WishList.updateOne(
      { _id: id, 'wishes.wishId': wishId },
      { $set: { 'wishes.$.isBooked': true } }
    );

    if (result.nModified === 0) {
      return res.status(404).json({ error: 'Wish not found or already booked' });
    }
    const updatedWishList = await WishList.findById(id);
    console.log(`Updated wishlist: ${JSON.stringify(updatedWishList)}`);

    res.status(200).json({ message: "Wish status updated successfully" });
  } catch (error) {
    console.error("Error updating wish status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

exports.getWishById = async (req, res)=>{
  try {
    const { id, wishId } = req.params;
      const wishList = await WishList.findById(id);

      const wish = wishList.wishes.find(w => w.wishId === wishId);
      
      res.status(200).json(wish);
      console.log(wish)
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}
exports.deleteWishById = async (req, res)=>{
  try {
    const {id, wishId} = req.params;
    const wishList = await WishList.findById(id);


    const wishIndex = wishList.wishes.findIndex(wish => wish.wishId === wishId)


   wishList.wishes.splice(wishIndex, 1);
   await wishList.save();
   res.status(200).json({ message: 'Wish deleted successfully' });
  } catch (error) {
    console.error("Error getting jar:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
