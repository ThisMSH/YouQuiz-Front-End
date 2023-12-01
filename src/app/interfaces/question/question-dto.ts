import { AnswerValidation } from '../answer-validation/answer-validation';
import { Level } from '../level/level';
import { Media } from '../media/media';
import { Subject } from '../subject/subject';
import { Question } from './question';

export interface QuestionDTO extends Question {
    level: Level;
    subject: Subject;
    media: Media[];
    'answer-validations': AnswerValidation[];
}