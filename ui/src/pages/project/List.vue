<template>
  <x-page-header>
    <template #action>
      <n-button secondary size="small" @click="$router.push({ name: 'project_new' })">
        <template #icon>
          <n-icon>
            <add-icon />
          </n-icon>
        </template>
        {{ t('buttons.new') }}
      </n-button>
    </template>
  </x-page-header>
  <n-space class="page-body" vertical :size="12">
    <n-space :size="12">
      <n-input size="small" v-model:value="filter.name" :placeholder="t('fields.name')" clearable />
      <n-button size="small" type="primary" @click="() => fetchData()">{{ t('buttons.search') }}</n-button>
    </n-space>
    <n-data-table
      remote
      :row-key="(c: Project) => c.id"
      size="small"
      :columns="columns"
      :data="state.data"
      :pagination="pagination"
      :loading="state.loading"
      @update:page="fetchData"
      @update-page-size="changePageSize"
      scroll-x="max-content"
    />
  </n-space>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import {
  NSpace,
  NButton,
  NIcon,
  NInput,
  NDataTable,
} from "naive-ui";
import {
  AddOutline as AddIcon,
  PlayCircleOutline,
  TrashOutline,
  CreateOutline,
  TimerOutline,
} from "@vicons/ionicons5";
import { useRouter } from "vue-router";
import XPageHeader from "@/components/PageHeader.vue";
import projectApi from "@/api/project";
import type { Project } from "@/api/project";
import { renderButtons, renderLink } from "@/utils/render";
import { useDataTable } from "@/utils/data-table";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter();
const filter = reactive({
  name: "",
});
const columns = [
  {
    title: t('fields.id'),
    key: "id",
    fixed: "left" as const,
    render: (c: Project) => renderLink({ name: 'project_detail', params: { id: c.id } }, c.id),
  },
  {
    title: t('fields.name'),
    key: "name",
  },
  {
    title: t('fields.created_at'),
    key: "createdAt"
  },
  {
    title: t('fields.updated_at'),
    key: "updatedAt"
  },
  {
    title: t('fields.actions'),
    key: "actions",
    render(c: Project, index: number) {
      return renderButtons([
        {
          type: 'error',
          text: t('buttons.delete'),
          action: () => deleteProject(c.id, index),
          prompt: t('prompts.delete'),
          icon: TrashOutline,
        },
        {
          type: 'warning',
          text: t('buttons.edit'),
          action: () => router.push({ name: 'project_edit', params: { id: c.id } }),
          icon: CreateOutline,
        },
        {
          type: 'primary',
          text: t('buttons.deploy'),
          action: () => router.push({ name: 'project_publish', params: { id: c.id } }),
          icon: PlayCircleOutline,
        },
        {
          type: 'default',
          text: t('buttons.record'),
          action: () => projectRecord(c.id),
          icon: TimerOutline,
        },
      ])
    },
  },
];
const { state, pagination, fetchData, changePageSize } = useDataTable(projectApi.search, filter)

async function deleteProject(id: string, index: number) {
  await projectApi.delete(id);
  state.data.splice(index, 1)
}

async function deployProject(id: string) {
  await projectApi.deploy(id);
}

async function projectRecord(id: string) {

}

</script>