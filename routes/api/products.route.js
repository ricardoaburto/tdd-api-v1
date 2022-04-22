const router = require("express").Router();

const Product = require("../../models/Product.model");

router.get("/", async (req, res) => {
  try {
    const Products = await Product.find();
    res.json(Products);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.get("/search/:key", async (req, res) => {
  try {
    const isvalidPolidromo = palindromeChecker(req.params.key, req);

    let Products = await Product.find(isvalidPolidromo);
    res.send(Products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

router.get("/search/desc/:key", async (req, res) => {
  try {
    const isvalidLength = req.params.key.length > 3;

    if (!isvalidLength) {
      return res.json({ mesagge: "not valid" });
    } else {
      let Products = await Product.find({
        $or: [
          { description: { $regex: req.params.key } },
          { brand: { $regex: req.params.key } },
        ],
      });
      res.send(Products);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Ha ocurrido un error" });
  }
});

function palindromeChecker(str, req) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");
  return newStr === strReversed
    ? {
        discount: { $gte: 50, $lte: 100 },
        $or: [{ name: { $regex: req.params.key } }],
      }
    : {
        $or: [{ name: { $regex: req.params.key } }],
      };
}

module.exports = router;
