<template>
  <div class="car-wrap">
    <div class="filed-wrap">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="手牌号" prop="cardNo1">
              <el-input v-model="ruleForm.plate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="房间号" prop="roomNo1">
              <el-input v-model="ruleForm.plate"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="手牌号" prop="cardNo2">
              <el-input v-model="ruleForm.plate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="房间号" prop="roomNo2">
              <el-input v-model="ruleForm.plate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" @click="getCarList">添加手牌</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="table-wrap">
      <el-table
        :data="carList"
        tooltio-effect="dark"
        style="width: 1100px"
        height="500"
        v-loading="loading"
      >
        <el-table-column prop="id" label="手牌号" width="200" align="center"> </el-table-column>
        <el-table-column
          prop="modelName"
          label="项目编号"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="buydate"
          label="消费类型"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="insurancedate"
          label="项目名称"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="insurancedate"
          label="数量"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="insurancedate"
          label="金额"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="insurancedate"
          label="下单时间"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="insurancedate"
          label="消费记录号"
          width="200"
          align="center"
        ></el-table-column>
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
}
</style>
