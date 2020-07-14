<template>
  <div class="form-list">
    <div class="head-title">用户管理</div>
    <el-form :inline="true"
             :model="search"
             class="demo-form-inline">
      <el-form-item label="登录名">
        <el-input v-model="search.loginName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="search.linkPerson"
                  placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item v-if="show"
                    label="角色">
        <el-select v-model="search.roleId"
                   placeholder="请选择">
          <el-option v-for="(key, value, index) in roleId"
                     :label="key"
                     :value="value"
                     :key="index"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item v-if="show"
                    label="状态">
        <el-select v-model="search.status"
                   placeholder="请选择">
          <el-option v-for="(key, value, index) in status"
                     :label="key"
                     :value="value"
                     :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-if="show"
                    label="时间更新">
        <el-date-picker v-model="search.date"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="getList">
          <i class="el-icon-search search"></i>
          查询</el-button>
        <el-button type="primary"
                   @click="onrefresh"
                   class="but">
          <i class="el-icon-refresh refresh"></i>重置
        </el-button>

        <span v-if="!show"
              type="primary"
              @click="onDeleft"
              class="but1">
          展开<i class="el-icon-arrow-down"></i>
        </span>
        <span v-if="show"
              type="primary"
              @click="onshow"
              class="but1">
          收起 <i class="el-icon-arrow-up"></i></span>
      </el-form-item>
    </el-form>

    <el-row>
      <el-button type="primary"
                 @click="changeData(search)">新增</el-button>
    </el-row>
    <el-dialog :visible.sync="dialogTableVisible">
      <el-form ref="form"
               class="father-element"
               :model="search"
               label-width="80px">
        <el-form-item label="登录名"
                      prop="loginName">
          <el-input v-model="search.loginName"
                    placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="联系人"
                      prop="linkPerson">
          <el-input v-model="search.linkPerson"
                    disabled
                    placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="角色"
                      prop="roleId">
          <el-input v-model="search.roleId"
                    placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="状态"
                      prop="status">
          <el-input v-model="search.status"
                    placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="时间更新"
                      prop="date">
          <el-input v-model="search.date"
                    placeholder="请输入内容"></el-input>
        </el-form-item>
        <button class="submit-but"
                @click="addData()">确定</button>
      </el-form>
    </el-dialog>
    <el-table ref="singleTable"
              :data="list"
              border
              style="width: 100%"
              class="stern-table">
      <el-table-column fixed
                       prop="date"
                       label="更新时间"
                       width="150">
      </el-table-column>

      <el-table-column prop="loginName"
                       label="登录名"
                       width="120">
      </el-table-column>
      <el-table-column prop="linkPerson"
                       label="联系人"
                       width="120">
      </el-table-column>
      <el-table-column prop="roleId"
                       :formatter="formatterStatus"
                       label="角色"
                       width="120">
      </el-table-column>
      <el-table-column prop="status"
                       :formatter="formatterRole"
                       label="状态"
                       width="300">
      </el-table-column>

      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index, list)"
                     type="text"
                     size="small">删除</el-button>
          <el-button type="text"
                     size="small"
                     @click="changeData(search)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '../../Api/index'
export default {
  data() {
    return {
      show: false,
      roleId: {
        '0': '超级管理员',
        '1': '管理员',
        '2': '操作员A',
        '3': '操作员B'
      },
      //   role: [
      //     {
      //       name: '超级管理员',
      //       id: 1
      //     },
      //     {
      //       name: '管理员',
      //       id: 2
      //     },
      //     {
      //       name: '操作员A',
      //       id: 3
      //     },
      //     {
      //       name: '操作员B',
      //       id: 4
      //     }
      //   ],
      search: {
        loginName: '',
        linkPerson: '',
        roleId: '',
        status: '',
        date: ''
      },
      dialogTableVisible: false,
      status: {
        '1': '启用',
        '0': '禁用'
      },
      //   status: [
      //     {
      //       enable: false,
      //       value: '禁用'
      //     },
      //     {
      //       enable: true,
      //       value: '启用'
      //     }
      //   ],

      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    getList() {
      getList(this.search).then(({ code, msg, list }) => {
        console.log(code, msg, list)
        this.list = list
      })
    },
    onrefresh() {
      console.log('refresh!')
      this.search = {
        loginName: '',
        linkPerson: '',
        roleId: '',
        status: '',
        date: ''
      }
    },
    onDeleft() {
      this.show = true
    },
    onshow() {
      this.show = false
    },
    handleClick(index, rows) {
      rows.splice(index, 1)
    },
    changeData(search) {
      console.log(search)
      this.dialogTableVisible = true
      this.search = JSON.parse(JSON.stringify(search))
    },
    addData() {
      const data = {
        loginName: this.search.loginName,
        linkPerson: this.search.linkPerson,
        roleId: this.search.roleId,
        status: this.search.status,
        date: this.search.date
      }
      this.$store.dispatch('addData', data).then(({ code, msg }) => {
        console.log(msg)
        console.log(data)
        if (code === 0) {
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          })
          setTimeout(() => {
            this.dialogTableVisible = false
          }, 1000)
        } else {
          this.$message.error(msg)
        }
      })
    },
    formatterRole(row, column) {
      const status = row[column.property]
      return this.status[status]
    },
    formatterStatus(row, column) {
      const roleId = row[column.property]
      return this.roleId[roleId]
    }
  }
}
</script>

<style lang="less" scope>
.form-list {
  width: 878px;
  height: 683px;
  .head-title {
    line-height: 56px;
    height: 56px;
    padding-left: 24px;
    box-shadow: 0 1px 0 0 #e2dada;
  }
  .demo-form-inline {
    margin-top: 35px;
  }
  .stern-table {
    margin-top: 35px;
  }
  .search,
  .refresh {
    margin-right: 10px;
  }
  .but {
    width: 97.89x;
    height: 40px;
    margin: 0 0 20px 15px;
  }
  .but1 {
    margin-top: 15px;
    color: #1890ff;
    margin-left: 15px;
  }
}
</style>
