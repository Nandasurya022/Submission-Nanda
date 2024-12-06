import tf from "@tensorflow/tfjs-node";

async function loadModel() {
  const modelPath = "https://storage.googleapis.com/nanda-submission/model-in-prod/model.json";
  console.log(`Trying to load model from ${modelPath}`);

  try {
    return await tf.loadGraphModel(modelPath);
  } catch (error) {
    console.error("Error loading model:", error);
    throw error;
  }
}

export default loadModel;