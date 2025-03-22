import { ref } from "vue";
import store from "../store";
import type { FormRules, FormInstance} from 'element-plus';

export function useAddTaskDialog() {
  const taskId = store.state.tasks.length + 1;
  const formModel = ref({
    id: taskId,
    title: "",
    priority: "",
    deadline: "",
    status: "",
  });

  
  const formRules: FormRules = {
    title: [{ required: true, message: 'Task Title is required', trigger: 'blur' }],
    priority: [{ required: true, message: 'Priority is required', trigger: 'change' }],
    deadline: [{ required: true, message: 'Deadline is required', trigger: 'change' }],
    status: [{ required: true, message: 'Status is required', trigger: 'change' }],
  };

  const formRef = ref<FormInstance | null>(null);


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
    formRules,
    formRef,
    createTask,
  };
}
