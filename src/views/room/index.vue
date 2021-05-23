<template>
  <div class="car-wrap">
    <div class="head-button">
      <el-button type="primary">开房</el-button>
      <el-button type="primary">退房</el-button>
      <el-button type="primary">开牌</el-button>
    </div>

    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row :gutter="40">
        <el-col :span="4">
          <el-form-item label="房间状态" prop="model">
            <el-select
              size="mini"
              v-model="ruleForm.model"
              placeholder="选择状态"
              style="width:100px"
            >
              <el-option
                :label="item.code"
                :value="item.name"
                v-for="item in roomState"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="房间人数" prop="model">
            <el-select
              size="mini"
              v-model="ruleForm.model"
              placeholder="选择人数"
              style="width:100px"
            >
              <el-option
                :label="item.code"
                :value="item.name"
                v-for="item in roomPeopleCount"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="table-wrap">
      <div class="room-card">
        <div class="room-header">
          <div>房间：A001</div>
          <div>状态：空闲</div>
        </div>
        <div class="room-content">
          <div class="line-height">房间为单人间，已有0人</div>
          <div class="line-height">客户手牌号: 无</div>
          <div class="line-height">技师人数：0</div>
          <div class="line-height">技师工号，无</div>
          <div class="line-height">选择项目：无</div>
          <div class="line-height">以开房: 0分</div>
          <div class="card-radio">
            <el-radio v-model="radio"></el-radio>
          </div>
        </div>
      </div>
      <div class="room-card">
        <div class="room-header">
          <div>房间：A001</div>
          <div>状态：空闲</div>
        </div>
        <div class="room-content">
          <div class="line-height">房间为单人间，已有0人</div>
          <div class="line-height">客户手牌号: 无</div>
          <div class="line-height">技师人数：0</div>
          <div class="line-height">技师工号，无</div>
          <div class="line-height">选择项目：无</div>
          <div class="line-height">以开房: 0分</div>
          <div class="card-radio">
            <el-radio v-model="radio"></el-radio>
          </div>
        </div>
      </div>
      <div class="room-card">
        <div class="room-header">
          <div>房间：A001</div>
          <div>状态：空闲</div>
        </div>
        <div class="room-content">
          <div class="line-height">房间为单人间，已有0人</div>
          <div class="line-height">客户手牌号: 无</div>
          <div class="line-height">技师人数：0</div>
          <div class="line-height">技师工号，无</div>
          <div class="line-height">选择项目：无</div>
          <div class="line-height">以开房: 0分</div>
          <div class="card-radio">
            <el-radio v-model="radio"></el-radio>
          </div>
        </div>
      </div>
      <div class="room-card">
        <div class="room-header">
          <div>房间：A001</div>
          <div>状态：空闲</div>
        </div>
        <div class="room-content">
          <div class="line-height">房间为单人间，已有0人</div>
          <div class="line-height">客户手牌号: 无</div>
          <div class="line-height">技师人数：0</div>
          <div class="line-height">技师工号，无</div>
          <div class="line-height">选择项目：无</div>
          <div class="line-height">以开房: 0分</div>
          <div class="card-radio">
            <el-radio v-model="radio"></el-radio>
          </div>
        </div>
      </div>
      <div class="room-card">
        <div class="room-header">
          <div>房间：A001</div>
          <div>状态：空闲</div>
        </div>
        <div class="room-content">
          <div class="line-height">房间为单人间，已有0人</div>
          <div class="line-height">客户手牌号: 无</div>
          <div class="line-height">技师人数：0</div>
          <div class="line-height">技师工号，无</div>
          <div class="line-height">选择项目：无</div>
          <div class="line-height">以开房: 0分</div>
          <div class="card-radio">
            <el-radio v-model="radio"></el-radio>
          </div>
        </div>
      </div>
      <div class="room-card">
        <div class="room-header">
          <div>房间：A001</div>
          <div>状态：空闲</div>
        </div>
        <div class="room-content">
          <div class="line-height">房间为单人间，已有0人</div>
          <div class="line-height">客户手牌号: 无</div>
          <div class="line-height">技师人数：0</div>
          <div class="line-height">技师工号，无</div>
          <div class="line-height">选择项目：无</div>
          <div class="line-height">以开房: 0分</div>
          <div class="card-radio">
            <el-radio v-model="radio"></el-radio>
          </div>
        </div>
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
      roomPeopleCount: [],
      roomState: [], //
      pageSize: 10, // 分页查询，每页显示的条数
      pageNum: 1, // 分页查询，当前的页数
      totalNum: 0 // 总共有多少条数据
    }
  },
  created() {
    this.getCarList()
    this.getCarModelList()
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
    margin-bottom: 10px;
  }
  .filed-wrap {
    height: 180px;
    @include box-show();
  }
  .filed-wrap:hover {
    @include hover-show();
  }
  .room-card {
    width: 300px;
    height: 230px;
    color: #409eff;
    border-radius: 5px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    margin: 0 20px;
    .room-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 30px;
      padding: 0 15px;
      border-radius: 5px;
      background: greenyellow;
    }
    .room-content {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 15px;

      .card-radio {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .table-wrap {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 5px 10px;
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
}
</style>
