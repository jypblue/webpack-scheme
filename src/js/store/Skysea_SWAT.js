/**
 * Created by sf.chen on 2016/6/23.
 */
'use strict';

const menu = ['REQUEST/流量', 'POOL', 'APP', 'CACHE', '图形化', 'MQ', 'DB', 'TOOLS'];
const data = {
    uat: [{
        title: 'REQUEST/流量',
        table: [{
            header: '全站',
            columes: [{}],
            data: [{
                rows: [
                    [{
                        name: '全站流量',
                        href: 'http://cdataportal.sh.ctripcorp.com/#report/173956',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'POOL',
        table: [{
            header: 'Pools',
            columes: [{
                name: 'Pool ID'
            }, {
                name: '名称'
            }, {
                name: '描述'
            }, {
                name: 'Group（访问组）'
            }],
            data: [{
                rows: [
                    [{
                        name: '3728',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ws.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3728',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_product',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_product',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_order',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_order',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_booking',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_booking',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_common',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_common',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_user',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_user',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_b2bgov',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_b2bgov',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_agent',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_agent',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_h5service',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_h5service',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_marketing',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_ws.skyseas.uat.qa.nt.ctripcorp.com_marketing',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3006',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'VS.cmp.Skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3006',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮后台网站',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_finance',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_finance',
                        img: ''
                    }, {
                        name: '	sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_crm',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=%09sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_crm',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_background',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_background',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_order',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_order',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_gov',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_gov',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_product',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_product',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_b2bgov',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_b2bgov',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_reports',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_reports',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_logisticsweb',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skyseas.uat.qa.nt.ctripcorp.com_logisticsweb',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3004',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'www.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3004',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮官网',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'sg_nt_uat_m.skysea.uat.qa.nt.ctripcorp.com_webapp_skyseah5',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_m.skysea.uat.qa.nt.ctripcorp.com_webapp_skyseah5',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_skysea.ctrip.uat.qa.nt.ctripcorp.com_mainctrip',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_skysea.ctrip.uat.qa.nt.ctripcorp.com_mainctrip',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_agent.skysea.uat.qa.nt.ctripcorp.com_main',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_agent.skysea.uat.qa.nt.ctripcorp.com_main',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_m.skysea.uat.qa.nt.ctripcorp.com_html5',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_m.skysea.uat.qa.nt.ctripcorp.com_html5',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_www.skysea.uat.qa.nt.ctripcorp.com_h5',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_www.skysea.uat.qa.nt.ctripcorp.com_h5',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_www.skysea.uat.qa.nt.ctripcorp.com_home',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_www.skysea.uat.qa.nt.ctripcorp.com_home',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_m.ctrip.uat.qa.nt.ctripcorp.com_webapp_skysea',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_m.ctrip.uat.qa.nt.ctripcorp.com_webapp_skysea',
                        img: ''
                    }, {
                        name: 'sg_nt_uat_cruise.ctrip.uat.qa.nt.ctripcorp.com_skysea',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_cruise.ctrip.uat.qa.nt.ctripcorp.com_skysea',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3003',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Accounts.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3003',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮HTTPS Online',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'sg_nt_uat_accounts.skysea.uat.qa.nt.ctripcorp.com_accounts',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_accounts.skysea.uat.qa.nt.ctripcorp.com_accounts',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3000',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'jobws1.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3000',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮Job站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'sg_nt_uat_jobws.skysea.uat.qa.nt.ctripcorp.com_jobws',
                        href: 'http://opskits.uat.qa.nt.ctripcorp.com/?Keyword=sg_nt_uat_jobws.skysea.uat.qa.nt.ctripcorp.com_jobws',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'APP',
        table: [{
            header: 'Apps',
            columes: [{
                name: 'AppID'
            }, {
                name: '名称'
            }, {
                name: '描述'
            }, {
                name: 'CLOG'
            }, {
                name: '发布'
            }],
            data: [{
                    rows: [
                        [{
                            name: '401001',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_api.product-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas产品服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401001',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401001/env?env=UAT ',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401003',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_api.order-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas订单处理服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.ctripcorp.com/#/?app=401003',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401003/env?env=UAT ',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401004',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_api.booking-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas查询预订服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401004',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401004/env?env=UAT ',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401006',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_api.jobws-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas任务Job服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401006',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401006/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401007',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_api.common-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas通用服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401007',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401007/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401008',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_api.user-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas用户权限服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401008',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401008/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401009',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_api.soaws-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas SOA2.0服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401009',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401009/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401101',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_product.home-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas产品录入系统首页',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401101',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401101/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401201',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_management.home-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas管理系统首页',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401201',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401201/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401301',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_booking.home-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas前台Online站点首页',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401301',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401301/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401302',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_booking.pages-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas前台静态页面资源站点',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401302',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401302/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401303',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_booking.h5-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas前台Online H5营销站点',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401303',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401303/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '401401',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-hhtravel.skyseas_order.home-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'Skyseas后台订单处理系统首页',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=401401',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/401401/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '4104101',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-payonly_tx_queue_service-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '极速退及定向提现队列处理服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=104101',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/4104101/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100000633',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'HHTravel.Skyseas_Background.Home',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '天海邮轮后台配置系统',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100000633',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100000633/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001264',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'SKYSEA_CRM',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CRM客户关系系统',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001264',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001264/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001389',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'SKYSEA_Accounts',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '天海用户站点',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001389',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001389/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001902',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-soa2-h5-api-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'H5站点服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001902',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001902/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001920',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-webapp-h5-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'H5应用站点',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001920',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001920/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001921',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '	ssc01-html5-h5-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'H5 seo proxy',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001921',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001921/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001922',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '	ssc01-webapp-agent-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'B2B官网',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001922',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001922/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001923',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '	ssc01-soa2-b2b-api-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'B2B官网服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001923',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001923/env?env=UAT',
                            img: ''
                        }]
                    ]
                },

                {
                    rows: [
                        [{
                            name: '100001931',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-soa2-b2bgov-api-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'B2B后台权限',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001931',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001931/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100001932',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '	ssc01-webapp-b2bgov-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'B2B后台管理系统',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100001932',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100001932/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100002041',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-webapp-ctrippage-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '携程天海频道-携程',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100002041',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100002041/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100002042',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-webapp-ctripskyseapage-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '携程天海频道-天海',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100002042',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100002042/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100002194',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-webapp-skysea-h5-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'H5移动应用站点',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100002194',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100002194/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100002383',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-webapp-ctrip-h5-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '天海渠道携程H5移动应用站点',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100002383',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100002383/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100002798',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-web-finance-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '财务系统',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100002798',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100002798/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100002910',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-skyseas-jobws-job',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '	Skyseas任务Job服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100002910',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100002910/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100003916',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-skysea-reports-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '天海邮轮报表系统',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100003916',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100003916/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100003939',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-skysea-logisticsweb-application',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '后勤系统',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100003939',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100003939/env?env=UAT',
                            img: ''
                        }]
                    ]
                }, {
                    rows: [
                        [{
                            name: '100003940',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'ssc01-skysea-logisticsweb-service',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: '后勤系统服务',
                            href: '',
                            img: ''
                        }],
                        [{
                            name: 'CLOG',
                            href: 'http://logging.uat.qa.nt.ctripcorp.com/#/?app=100003940',
                            img: ''
                        }],
                        [{
                            name: '发布',
                            href: 'http://cd.release.ctripcorp.com/#/app/100003940/env?env=UAT',
                            img: ''
                        }]
                    ]
                }
            ]
        }]
    }, {
        title: 'CACHE',
        table: [{
            header: 'REDIS',
            columes: [{
                name: 'Cluster Name'
            }, {
                name: 'Instances'
            }],
            data: [{
                rows: [
                    [{
                        name: 'Skysea',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '10.8.107.45(SVR5452HW1288):6379',
                        href: 'http://obsolete.sysmon.ctripcorp.com/server/?server=SVR5452HW1288',
                        img: ''
                    }, {
                        name: '10.8.107.44(SVR5451HW1288):6379',
                        href: 'http://obsolete.sysmon.ctripcorp.com/server/?server=SVR5451HW1288',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: '图形化',
        table: [{
            header: 'RedisPool',
            columes: [{
                name: 'Cluster'
            }, {
                name: '查看'
            }],
            data: [{
                rows: [
                    [{
                        name: 'Skysea',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '图形化管理界面',
                        href: 'http://cms.fx.uat.qa.nt.ctripcorp.com/GOV/RedisClusterGraph?clusterID=4541',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'MQ',
        table: [{
            header: 'Hermes',
            columes: [{
                name: 'Topic ID'
            }, {
                name: '名称'
            }, {
                name: '描述'
            }],
            data: [{
                rows: [
                    [{
                        name: '901281',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc.vote.submit',
                        href: 'http://hermes.fws.qa.nt.ctripcorp.com/console/dashboard#/detail/ssc.vote.submit',
                        img: ''
                    }],
                    [{
                        name: '提交投票',
                        href: '',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'DB',
        table: [{
            header: 'DB',
            columes: [{
                name: 'DB名称'
            }, {
                name: 'DB MONITOR'
            }],
            data: [{
                rows: [
                    [{
                        name: 'HhtSkyseasProduct.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=cpu&dbtype=sqlserver&d=1467090217615',
                        img: ''
                    }, {
                        name: 'Memory',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=memory&dbtype=sqlserver&d=1467090659077',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=uc&dbtype=sqlserver&d=1467090295142',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?m=svr3063hp580&dbtype=sqlserver&d=1467090360530',
                        img: ''
                    }, {
                        name: 'IOPS',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=svr3063hp580&dbtype=sqlserver&c=Avg.+Disk+sec%2fTransfer&d=636027162061895947',
                        img: ''
                    }],
                    [{
                        name: 'HhtSkyseasOrder.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=cpu&dbtype=sqlserver&d=1467090834360',
                        img: ''
                    }, {
                        name: 'Memory',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=memory&dbtype=sqlserver&d=1467090927414',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=uc&dbtype=sqlserver&d=1467090848546',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?m=svr3063hp580&dbtype=sqlserver&d=1467090872794',
                        img: ''
                    }, {
                        name: 'IOPS',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=svr3063hp580&dbtype=sqlserver&c=Avg.+Disk+sec%2fTransfer&d=636027164920286955',
                        img: ''
                    }],
                    [{
                        name: 'SkyseaReports.mysql.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=cpu&dbtype=mysql&d=1467596234625',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=uc&dbtype=mysql&d=1467596276136',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?dbtype=mysql&m=vms22452&d=1467596299182',
                        img: ''
                    }, {
                        name: 'IO',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=vms22452&dbtype=mysql&c=%25util&d=636032219158003197',
                        img: ''
                    }],
                    [{
                        name: 'SkyseasProduct.mysql.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=cpu&dbtype=mysql&d=1467623023290',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=uc&dbtype=mysql&d=1467623041369',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?dbtype=mysql&m=vms22452&d=1467623056839',
                        img: ''
                    }, {
                        name: 'IO',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=vms22452&dbtype=mysql&c=%25util&d=636032486728768036',
                        img: ''
                    }],
                ]
            }]
        }]
    }, {
        title: 'TOOLS',
        table: [{
            header: 'Tools',
            columes: [{
                name: 'TOOL NAME'
            }],
            data: [{
                rows: [
                    [{
                        name: 'FX',
                        href: 'http://cdataportal.sh.ctripcorp.com/fx/fxtools/#',
                        img: ''
                    }],
                    [{
                        name: 'Eudemon',
                        href: 'http://eudemon.ops.ctripcorp.com/soa/',
                        img: ''
                    }],
                    [{
                        name: 'Sitemon',
                        href: 'http://sitemon/',
                        img: ''
                    }],
                    [{
                        name: 'es',
                        href: 'http://es.ops.ctripcorp.com/#/dashboard/file/default.json',
                        img: ''
                    }]
                ]
            }]
        }]
    }, ],

    prd: [{
        title: 'REQUEST/流量',
        table: [{
            header: '全站',
            columes: [{}],
            data: [{
                rows: [
                    [{
                        name: '全站流量',
                        href: 'http://cdataportal.sh.ctripcorp.com/#report/173956',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'POOL',
        table: [{
            header: 'Pools',
            columes: [{
                name: 'Pool ID'
            }, {
                name: '名称'
            }, {
                name: '描述'
            }, {
                name: 'Group（访问组）'
            }],
            data: [{
                rows: [
                    [{
                        name: '3728',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ws.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3728',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_product',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_product',
                        img: ''
                    }, {
                        name: '	sg_jq_pro_ws.skyseas.ctripcorp.com_order',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_order',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_booking',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_booking',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_common',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_common',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_user',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_user',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_b2bgov',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_b2bgov',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_agent',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_agent',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_h5service',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_h5service',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_ws.skyseas.ctripcorp.com_marketing',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_ws.skyseas.ctripcorp.com_marketing',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3006',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'VS.cmp.Skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3006',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮后台网站',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'sg_jq_pro_skyseas.ctripcorp.com_finance',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_finance',
                        img: ''
                    }, {
                        name: '	sg_jq_pro_skyseas.ctripcorp.com_crm',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_crm',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_skyseas.ctripcorp.com_background',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_background',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_skyseas.ctripcorp.com_order',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_order',
                        img: ''
                    }, {
                        name: '	sg_jq_pro_skyseas.ctripcorp.com_gov',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_gov',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_skyseas.ctripcorp.com_product',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_product',
                        img: ''
                    }, {
                        name: '	sg_jq_pro_skyseas.ctripcorp.com_b2bgov',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_b2bgov',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_skyseas.ctripcorp.com_reports',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_reports',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_skyseas.ctripcorp.com_logisticsweb',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skyseas.ctripcorp.com_logisticsweb',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3004',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'www.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3004',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮官网',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	sg_jq_pro_m.skysea.com_webapp_skyseah5',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_m.skysea.com_webapp_skyseah5',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_skysea.ctrip.com_mainctrip',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_skysea.ctrip.com_mainctrip',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_agent.skysea.com_main',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_agent.skysea.com_main',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_m.skysea.com_html5',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_m.skysea.com_html5',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_www.skysea.com_h5',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_www.skysea.com_h5',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_www.skysea.com_home',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_www.skysea.com_home',
                        img: ''
                    }, {
                        name: 'sg_jq_pro_m.ctrip.com_webapp_skysea',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_m.ctrip.com_webapp_skysea',
                        img: ''
                    }, {
                        name: 'sg_oy_pro_cruise.ctrip.com_skysea',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_oy_pro_cruise.ctrip.com_skysea',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3003',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Accounts.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3003',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮HTTPS Online',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	sg_jq_pro_accounts.skysea.com_accounts',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_accounts.skysea.com_accounts',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '3000',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'jobws1.cmp.skysea',
                        href: 'http://newsc.ops.ctripcorp.com/#/pool/3000',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮Job站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	sg_jq_pro_jobws.skysea.ctripcorp.com_jobws',
                        href: 'http://webinfo.ctripcorp.com/?Keyword=sg_jq_pro_jobws.skysea.ctripcorp.com_jobws',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'APP',
        table: [{
            header: 'Apps',
            columes: [{
                name: 'AppID'
            }, {
                name: '名称'
            }, {
                name: '描述'
            }, {
                name: 'CLOG'
            }, {
                name: '发布'
            }],
            data: [{
                rows: [
                    [{
                        name: '401001',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_api.product-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas产品服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401001',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401001&app=401001',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401003',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_api.order-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas订单处理服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401003',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401003&app=401003',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401004',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_api.booking-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas查询预订服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401004',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401004&app=401004',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401006',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_api.jobws-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas任务Job服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401006',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401006&app=401006',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401007',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	ssc01-hhtravel.skyseas_api.common-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas通用服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401007',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401007&app=401007',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401008',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_api.user-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas用户权限服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401008',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401008&app=401008',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401009',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	ssc01-hhtravel.skyseas_api.soaws-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas SOA2.0服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401009',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401009&app=401009',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401101',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_product.home-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas产品录入系统首页',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401101',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401101&app=401101',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401201',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_management.home-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas管理系统首页',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401201',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401201&app=401201',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401301',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_booking.home-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas前台Online站点首页',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401301',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401301&app=401301',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401302',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_booking.pages-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas前台静态页面资源站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401302',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401302&app=401302',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401303',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_booking.h5-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas前台Online H5营销站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401303',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401303&app=401303',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '401401',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-hhtravel.skyseas_order.home-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'Skyseas后台订单处理系统首页',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=401401',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=401401&app=401401',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '4104101',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-payonly_tx_queue_service-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '极速退及定向提现队列处理服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=4104101',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=4104101&app=4104101',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100000633',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'HHTravel.Skyseas_Background.Home',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮后台配置系统',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100000633',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100000633&app=100000633',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001264',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'SKYSEA_CRM',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CRM客户关系系统',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001264',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001264&app=100001264',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001389',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'SKYSEA_Accounts',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '天海用户站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001389',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001389&app=100001389',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001902',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-soa2-h5-api-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'H5站点服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001902',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001902&app=100001902',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001920',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-webapp-h5-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'H5应用站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001920',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001920&app=100001920',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001921',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	ssc01-html5-h5-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'H5 seo proxy',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001921',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001921&app=100001921',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001922',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	ssc01-webapp-agent-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'B2B官网',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001922',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001922&app=100001922',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001923',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	ssc01-soa2-b2b-api-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'B2B官网服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001923',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001923&app=100001923',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001931',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-soa2-b2bgov-api-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'B2B后台权限',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001931',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001931&app=100001931',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100001932',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	ssc01-webapp-b2bgov-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'B2B后台管理系统',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100001932',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100001932&app=100001932',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100002041',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-webapp-ctrippage-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '携程天海频道-携程',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100002041',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100002041&app=100002041',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100002042',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-webapp-ctripskyseapage-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '携程天海频道-天海',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100002042',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100002042&app=100002042',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100002194',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-webapp-skysea-h5-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'H5移动应用站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100002194',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100002194&app=100002194',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100002383',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-webapp-ctrip-h5-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '天海渠道携程H5移动应用站点',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100002383',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100002383&app=100002383',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100002798',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-web-finance-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '财务系统',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100002798',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100002798&app=100002798',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100002910',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-skyseas-jobws-job',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '	Skyseas任务Job服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100002910',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100002910&app=100002910',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100003916',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-skysea-reports-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '天海邮轮报表系统',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100003916',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100003916&app=100003916',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100003939',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-skysea-logisticsweb-application',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '后勤系统',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100003939',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100003939&app=100003939',
                        img: ''
                    }]
                ]
            }, {
                rows: [
                    [{
                        name: '100003940',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc01-skysea-logisticsweb-service',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '后勤系统服务',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CLOG',
                        href: 'http://logging.ctripcorp.com/#/?app=100003940',
                        img: ''
                    }],
                    [{
                        name: '发布',
                        href: 'http://tars.release.ctripcorp.com/#/view/deployments/parallel?apps=100003940&app=100003940',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'CACHE',
        table: [{
            header: 'REDIS',
            columes: [{
                name: 'Cluster Name'
            }, {
                name: 'Instances'
            }],
            data: [{
                rows: [
                    [{
                        name: 'Skysea',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '10.8.107.45(SVR5452HW1288):6379',
                        href: 'http://obsolete.sysmon.ctripcorp.com/server/?server=SVR5452HW1288',
                        img: ''
                    }, {
                        name: '10.8.107.44(SVR5451HW1288):6379',
                        href: 'http://obsolete.sysmon.ctripcorp.com/server/?server=SVR5451HW1288',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: '图形化',
        table: [{
            header: 'RedisPool',
            columes: [{
                name: 'Cluster'
            }, {
                name: '查看'
            }],
            data: [{
                rows: [
                    [{
                        name: 'Skysea',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: '图形化管理界面',
                        href: 'http://cms.fx.sh.ctripcorp.com/GOV/RedisPoolGraph?poolID=189',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'MQ',
        table: [{
            header: 'Hermes',
            columes: [{
                name: 'Topic ID'
            }, {
                name: '名称'
            }, {
                name: '描述'
            }],
            data: [{
                rows: [
                    [{
                        name: '901281',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'ssc.vote.submit',
                        href: 'http://hermes.fx.ctripcorp.com/console/dashboard#/detail/ssc.vote.submit',
                        img: ''
                    }],
                    [{
                        name: '提交投票',
                        href: '',
                        img: ''
                    }]
                ]
            }]
        }]
    }, {
        title: 'DB',
        table: [{
            header: 'DB',
            columes: [{
                name: 'DB名称'
            }, {
                name: 'DB MONITOR'
            }],
            data: [{
                rows: [
                    [{
                        name: 'HhtSkyseasProduct.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=cpu&dbtype=sqlserver&d=1467090217615',
                        img: ''
                    }, {
                        name: 'Memory',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=memory&dbtype=sqlserver&d=1467090659077',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=uc&dbtype=sqlserver&d=1467090295142',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?m=svr3063hp580&dbtype=sqlserver&d=1467090360530',
                        img: ''
                    }, {
                        name: 'IOPS',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=svr3063hp580&dbtype=sqlserver&c=Avg.+Disk+sec%2fTransfer&d=636027162061895947',
                        img: ''
                    }],
                    [{
                        name: 'HhtSkyseasOrder.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=cpu&dbtype=sqlserver&d=1467090834360',
                        img: ''
                    }, {
                        name: 'Memory',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=memory&dbtype=sqlserver&d=1467090927414',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=svr3063hp580&t=uc&dbtype=sqlserver&d=1467090848546',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?m=svr3063hp580&dbtype=sqlserver&d=1467090872794',
                        img: ''
                    }, {
                        name: 'IOPS',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=svr3063hp580&dbtype=sqlserver&c=Avg.+Disk+sec%2fTransfer&d=636027164920286955',
                        img: ''
                    }],
                    [{
                        name: 'SkyseaReports.mysql.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=cpu&dbtype=mysql&d=1467619118099',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=uc&dbtype=mysql&d=1467596276136',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?dbtype=mysql&m=vms22452&d=1467596299182',
                        img: ''
                    }, {
                        name: 'IO',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=vms22452&dbtype=mysql&c=%25util&d=636032219158003197',
                        img: ''
                    }],
                    [{
                        name: 'SkyseasProduct.mysql.db.ctripcorp.com',
                        href: '',
                        img: ''
                    }],
                    [{
                        name: 'CPU',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=cpu&dbtype=mysql&d=1467623023290',
                        img: ''
                    }, {
                        name: 'UC',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetail?m=vms22452&t=uc&dbtype=mysql&d=1467623041369',
                        img: ''
                    }, {
                        name: 'Block',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByQueryBlock?dbtype=mysql&m=vms22452&d=1467623056839',
                        img: ''
                    }, {
                        name: 'IO',
                        href: 'http://dbtools.ops.ctripcorp.com/DBMonitor/Ajax/GetMachineDetailByIOJpg?m=vms22452&dbtype=mysql&c=%25util&d=636032486728768036',
                        img: ''
                    }],
                ]
            }]
        }]
    }, {
        title: 'TOOLS',
        table: [{
            header: 'Tools',
            columes: [{
                name: 'TOOL NAME'
            }],
            data: [{
                rows: [
                    [{
                        name: 'FX',
                        href: 'http://cdataportal.sh.ctripcorp.com/fx/fxtools/#',
                        img: ''
                    }],
                    [{
                        name: 'Eudemon',
                        href: 'http://eudemon.ops.ctripcorp.com/soa/',
                        img: ''
                    }],
                    [{
                        name: 'Sitemon',
                        href: 'http://sitemon/',
                        img: ''
                    }],
                    [{
                        name: 'es',
                        href: 'http://es.ops.ctripcorp.com/#/dashboard/file/default.json',
                        img: ''
                    }]
                ]
            }]
        }]
    }, ]
};
const people = {
    swat: [{
        name: 'vzxy朱肖云',
        tel: '18116461862',
        img: ''
    }, {
        name: 'vsjq盛佳齐',
        tel: '13651635745',
        img: ''
    }],
    rm: []
};

module.exports = {
    swatdata: data,
    swatmenu: menu,
    swatpeople: people
};
