const { Router, query } = require("express");

const router = Router();

const supermarkets = [
  {
    id: 1,
    store: "spencer",
    miles: 2,
  },
  {
    id: 2,
    store: "BigBazar",
    miles: 2.3,
  },
  {
    id: 3,
    store: "walmart",
    miles: 3.5,
  },
];
router.get("/", (req, res) => {
  //console.log(req.query);
  const { miles } = req.query;
  const parsedMiles = parseInt(miles);
  if (!isNaN(parsedMiles)) {
    const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
    res.send(filteredStores);
  } else res.send(supermarkets);
});

router.get("/:store", (request, response) => {
  const { store } = request.params;
  const marketStore = supermarkets.find((n) => n.store === store);
  response.send(marketStore);
});

router.post("/", (request, response) => {
  console.log(request.body);
  supermarkets.push(request.body);
  response.send(201);
});

module.exports = router;
