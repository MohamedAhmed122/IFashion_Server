import Store from "../model/store";
import asyncHandler from "express-async-handler";

// @desc   Get all the stores
//@route   GET /api/stores
//@Access  Public

const getStores = asyncHandler(async (req, res) => {
  const store = await Store.find({});
  res.json(store);
});

// @desc   Get all the stores
//@route   GET /api/stores/:id
//@Access  Public

const getStoreById = asyncHandler(async (req, res) => {
  let id = req.params.id;
  const store = await Store.findById(id);

  if (store) {
    res.json(store);
  } else {
    res.status(404);
    throw new Error("store not found");
  }
});

export { getStores, getStoreById };
