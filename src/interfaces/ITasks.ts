import type { eTaskPriority } from "../enums/eTaskPriority";
import type { eTaskStatus } from "../enums/eTaskStatus";

export interface ITasks {
    id: number;
    title: string;
    priority: eTaskPriority;
    deadline: string;
    status: eTaskStatus;
}
