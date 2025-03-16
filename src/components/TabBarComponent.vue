<template>
    <div>
        <div class="flex justify-end">
            <el-button class="mb-3" type="primary" @click="openAddDialog">+ Add Task</el-button> 
        </div>
        <el-tabs
            v-model="activeTab"
            type="border-card"
            width="100%"
        >
        <el-tab-pane label="Todo" name="Todo">
            <div class="flex flex-row justify-between items-center text-xl font-semibold">
                <span class="w-44">Task Title</span>
                <span class="w-44">Status</span>
                <span class="w-44">Priority</span>
                <span class="w-44">Deadline</span>
                <span class="w-44">Action</span>
            </div> 
            <div v-for="task in todoTasks" :key="task.id">
                <CardComponent :key="task.id" :task="task"/>
            </div>
        </el-tab-pane>
        <el-tab-pane label="In Progress" name="second">
            <div class="flex flex-row justify-between items-center text-xl font-semibold">
                <span class="w-44">Task Title</span>
                <span class="w-44">Status</span>
                <span class="w-44">Priority</span>
                <span class="w-44">Deadline</span>
                <span class="w-44">Action</span>
            </div> 
            <div v-for="task in inProgressTasks" :key="task.id">
                <CardComponent :key="task.id" :task="task"/>
            </div>
        </el-tab-pane>
        <el-tab-pane label="Completed" name="third">
            <div class="flex flex-row justify-between items-center text-xl font-semibold">
                <span class="w-44">Task Title</span>
                <span class="w-44">Status</span>
                <span class="w-44">Priority</span>
                <span class="w-44">Deadline</span>
                <span class="w-44">Action</span>
            </div> 
            <div v-for="task in completedTasks" :key="task.id">
                <CardComponent :key="task.id" :task="task"/>
            </div>
        </el-tab-pane>
      </el-tabs>
      <AddTaskDailog 
        :visible="addDailogVisible" 
        :formModel="formModel" 
        @close="closeAddDialog"
        />
    </div>
</template>
<script lang="ts" setup>
import { useTabBarComponent } from '../composables/useTabBarComponent';

const {
    activeTab,
    todoTasks,
    inProgressTasks,
    completedTasks,
    addDailogVisible,
    formModel,
    closeAddDialog,
    openAddDialog,
} = useTabBarComponent();
</script>
<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>