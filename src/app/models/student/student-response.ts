import { QuizAssignmentResponse } from "../quiz-assignment/quiz-assignment-response";
import { Student } from "./student";

export interface StudentResponse extends Student {
    quizAssignments: QuizAssignmentResponse[] | null;
}
