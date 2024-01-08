import { QuestionResponse } from "src/app/models/question/question-response";
import { StateInterface } from "../state/state-interface";
import { ListResponse } from "../response/list-response";
import { Response } from "../response/response";

export interface AppStateInterface {
    questions: StateInterface<Response<QuestionResponse> | ListResponse<QuestionResponse>>;
}
