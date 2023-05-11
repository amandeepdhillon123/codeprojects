let counter = document.querySelector("#counter");

let decFun = () => {
  //    console.log("amandeep")

  let value = Number(counter.textContent);

  value = value - 1;

  counter.textContent = value;

  console.log(value);
};

let incFun = () => {
//   console.log("amandeep");

  let value = Number(counter.textContent);

  value = value + 1;

  counter.textContent = value;

  // console.log(value)
};
