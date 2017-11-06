
/**
 * @apiDefine user 用户模块
 *
 */
 
 /**
 * @apiDefine driver 司机模块
 *
 */
 
/**
 * @api {get} /user/getUserByid 获取待调度订单，根据线路授权
 * @apiName GetUser 
 * @apiGroup user
 * @apiDescription
 * > ### 业务处理
 * > - 根据管理员授权线路查询对应待调度订单（订单状态为10）
 * > - 按出行时间（plantime）倒序
 * @apiParam {Number} id 用户id号
 *
 * @apiSuccess {String} firstname 用户的姓氏
 * @apiSuccess {String} lastname  用户的名称
 * @apiVersion 0.0.2
 *
 * @apiError  default 默认错误返回值
 */
 
 /**
 * @api {get} /user/getUserByid 获取待调度订单，根据线路授权
 * @apiName GetUser 
 * @apiGroup driver
 * @apiDescription
 * > ### 业务处理
 * > - 根据管理员授权线路查询对应待调度订单（订单状态为10）
 * > - 按出行时间（plantime）倒序
 * @apiParam {Number} id 用户id号
 *
 * @apiSuccess {String} firstname 用户的姓氏
 * @apiSuccess {String} lastname  用户的名称
 * @apiVersion 0.0.2
 *
 * @apiError  default 默认错误返回值
 */
 
 /** @api {get} /user/getUserByid 获取待调度订单，根据线路授权
 * @apiName test 
 * @apiGroup driver
 * @apiDescription
 * > ### 业务处理
 * > - 根据管理员授权线路查询对应待调度订单（订单状态为10）
 * > - 按出行时间（plantime）倒序
 * @apiParam {Number} id 用户id号
 *
 * @apiSuccess {String} firstname 用户的姓氏
 * @apiSuccess {String} lastname  用户的名称
 * @apiVersion 0.0.2
 *
 * @apiError  default 默认错误返回值
 */