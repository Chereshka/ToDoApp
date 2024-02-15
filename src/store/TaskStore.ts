import { createStore, createEffect } from "effector";

import { TTask, TTaskNew } from "../types/task";
import { httpQuery } from "../api/axiosWrapper";



export const $taskStore = createStore<TTask[]>([]);


type TTaskSelectResponse = {
    success: TTask[];
}

type TSimpleResponse = {
    success: TTask | string;
}

export const selectTasks = createEffect(async () => {
    const response = await httpQuery<TTaskSelectResponse>('task');
    return response.success;
});

export const createTask = createEffect(async (item: TTaskNew) => {
    const response = await httpQuery<TSimpleResponse>('task/create', item);
    return response.success as TTask;
});

export const deleteTask = createEffect(async (taskId: string) => {
    await httpQuery<TSimpleResponse>('task/delete', { taskId });
    return taskId;
});

export const updateTask = createEffect(async (updatedTask: TTask) => {
    await httpQuery<TSimpleResponse>('task/update', updatedTask);
    return updatedTask;
});




$taskStore
    .on(selectTasks.doneData, (state, newTasks) => [...state, ...newTasks])
    .on(createTask.doneData, (state, newTask) => [...state, newTask])
    .on(deleteTask.doneData, (state, deletedTaskId) => state.filter(task => task._id !== deletedTaskId))
    .on(updateTask.doneData, (state, updatedTask) => state.map(task => {
        if (task._id === updatedTask._id) {
            return updatedTask;
        }
        return task;
    }));

