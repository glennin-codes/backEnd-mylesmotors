import carsModel from "../models/cars.js";
export const getAllCars = async (req, res) => {
  try {
    const { dataAmount } = req.params;
    let data;
    if (dataAmount) {
      data = await carsModel.find().limit(Number(dataAmount));
    } else {
      data = await carsModel.find();
    }

    console.log(req.params);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return 1;
  }
};
