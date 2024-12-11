import fs from "fs";
import path from "path";
import { TrainingCardType } from "@/types/trainingCardType";

const dataFilePath = path.join(process.cwd(), "data", "data.json");

function ensureDataFileExists() {
    if (!fs.existsSync(dataFilePath)) {
        const dir = path.dirname(dataFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2));
    }
}

function readTrainings(): TrainingCardType[] {
    ensureDataFileExists();
    try {
        const jsonString = fs.readFileSync(dataFilePath, "utf8");
        return JSON.parse(jsonString) as TrainingCardType[];
    } catch (error) {
        console.error("Error reading data file:", error);
        return [];
    }
}

function writeTrainings(trainings: TrainingCardType[]) {
    ensureDataFileExists();
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(trainings, null, 2));
    } catch (error) {
        console.error("Error writing to data file:", error);
    }
}

export function getTrainings(): TrainingCardType[] {
    return readTrainings();
}

export function addTraining(training: TrainingCardType) {
    const trainings = readTrainings();
    trainings.push(training);
    writeTrainings(trainings);
}
