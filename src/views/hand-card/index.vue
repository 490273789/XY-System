<template>
  <div class="car-wrap">
    <div class="head-button">
      <el-button type="primary">开房</el-button>
      <el-button type="primary">退房</el-button>
      <el-button type="primary">开牌</el-button>
    </div>

    <div>
      <label>房间状态</label>
      <el-select size="mini" v-model="ruleForm.model" placeholder="选择状态" style="width:100px">
        <el-option
          :label="item.code"
          :value="item.name"
          v-for="item in roomState"
          :key="item.id"
        ></el-option>
      </el-select>
    </div>
    <div class="table-wrap">
      <el-table
        :data="tableData"
        ref="multipleTable"
        tooltio-effect="dark"
        style="width:100%"
        height="620"
        @selection-change="handleSelectionChange"
        v-loading="loading"
      >
        <el-table-column type="selection" width="55" fixed="left"></el-table-column>
        <el-table-column label="手牌编号" width="320" fixed="left" align="center">
          <template slot-scope="scope">
            <span class="id-click" @click="goTicket(scope.row)">{{ scope.row.taskno }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="time" label="状态" align="center" width="420"></el-table-column>
        <el-table-column prop="warninfo" label="表示码" align="center" width="300"></el-table-column>
        </el-table-column>
      </el-table>
      <div class="page-info">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[10, 20, 30]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      ruleForm: {
        plate: '', //
        model: '' //
      },
      carList: [],
      carModelList: [], //
      pageSize: 10, // 分页查询，每页显示的条数
      pageNum: 1, // 分页查询，当前的页数
      totalNum: 0 // 总共有多少条数据
    }
  },
  created() {
    setTimeout(() => (this.loading = false), 3000)
  },
  methods: {

    // 点击重置按钮清空查询条件
    resetQuery(formName) {
      this.$refs[formName].resetFields()
    },
    // 改变每页显示的条数
    handleSizeChange(val) {
      this.pageSize = val
      this.pageSize = val
      this.getCarList()
    },
    // 点击上一页或者下一页
    handleCurrentChange(val) {
      this.pageNum = val
      this.getCarList()
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin box-show() {
  box-shadow: 0px 0px 3px rgba(8, 8, 8, 0.2);
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: #fff;
  padding-top: 30px;
}
@mixin hover-show() {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
}
.car-wrap {
  padding: 20px 30px;
  min-width: 1200px;
  .head-button {
    margin-bottom: 20px;
  }
  .filed-wrap {
    height: 180px;
    @include box-show();
  }
  .filed-wrap:hover {
    @include hover-show();
  }
  .table-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    margin-top: 20px;
    @include box-show();
    min-height: 600px;
    .id-click {
      color: #409eff;
      cursor: pointer;
    }
    .page-info {
      width: 1100px;
      margin-top: 20px;
      text-align: center;
    }
  }
  .table-wrap:hover {
    @include hover-show();
  }
  label {
    vertical-align: middle;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
}
</style>
