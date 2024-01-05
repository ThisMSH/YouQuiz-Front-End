import { AnswerValidationResponse } from '../answer-validation/answer-validation-response';
import { LevelRequest } from '../level/level-request';
import { MediaResponse } from '../media/media-response';
import { QuizQuestionResponse } from '../quiz-question/quiz-question-response';
import { SubjectRequest } from '../subject/subject-request';
import { Question } from './question';

export interface QuestionResponse extends Question {
    level: LevelRequest | null;
    subject: SubjectRequest | null;
    medias: MediaResponse[] | null;
    answerValidations: AnswerValidationResponse[] | null;
    quizQuestions: QuizQuestionResponse[] | null;
}
