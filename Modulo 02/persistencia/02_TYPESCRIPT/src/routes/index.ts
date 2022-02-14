import express, { Request } from "express";
import PingController, { PingRequest } from "../controllers/ping";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/ping/test/:id", async (req: Request<{ id: string}>, res) => {
  const controller = new PingController();
  const response = await controller.getMessageById(Number(req.params.id));
  return res.send(response);
});

router.post("/ping/test", async (req: Request<PingRequest>, res) => {
  const controller = new PingController();
  const response = await controller.postMessage(req.body);
  return res.status(201).send(response);
});

router.put("/ping/test/:id", async (req: Request<{ id: string}, PingRequest>, res) => {
  const controller = new PingController();
  const response = await controller.putMessage(Number(req.params.id), req.body);
  return res.send(response);
});

export default router;
