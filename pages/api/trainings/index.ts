import type { NextApiRequest, NextApiResponse } from "next";
import { getTrainings, addTraining } from "@/lib/mockDb";
import { TrainingCardType } from "@/types/trainingCardType";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Request Method:", req.method); // Debugging

  if (req.method === "GET") {
    try {
      const trainings = getTrainings();
      console.log("Trainings Data:", trainings); // Debugging
      return res.status(200).json(trainings);
    } catch (error) {
      console.error("Error fetching trainings:", error);
      return res.status(500).json({ error: "Failed to fetch trainings" });
    }
  }

  if (req.method === "POST") {
    const { name, description, imageUrl, price, trainingType, level } = req.body;

    console.log("Received POST Body:", req.body); // Debugging

    if (!name || !description || !imageUrl || !trainingType || !level || price <= 0) {
      console.error("Invalid data received");
      return res.status(400).json({ error: "Invalid data" });
    }

    try {
      const newTraining: TrainingCardType = {
        id: `${name}_${Date.now()}`,
        name,
        description,
        createdOn: new Date(),
        imageUrl,
        price: Number(price),
        trainingType,
        level,
      };

      addTraining(newTraining);

      console.log("New Training Added:", newTraining); // Debugging
      return res.status(201).json(newTraining);
    } catch (error) {
      console.error("Error adding training:", error);
      return res.status(500).json({ error: "Failed to add training" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
