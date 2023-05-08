const router = require('koa-router')()
const Vehi = require('../models/vehiSchema')
const Counter = require('../models/counterVehiSchema')
const utils = require('../utils/utils')
router.prefix('/vehi')

//获取车辆列表
router.get('/list', async function (ctx) {
  const { vehiId, vehiName, state, } = ctx.request.query;
  const { page, skipIndex } = utils.pager(ctx.request.query)
  let params = {}
  if (vehiId) params.vehiId = vehiId;
  if (vehiName) params.vehiName = vehiName;
  if (state && state != '0') params.state = state;
  try {
    // 根据条件查询所有用户列表
    const query = Vehi.find(params)//查询所有数据
    const list = await query.skip(skipIndex).limit(page.pageSize)//根据查出的所有数据截取对应页数的数据
    const total = await Vehi.countDocuments(params);
    ctx.body = utils.success({
      page: {
        ...page,
        total
      },
      list
    })
  } catch (error) {
    ctx.body = utils.fail(`查询异常:${error.stack}`)
  }
});

// 获取所有用户列表
router.get('/all/list', async function(ctx){
  try {
    const list = await Vehi.find({})//查询所有数据
    ctx.body = utils.success(list)
  } catch (error) {
    ctx.body = utils.fail(`查询异常:${error.stack}`)
  }
})

//删除用户数据（软删除）
router.post('/delete', async (ctx) => {
  const { vehiIds } = ctx.request.body;
  let res = await Vehi.updateMany({ vehiId: { $in: vehiIds } }, { state: 2 });
  if (res.nModified) {
    ctx.body = utils.success(res, `共删除成功${res.nModified}条`)
    return;
  }
  ctx.body = utils.fail('删除失败');
})

//新增和编辑
router.post('/operate', async (ctx) => {
  const { vehiId, vehiName, vehiNum, state, deptId, action} = ctx.request.body;
  if (action === 'add') {
    if (!vehiName || !vehiNum || !deptId) {
      ctx.body = utils.fail('请填写完整再进行新增提交', utils.CODE.PARAM_ERROR)
      return;
    } else {
      //先查一下是否数据库里已经存在
      const repeat = await Vehi.findOne({ $or: [{ vehiName }, { vehiNum }] }, '_id vehiName vehiNum');
      if (repeat) {
        ctx.body = utils.fail(`您新增的车辆:${repeat.vehiName},车牌:${repeat.vehiNum}已经存在~`, utils.CODE.PARAM_ERROR)
        return;
      } else {
        try {
          const countDoc = await Counter.findOneAndUpdate({ _id: 'vehiId' }, { $inc: { currentIndex: 1 } }, { new: true });
          const addVehi = new Vehi({
            vehiId: countDoc.currentIndex,
            vehiName,
            vehiNum,
            state,
            deptId
          });
          addVehi.save();
          ctx.body = utils.success({}, '添加车辆成功')
        } catch (error) {
          ctx.body = utils.fail('添加车辆失败，请联系管理员' + error.stack)
        }
      }
    }
  } else {
    //检测有没有选择部门
    if (!deptId) {
      ctx.body = utils.fail('部门不能为空', utils.CODE.PARAM_ERROR)
      return;
    }
    try {
      await Vehi.findOneAndUpdate({ vehiId }, { state, deptId, });
      ctx.body = utils.success({}, '更新车辆数据成功');
    } catch (error) {
      ctx.body = utils.fail('更新车辆数据失败');
    }
  }
});


module.exports = router
