const Hostpital = require("../models/Hostpital");

exports.getHospitals = async (req, res, next) => {
  try {
    const hospitals = await Hostpital.find();
    res
      .status(200)
      .json({ sucess: true, count: hospitals.length, data: hospitals });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

exports.getHospital = async (req, res, next) => {
  try {
    const hospital = await Hostpital.findById(req.params.id);

    if (!hospital) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ sucess: true, data: hospital });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

exports.createHospital = async (req, res, next) => {
  const hospital = await Hostpital.create(req.body);
  res.status(200).json({ sucess: true, data: hospital });
};

exports.updateHospital = async (req, res, next) => {
  try {
    const hospital = await Hostpital.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!hospital) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ sucess: true, data: hospital });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

exports.deleteHospital = async (req, res, next) => {
  try {
    const hospital = await Hostpital.findByIdAndDelete(req.params.id);

    if (!hospital) {
      return res.status(400).json({ sucess: false });
    }
    res.status(200).json({ sucess: true, data: {} });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};
