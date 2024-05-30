import express from "express";
import { createCanvas, loadImage } from "canvas";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs-node";
import multer from "multer";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const upload = multer({ dest: "uploads/" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/detect", upload.single("image"), async (req, res) => {
 const image = await loadImage(req.file.path);
 const canvas = createCanvas(image.width, image.height);
 const ctx = canvas.getContext("2d");
 ctx.drawImage(image, 0, 0);
 const model = await cocoSsd.load();
 const predictions = await model.detect(canvas);
 predictions.forEach((prediction) => {
  ctx.beginPath();
  ctx.rect(...prediction.bbox);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.stroke();
  ctx.fillText(
   `${prediction.class} - ${Math.round(prediction.score * 100)}%`,
   prediction.bbox[0],
   prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
  );
 });
 const buffer = canvas.toBuffer("image/png");
 res.set("Content-Type", "image/png");
 res.send(buffer);
});

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});
