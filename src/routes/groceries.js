const { Router } = require("express");

const router = Router();

//GET req

const groceryList = [
  {
    item: "milk",
    quantity: "2 packs",
  },
  {
    item: "potato",
    quantity: "2kg",
  },
];

router.get("/", (request, response) => {
  // const gitem = request.params.item;
  // console.log(gitem);
  response.send(groceryList);
});

router.get("/:item", (request, response) => {
  // const gitem = request.params.item;
  // console.log(gitem);
  const { item } = request.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
});

//POST REQUEST

router.post("/", (request, response) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
});

module.exports = router;
