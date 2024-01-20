import * as tf from "@tensorflow/tfjs";

async function tfMturn() {
  const arrayOfSameValues = Array(100).fill(42);
  const tfTensor = tf.tensor2d(
    Array.from(arrayOfSameValues, Number),
    [1, 100],
    "int32"
  );

  return tfTensor ? "tf ok" : "nope";
}

self.onmessage = async (event) => {
  const { command } = event.data;
  console.log(command, "from worker");
  const ab = await tfMturn();
  self.postMessage({ status: "ready", result: ab });
};
