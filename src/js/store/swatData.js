/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-15 11:18:09
 * @version $Id$
 */

'use strict';

const menu = ['request', 'kpi', 'pool'];
const data = {
  uat: [{
      title: 'Request/流量',
      table: [{
        header: '全站',
        columes: [{}],
        data: [{
          rows: [
            [{
              name: '全站Request',
              href: '',
              img: ''
            }]
          ]
        }, {
          rows: [
            [{
              name: '全站流量',
              href: '',
              img: ''
            }]
          ]
        }]
      }]
    }, {
      title: 'Pool',
      table: [{
        header: 'pool',
        columes: [{
          name: 'POOL名称'
        }, {
          name: '描述'
        }, {
          name: '系统'
        }, {
          name: '其他链接'
        }],
        data: [{
          rows: [
            [{
              name: 'Vs_HHTRAVEL11',
              href: '',
              img: ''
            }],
            [{
              name: 'oNline高端',
              href: '',
              img: ''
            }],
            [{
              name: 'cup',
              href: '',
              img: ''
            }, {
              name: '内存',
              href: '',
              img: ''
            }],
            [{
              name: 'sysom',
              href: '',
              img: ''
            }, {
              name: 'sysom',
              href: 'http://www.baidu.com',
              img: ''
            }]
          ]
        }, {
          rows: [
            [{
              name: 'Vs_HHTRAVEL12',
              href: '',
              img: ''
            }],
            [{
              name: 'oNline高端',
              href: '',
              img: ''
            }],
            [{
              name: 'cup',
              href: '',
              img: ''
            }, {
              name: '内存',
              href: '',
              img: ''
            }],
            [{
              name: 'sysom',
              href: '',
              img: ''
            }, {
              name: 'sysom',
              href: 'http://www.baidu.com',
              img: 'https://avatars3.githubusercontent.com/u/5317786?v=3&u=efcf9993ed4a56883f5eaadd8ecd2e04b6ee7c6a&s=140'
            }]
          ]
        }]
      }]
    }, {
      title: 'SITE',
      table: [{
        header: 'sites',
        columes: [{
          name: '站点名称'
        }, {
          name: '描述'
        }, {
          name: 'IISLOG'
        }, {
          name: 'URLcheck'
        }],
        data: [{
          rows: [
            [{
              name: 'hhwasda',
              href: '',
              img: ''
            }],
            [{
              name: '高端收缩',
              href: '',
              img: ''
            }],
            [{
              name: 'IISOG',
              href: '',
              img: ''
            }],
            [{
              name: 'URLcheck',
              href: '',
              img: ''
            }]
          ]
        }]
      }]
    }

  ],
  prd: [{
      title: 'Request/流量prd',
      table: [{
        header: '全站',
        columes: [{}],
        data: [{
          rows: [
            [{
              name: '全站Requestprd',
              href: '',
              img: ''
            }]
          ]
        }, {
          rows: [
            [{
              name: '全站流量prd',
              href: '',
              img: ''
            }]
          ]
        }]
      }]
    }, {
      title: 'Pool',
      table: [{
        header: 'pool',
        columes: [{
          name: 'POOL名称prd'
        }, {
          name: '描述prd'
        }, {
          name: '系统prd'
        }, {
          name: '其他链接prd'
        }],
        data: [{
          rows: [
            [{
              name: 'Vs_HHTRAVEL11prd',
              href: '',
              img: ''
            }],
            [{
              name: 'oNline高端prd',
              href: '',
              img: ''
            }],
            [{
              name: 'cup',
              href: '',
              img: ''
            }, {
              name: '内存',
              href: '',
              img: ''
            }],
            [{
              name: 'sysom',
              href: '',
              img: ''
            }, {
              name: 'sysom',
              href: 'http://www.baidu.com',
              img: ''
            }]
          ]
        }, {
          rows: [
            [{
              name: 'Vs_HHTRAVEL12',
              href: '',
              img: ''
            }],
            [{
              name: 'oNline高端',
              href: '',
              img: ''
            }],
            [{
              name: 'cup',
              href: '',
              img: ''
            }, {
              name: '内存',
              href: '',
              img: ''
            }],
            [{
              name: 'sysom',
              href: '',
              img: ''
            }, {
              name: 'sysom',
              href: 'http://www.baidu.com',
              img: 'https://avatars3.githubusercontent.com/u/5317786?v=3&u=efcf9993ed4a56883f5eaadd8ecd2e04b6ee7c6a&s=140'
            }]
          ]
        }]
      }]
    }, {
      title: 'SITE-prd',
      table: [{
        header: 'sites',
        columes: [{
          name: '站点名称prd'
        }, {
          name: '描述-prd'
        }, {
          name: 'IISLOG-prd'
        }, {
          name: 'URLcheckprd'
        }],
        data: [{
          rows: [
            [{
              name: 'hhwasda',
              href: '',
              img: ''
            }],
            [{
              name: '高端收缩',
              href: '',
              img: ''
            }],
            [{
              name: 'IISOG',
              href: '',
              img: ''
            }],
            [{
              name: 'URLcheck',
              href: '',
              img: ''
            }]
          ]
        }]
      }]
    }

  ]
};
const people = {
  swat: [{
    name: 'wss王少涵',
    tel: '1372298210',
    img: ''
  }, {
    name: 'cyy蔡玉玉',
    tel: '15823128824',
    img: ''
  }, {
    name: 'lv刘路技术中心',
    tel: '13823145670',
    img: ''
  }],
  rm: [{
    name: '胡建华',
    tel: '13124323345',
    img: ''
  }, {
    name: '做军军',
    tel: '18712212122',
    img: ''
  }]
};

module.exports = {
  swatdata: data,
  swatmenu: menu,
  swatpeople: people
};
