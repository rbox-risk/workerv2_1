import * as tf from "@tensorflow/tfjs";

async function tfMturn() {
  const tfTensor = tf.tensor2d(
    Array.from([100, 103, 22, 25, 1032, 130, 532, 321], Number),
    [1, 100],
    "int32"
  );

  return 1;
}

self.onmessage = async (event) => {
  const ab = await tfMturn();
  self.postMessage({ status: "ready", result: ab });
};
