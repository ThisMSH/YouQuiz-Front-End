import { QuizAssignmentResponse } from "../quiz-assignment/quiz-assignment-response";
import { QuizQuestionResponse } from "../quiz-question/quiz-question-response";
import { SubjectResponse } from "../subject/subject-response";
import { TrainerRequest } from "../trainer/trainer-request"

export interface QuizResponse {
    trainer: TrainerRequest | null;
    quizAssignments: QuizAssignmentResponse[] | null;
    quizQuestions: QuizQuestionResponse[] | null;
    subjects: SubjectResponse[] | null;
}
