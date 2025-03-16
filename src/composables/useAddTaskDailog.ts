import { ref } from "vue";
import store from "../store";

export function useAddTaskDialog() {
  const taskId = store.state.tasks.length + 1;
  const formModel = ref({
    id: taskId,
    title: "",
    priority: "",
    deadline: "",
    status: "",
  });

  const createTask = (
    emit: (event: "close" | "add-task", ...args: any[]) => void
  ) => {
    console.log(taskId);
    const deadline = formModel.value.deadline
      ? new Date(formModel.value.deadline).toISOString().split("T")[0]
      : "";
    store.commit("addTaskMutation", formModel.value);
    emit("add-task", formModel.value);
    emit("close");
    formModel.value = {
      id: taskId,
      title: "",
      priority: "",
      deadline: deadline,
      status: "",
    };
  };
  return {
    formModel,
    createTask,
  };
}
