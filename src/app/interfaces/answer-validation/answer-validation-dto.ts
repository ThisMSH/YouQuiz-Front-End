import { Answer } from '../answer/answer';
import { Question } from '../question/question';
import { AnswerValidation } from './answer-validation';

export interface AnswerValidationDTO extends AnswerValidation {
    answer: Answer;
    question: Question;
}
