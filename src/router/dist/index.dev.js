"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _login = _interopRequireDefault(require("../components/Login/login.vue"));

var _Home = _interopRequireDefault(require("../components/Home/Home.vue"));

var _Affairs = _interopRequireDefault(require("../components/Affairs/Affairs.vue"));

var _HomeRight = _interopRequireDefault(require("../components/HomeRight/HomeRight.vue"));

var _Verify = _interopRequireDefault(require("../components/Verify/Verify.vue"));

var _Coupon = _interopRequireDefault(require("../components/Coupon/Coupon.vue"));

var _Activity = _interopRequireDefault(require("../components/Activity/Activity.vue"));

var _Group = _interopRequireDefault(require("../components/Group/Group.vue"));

var _Commodity = _interopRequireDefault(require("../components/Commodity/Commodity.vue"));

var _Draw = _interopRequireDefault(require("../components/Draw/Draw.vue"));

var _Enter = _interopRequireDefault(require("../components/Enter/Enter.vue"));

var _Store = _interopRequireDefault(require("../components/Store/Store.vue"));

var _Open = _interopRequireDefault(require("../components/Open/Open.vue"));

var _Consumption = _interopRequireDefault(require("../components/Consumption/Consumption.vue"));

var _Make = _interopRequireDefault(require("../components/Make/Make.vue"));

var _activitys = _interopRequireDefault(require("../components/activitys/activitys.vue"));

var _Stores = _interopRequireDefault(require("../components/Stores/Stores.vue"));

var _Buying = _interopRequireDefault(require("../components/Buying/Buying.vue"));

var _Dity = _interopRequireDefault(require("../components/Dity/Dity.vue"));

var _Added = _interopRequireDefault(require("../components/Added/Added.vue"));

var _activityHou = _interopRequireDefault(require("../components/activityHou/activityHou.vue"));

var _Door = _interopRequireDefault(require("../components/Door/Door.vue"));

var _Customized = _interopRequireDefault(require("../components/Customized/Customized.vue"));

var _Upper = _interopRequireDefault(require("../components/Upper/Upper.vue"));

var _Finance = _interopRequireDefault(require("../components/Finance/Finance.vue"));

var _Pos = _interopRequireDefault(require("../components/Pos/Pos.vue"));

var _Bank = _interopRequireDefault(require("../components/Bank/Bank.vue"));

var _Distribution = _interopRequireDefault(require("../components/Distribution/Distribution.vue"));

var _Fast = _interopRequireDefault(require("../components/Fast/Fast.vue"));

var _parent = _interopRequireDefault(require("@/views/parent.vue"));

var _childer = _interopRequireDefault(require("@/components/childer.vue"));

var _B = _interopRequireDefault(require("@/components/B.vue"));

var _C = _interopRequireDefault(require("@/components/C.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Login',
  component: _login["default"]
}, {
  path: '/Home',
  name: 'Home',
  component: _Home["default"],
  redirect: '/Home/HomeRight'
}, {
  path: '/Login',
  name: 'Login',
  component: _login["default"]
}, {
  path: '/Home',
  component: _Home["default"],
  children: [{
    path: 'Affairs',
    name: 'Affairs',
    component: _Affairs["default"]
  }, {
    path: 'HomeRight',
    name: 'HomeRight',
    component: _HomeRight["default"]
  }, {
    path: 'Verify',
    name: 'Verify',
    component: _Verify["default"]
  }, {
    path: 'Coupon',
    name: 'Coupon',
    component: _Coupon["default"]
  }, {
    path: 'Activity',
    name: 'Activity',
    component: _Activity["default"]
  }, {
    path: 'Group',
    name: 'Group',
    component: _Group["default"]
  }, {
    path: 'Commodity',
    name: 'Commodity',
    component: _Commodity["default"]
  }, {
    path: 'Draw',
    name: 'Draw',
    component: _Draw["default"]
  }, {
    path: 'Enter',
    name: 'Enter',
    component: _Enter["default"]
  }, {
    path: 'Store',
    name: 'Store',
    component: _Store["default"]
  }, {
    path: 'Open',
    name: 'Open',
    component: _Open["default"]
  }, {
    path: 'Consumption',
    name: 'Consumption',
    component: _Consumption["default"]
  }, {
    path: 'Make',
    name: 'Make',
    component: _Make["default"]
  }, {
    path: 'activitys',
    name: 'activitys',
    component: _activitys["default"]
  }, {
    path: 'Stores',
    name: 'Stores',
    component: _Stores["default"]
  }, {
    path: 'Buying',
    name: 'Buying',
    component: _Buying["default"]
  }, {
    path: 'Dity',
    name: 'Dity',
    component: _Dity["default"]
  }, {
    path: 'Added',
    name: 'Added',
    component: _Added["default"]
  }, {
    path: 'activityHou',
    name: 'activityHou',
    component: _activityHou["default"]
  }, {
    path: 'Door',
    name: 'Door',
    component: _Door["default"]
  }, {
    path: 'Customized',
    name: 'Customized',
    component: _Customized["default"]
  }, {
    path: 'Upper',
    name: 'Upper',
    component: _Upper["default"]
  }, {
    path: 'Finance',
    name: 'Finance',
    component: _Finance["default"]
  }, {
    path: 'Pos',
    name: 'Pos',
    component: _Pos["default"]
  }, {
    path: 'Bank',
    name: 'Bank',
    component: _Bank["default"]
  }, {
    path: 'Distribution',
    name: 'Distribution',
    component: _Distribution["default"]
  }, {
    path: 'Fast',
    name: 'Fast',
    component: _Fast["default"]
  }]
}, {
  path: '/about',
  name: 'About',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/About.vue'));
    });
  }
}, {
  path: '/parent',
  component: _parent["default"],
  children: [{
    path: 'A',
    name: 'a',
    component: _childer["default"]
  }, {
    path: 'B',
    name: 'b',
    component: _B["default"]
  }, {
    path: 'C',
    name: 'c',
    component: _C["default"]
  }]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;