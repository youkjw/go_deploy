<template>
  <x-page-header :subtitle="model.name || model.id">
    <template #action>
      <n-button secondary size="small" @click="$router.push({ name: 'project_list' })">
        <template #icon>
          <n-icon>
            <back-icon />
          </n-icon>
        </template>
        {{ t('buttons.return') }}
      </n-button>
      <n-button
        secondary
        size="small"
        @click="$router.push({ name: 'project_edit', params: { id: model.id } })"
      >{{ t('buttons.edit') }}</n-button>
    </template>
  </x-page-header>
  <div class="page-body">
    <n-tabs type="line" style="margin-top: -12px">
      <n-tab-pane name="detail" :tab="t('fields.detail')">
        <n-space vertical :size="16">
          <x-description :label-width="90">
            <x-description-item :label="t('fields.id')">{{ model.id }}</x-description-item>
            <x-description-item :label="t('fields.project_name')">{{ model.name }}</x-description-item>
            <x-description-item :span="2" :label="t('fields.project_desc')">{{ model.desc }}</x-description-item>
            <x-description-item :label="t('fields.created_at')">{{ model.createdAt }}</x-description-item>
            <x-description-item :label="t('fields.updated_at')">{{ model.updatedAt }}</x-description-item>
          </x-description>
          <x-panel :title="t('fields.file_config')" v-if="model.file_config && model.file_config.length">
            <n-table size="small" :bordered="true" :single-line="false">
              <thead>
                <tr>
                  <th>{{ t('fields.file_name') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="label in model.file_config">
                  <td>{{ label.name }}</td>
                </tr>
              </tbody>
            </n-table>
          </x-panel>
        </n-space>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  NButton,
  NSpace,
  NIcon,
  NTable,
  NTabs,
  NTabPane,
  NTag,
} from "naive-ui";
import { ArrowBackCircleOutline as BackIcon } from "@vicons/ionicons5";
import XPageHeader from "@/components/PageHeader.vue";
import XCode from "@/components/Code.vue";
import XPanel from "@/components/Panel.vue";
import projectApi from "@/api/project";
import type { Project } from "@/api/project";
import { useRoute } from "vue-router";
import { XDescription, XDescriptionItem } from "@/components/description";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute();
const model = ref({} as Project);

async function fetchData() {
  const id = route.params.id as string;
  let r = await projectApi.find(id);
  model.value = r.data?.item as Project;
}

onMounted(fetchData);
</script>