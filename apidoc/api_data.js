define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "D__github_workspace_other_test_apidoc_main_js",
    "groupTitle": "D__github_workspace_other_test_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user/getUserByid",
    "title": "获取待调度订单，根据线路授权",
    "name": "GetUser",
    "group": "driver",
    "description": "<blockquote> <h3>业务处理</h3> <ul> <li>根据管理员授权线路查询对应待调度订单（订单状态为10）</li> <li>按出行时间（plantime）倒序</li> </ul> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>用户的姓氏</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>用户的名称</p>"
          }
        ]
      }
    },
    "version": "0.0.2",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "default",
            "description": "<p>默认错误返回值</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "司机模块"
  },
  {
    "type": "get",
    "url": "/user/getUserByid",
    "title": "获取待调度订单，根据线路授权",
    "name": "test",
    "group": "driver",
    "description": "<blockquote> <h3>业务处理</h3> <ul> <li>根据管理员授权线路查询对应待调度订单（订单状态为10）</li> <li>按出行时间（plantime）倒序</li> </ul> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>用户的姓氏</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>用户的名称</p>"
          }
        ]
      }
    },
    "version": "0.0.2",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "default",
            "description": "<p>默认错误返回值</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "司机模块"
  },
  {
    "type": "get",
    "url": "/user/getUserByid",
    "title": "获取待调度订单，根据线路授权",
    "name": "GetUser",
    "group": "user",
    "description": "<blockquote> <h3>业务处理</h3> <ul> <li>根据管理员授权线路查询对应待调度订单（订单状态为10）</li> <li>按出行时间（plantime）倒序</li> </ul> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>用户的姓氏</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>用户的名称</p>"
          }
        ]
      }
    },
    "version": "0.0.2",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "default",
            "description": "<p>默认错误返回值</p>"
          }
        ]
      }
    },
    "filename": "./example.js",
    "groupTitle": "用户模块"
  }
] });
