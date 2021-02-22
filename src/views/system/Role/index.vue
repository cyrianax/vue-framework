<template>
  <div>
    <!-- 条件查询 -->
    <div class="g-table-filter">
      <div class="g-table-filter-item">
        <span>部门</span>
        <el-select v-model="department" placeholder="请选择部门" clearable>
          <el-option
            v-for="item in options.departments"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <el-button @click="onQuery">查询</el-button>
    </div>

    <!-- 工具栏 -->
    <div class="g-table-toolbar">
      <el-button-group>
        <el-button @click="createPanel.onOpen">新增</el-button>
        <el-button @click="onDeleteSelected">删除</el-button>
      </el-button-group>
    </div>

    <!-- 表格 -->
    <div class="g-table-grid">
      <el-table>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="部门" prop="department"></el-table-column>
        <el-table-column label="团队" prop="team"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="sex"></el-table-column>
      </el-table>
    </div>

    <!-- 翻页 -->
    <div class="g-table-page">
      <el-pagination
        :current-page="table.page.currentPage"
        :page-size="table.page.pageSize"
        :total="table.page.total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="table.onSizeChange"
        @current-change="table.onCurrentChange"
      ></el-pagination>
    </div>

    <el-dialog v-model="createPanel.dlgVisble">
      <el-form ref="elForm" :model="createPanel.form" label-width="120px">
        <el-form-item label="迭代" prop="iretion">
          <el-select v-model="iretion" placeholder="请选择迭代" clearable>
            <el-option
              v-for="item in options.dep"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="createPanel.onSubmit"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import useOptions from './use.options.js'
import useTable from './use.table.js'
import useCreatePanel from './use.panel.create.js'

const options = useOptions()
const table = useTable()

const createPanel = useCreatePanel({
  success: () => {
    table.onQuery
  },
})
</script>

<style lang="scss" scoped></style>
