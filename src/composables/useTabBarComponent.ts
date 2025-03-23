import { computed, ref } from "vue";
import store from "../store";
import type { ITasks } from "../interfaces/ITasks";

export function useTabBarComponent() {
  const tabName = ref([
    { id: 1, label: "Todo", name: "todo" },
    { id: 2, label: "In Progress", name: "inProgress" },
    { id: 3, label: "Completed", name: "completed" },
  ]);

  const activeTab = ref(tabName.value[0].name);
  const addDailogVisible = ref(false);
  const openAddDialog = () => {
    addDailogVisible.value = true;
  };

  const formModel = ref({
    title: "",
    priority: "",
    deadline: "",
    status: "",
  });

  const closeAddDialog = () => {
    addDailogVisible.value = false;
    // Reset the form model
    formModel.value = {
      title: "",
      priority: "",
      deadline: "",
      status: "",
    };
  };
  const tasks = computed(() => store.state.tasks);

  const getTasksByTab = (tabName: string) => {
    switch (tabName) {
      case "todo":
        return tasks.value.filter((task: ITasks) => task.status === "Todo");

      case "inProgress":
        return tasks.value.filter((task: ITasks) => task.status === "In Progress");

      case "completed":
        return tasks.value.filter((task: ITasks) => task.status === "Completed");
    }
  }

  return {
    activeTab,
    addDailogVisible,
    formModel,
    tabName,
    getTasksByTab,
    closeAddDialog,
    openAddDialog,
  };
}
