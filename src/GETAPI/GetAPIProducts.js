const GetAPIProducts = async () => {
  let array = {};
  try {
    const res = await fetch("http://localhost:8000/products");
    array = await res.json();
  } catch (e) {
    console.log("error", e);
  }

  return array;
};

export default GetAPIProducts;
