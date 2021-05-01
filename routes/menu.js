const router = require('koa-router')()
const { checkToken } = require('../utils/utils')
router.prefix('/menu')
router.post('/list', (ctx) => {
    const { authorization } = ctx.request.header;
    checkToken(authorization, ctx, (res) => {
        ctx.body = {
            "code": 200,
            "data": [
                {
                    "parentId": [
                        null
                    ],
                    "updateTime": "2021-03-06T10:03:38.947Z",
                    "createTime": "2021-01-30T09:22:00.000Z",
                    "_id": "600d4075e218daaf4ec77e52",
                    "menuType": "1",
                    "menuName": "系统管理",
                    "menuCode": "",
                    "path": "/system",
                    "icon": "el-icon-setting",
                    "order": "0",
                    "component": "",
                    "children": [
                        {
                            "parentId": [
                                "600d4075e218daaf4ec77e52"
                            ],
                            "updateTime": "2021-02-04T07:12:21.077Z",
                            "createTime": "2021-01-30T08:10:00.000Z",
                            "_id": "600d525e602f452aaeeffcd9",
                            "menuType": "1",
                            "menuName": "用户管理",
                            "menuCode": "",
                            "path": "/system/user",
                            "icon": "",
                            "order": "1",
                            "component": "/system/user",
                            "menuState": "1",
                            "children": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "600d525e602f452aaeeffcd9"
                                    ],
                                    "updateTime": "2021-02-21T09:54:44.242Z",
                                    "createTime": "2021-02-20T06:46:50.711Z",
                                    "_id": "6030ca8f93f0e159c8390f0c",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "新增",
                                    "menuCode": "user-create",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "600d525e602f452aaeeffcd9"
                                    ],
                                    "updateTime": "2021-02-21T09:54:50.464Z",
                                    "createTime": "2021-02-21T08:50:47.217Z",
                                    "_id": "603226d9257d15a8c54cf9f8",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "批量删除",
                                    "menuCode": "user-delete",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "600d525e602f452aaeeffcd9"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "603253e0a821c6bb59084541",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "user-query",
                                    "__v": 0
                                }
                            ],
                            "action": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "600d525e602f452aaeeffcd9"
                                    ],
                                    "updateTime": "2021-02-21T09:54:44.242Z",
                                    "createTime": "2021-02-20T06:46:50.711Z",
                                    "_id": "6030ca8f93f0e159c8390f0c",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "新增",
                                    "menuCode": "user-create",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "600d525e602f452aaeeffcd9"
                                    ],
                                    "updateTime": "2021-02-21T09:54:50.464Z",
                                    "createTime": "2021-02-21T08:50:47.217Z",
                                    "_id": "603226d9257d15a8c54cf9f8",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "批量删除",
                                    "menuCode": "user-delete",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "600d525e602f452aaeeffcd9"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "603253e0a821c6bb59084541",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "user-query",
                                    "__v": 0
                                }
                            ]
                        },
                        {
                            "parentId": [
                                "600d4075e218daaf4ec77e52"
                            ],
                            "updateTime": "2021-02-04T09:52:40.576Z",
                            "createTime": "2021-02-04T09:52:40.576Z",
                            "_id": "601bc4f8a794e23c2e42efa9",
                            "menuType": "1",
                            "menuState": "1",
                            "menuName": "菜单管理",
                            "path": "/system/menu",
                            "component": "/system/menu",
                            "__v": 0,
                            "children": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601bc4f8a794e23c2e42efa9"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325400a821c6bb59084543",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "menu-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601bc4f8a794e23c2e42efa9"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "6032540fa821c6bb59084544",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "创建",
                                    "menuCode": "menu-create",
                                    "__v": 0
                                }
                            ],
                            "action": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601bc4f8a794e23c2e42efa9"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325400a821c6bb59084543",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "menu-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601bc4f8a794e23c2e42efa9"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "6032540fa821c6bb59084544",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "创建",
                                    "menuCode": "menu-create",
                                    "__v": 0
                                }
                            ]
                        },
                        {
                            "parentId": [
                                "600d4075e218daaf4ec77e52"
                            ],
                            "updateTime": "2021-02-04T09:52:40.576Z",
                            "createTime": "2021-02-04T09:52:40.576Z",
                            "_id": "601ca9a8a794e23c2e42efab",
                            "menuType": "1",
                            "menuState": "1",
                            "menuName": "角色管理",
                            "path": "/system/role",
                            "component": "/system/role",
                            "__v": 0,
                            "children": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601ca9a8a794e23c2e42efab"
                                    ],
                                    "updateTime": "2021-02-21T12:38:19.650Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325425a821c6bb59084545",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "role-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601ca9a8a794e23c2e42efab"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325461a821c6bb59084546",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "创建",
                                    "menuCode": "role-create",
                                    "__v": 0
                                }
                            ],
                            "action": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601ca9a8a794e23c2e42efab"
                                    ],
                                    "updateTime": "2021-02-21T12:38:19.650Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325425a821c6bb59084545",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "role-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601ca9a8a794e23c2e42efab"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325461a821c6bb59084546",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "创建",
                                    "menuCode": "role-create",
                                    "__v": 0
                                }
                            ]
                        },
                        {
                            "parentId": [
                                "600d4075e218daaf4ec77e52"
                            ],
                            "updateTime": "2021-02-04T09:52:40.576Z",
                            "createTime": "2021-02-04T09:52:40.576Z",
                            "_id": "601cb172a794e23c2e42efac",
                            "menuType": "1",
                            "menuState": "1",
                            "menuName": "部门管理",
                            "path": "/system/dept",
                            "component": "/system/dept",
                            "__v": 0,
                            "children": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601cb172a794e23c2e42efac"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325470a821c6bb59084547",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "dept-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601cb172a794e23c2e42efac"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "6032547da821c6bb59084548",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "创建",
                                    "menuCode": "dept-create",
                                    "__v": 0
                                }
                            ],
                            "action": [
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601cb172a794e23c2e42efac"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60325470a821c6bb59084547",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "dept-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "600d4075e218daaf4ec77e52",
                                        "601cb172a794e23c2e42efac"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "6032547da821c6bb59084548",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "创建",
                                    "menuCode": "dept-create",
                                    "__v": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "parentId": [
                        null
                    ],
                    "updateTime": "2021-02-18T01:42:15.243Z",
                    "createTime": "2021-02-04T06:56:46.506Z",
                    "_id": "601b9eb25929c81a1f988bb0",
                    "menuType": "1",
                    "menuState": "1",
                    "menuName": "审批管理",
                    "path": "/audit",
                    "icon": "el-icon-s-promotion",
                    "__v": 0,
                    "children": [
                        {
                            "parentId": [
                                "601b9eb25929c81a1f988bb0"
                            ],
                            "updateTime": "2021-02-19T14:50:00.555Z",
                            "createTime": "2021-02-04T09:52:40.576Z",
                            "_id": "601bc763a794e23c2e42efaa",
                            "menuType": "1",
                            "menuState": "1",
                            "menuName": "休假申请",
                            "path": "/audit/leave",
                            "component": "/audit/leave",
                            "__v": 0,
                            "children": [
                                {
                                    "parentId": [
                                        "601b9eb25929c81a1f988bb0",
                                        "601bc763a794e23c2e42efaa"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "603254a8a821c6bb59084549",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "leave-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "601b9eb25929c81a1f988bb0",
                                        "601bc763a794e23c2e42efaa"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "603254baa821c6bb5908454a",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "申请休假",
                                    "menuCode": "leave-create",
                                    "__v": 0
                                }
                            ],
                            "action": [
                                {
                                    "parentId": [
                                        "601b9eb25929c81a1f988bb0",
                                        "601bc763a794e23c2e42efaa"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "603254a8a821c6bb59084549",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "leave-query",
                                    "__v": 0
                                },
                                {
                                    "parentId": [
                                        "601b9eb25929c81a1f988bb0",
                                        "601bc763a794e23c2e42efaa"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "603254baa821c6bb5908454a",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "申请休假",
                                    "menuCode": "leave-create",
                                    "__v": 0
                                }
                            ]
                        },
                        {
                            "parentId": [
                                "601b9eb25929c81a1f988bb0"
                            ],
                            "updateTime": "2021-02-19T14:53:04.590Z",
                            "createTime": "2021-02-04T09:52:40.576Z",
                            "_id": "602fd045bf465a015fef54dc",
                            "menuType": "1",
                            "menuState": "1",
                            "menuName": "待我审批",
                            "path": "/audit/approve",
                            "component": "/audit/approve",
                            "__v": 0,
                            "children": [
                                {
                                    "parentId": [
                                        "601b9eb25929c81a1f988bb0",
                                        "602fd045bf465a015fef54dc"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60361f35a821c6bb5908454d",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "approve-query",
                                    "__v": 0
                                }
                            ],
                            "action": [
                                {
                                    "parentId": [
                                        "601b9eb25929c81a1f988bb0",
                                        "602fd045bf465a015fef54dc"
                                    ],
                                    "updateTime": "2021-02-21T11:06:19.345Z",
                                    "createTime": "2021-02-21T11:06:19.345Z",
                                    "_id": "60361f35a821c6bb5908454d",
                                    "menuType": "2",
                                    "menuState": "1",
                                    "menuName": "查看",
                                    "menuCode": "approve-query",
                                    "__v": 0
                                }
                            ]
                        }
                    ]
                }
            ],
            "msg": ""
        }
    });
});
module.exports = router;