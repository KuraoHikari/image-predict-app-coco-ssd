# Object Detection API

This is an Express.js application that performs object detection on images using TensorFlow's COCO-SSD model. The detected objects are highlighted with bounding boxes and labels.

## Features

- Upload an image and get back the image with detected objects highlighted.
- Uses COCO-SSD model for object detection.
- Supports various image formats.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:KuraoHikari/image-predict-app-coco-ssd.git
   cd object-detection-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running at `http://localhost:3000`.

3. To perform object detection, send a POST request to `/detect` with an image file.

### Example using `curl`:

```bash
curl -X POST -F "image=@/path/to/your/image.jpg" http://localhost:3000/detect --output result.png
```

### Example using Postman:

1. Open Postman and create a new POST request.
2. Set the URL to `http://localhost:3000/detect`.
3. In the "Body" tab, select "form-data".
4. Add a key named `image` and set the value type to `File`.
5. Choose the image file you want to upload.
6. Send the request.
7. Save the response (an image with detected objects) to view the results.

## Project Structure

- `index.js`: Main server file.
- `uploads/`: Directory where uploaded images are temporarily stored.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `canvas`: Node canvas is a Cairo-backed Canvas implementation for Node.js.
- `@tensorflow-models/coco-ssd`: TensorFlow COCO-SSD model.
- `@tensorflow/tfjs-node`: TensorFlow.js for Node.js.
- `multer`: Middleware for handling `multipart/form-data`, which is primarily used for uploading files.
- `body-parser`: Node.js body parsing middleware.

## License

This project is licensed under the MIT License.

```

## Acknowledgements

- [Express](https://expressjs.com/)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [Node Canvas](https://github.com/Automattic/node-canvas)
- [Multer](https://github.com/expressjs/multer)

```
