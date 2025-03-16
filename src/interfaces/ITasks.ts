export interface ITasks {
    id: number;
    title: string;
    priority: 'Low' | 'Medium' | 'High';
    deadline: string;
    status: 'Todo' | 'In Progress' | 'Completed';
}
