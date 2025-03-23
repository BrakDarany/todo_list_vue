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
            <el-tab-pane 
                v-for="tab in tabName" 
                :key="tab.id"
                :label="tab.label" 
                :name="tab.name"> 
                <div class="flex flex-row justify-between items-center text-xl font-semibold"> 
                    <span class="w-44">Task Title</span> 
                    <span class="w-44">Status</span> 
                    <span class="w-44">Priority</span> 
                    <span class="w-44">Deadline</span> 
                    <span class="w-44">Action</span> 
                </div>  
                <div v-for="task in getTasksByTab(tab.name)" :key="task.id"> 
                    <CardComponent :key="task.id" :task="task"/> 
                </div> 
            </el-tab-pane> 
        </el-tabs> 
        <AddTaskDailog
            :visible="addDailogVisible"
            @close="closeAddDialog"
        />
    </div>
</template> 
<script lang="ts" setup> 
import { useTabBarComponent } from '../composables/useTabBarComponent'; 
 
const { 
    activeTab, 
    tabName,
    addDailogVisible,
    closeAddDialog,
    getTasksByTab,
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