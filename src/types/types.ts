export type task = {
    id: number;
    title: string;
    description?: string;
    // status: 'todo' |'in-progress' | 'done';
}

export type TasksList = task[]