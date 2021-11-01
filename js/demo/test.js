"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-19 16:11:52
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-19 16:12:00
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_property_decorator_1 = require("vue-property-decorator");
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 获取小球的运动边界
        _this.main = '';
        // 获取五个小球的div
        _this.circles = '';
        // 用来存放小球div每个的具体信息，包括坐标，速度等值
        _this.container = [];
        _this.arr = {};
        // 初始化运动的最大宽高，初始定义为0
        _this.maxW = [];
        _this.maxH = [];
        // 获取小球的直径
        _this.cwidth = [];
        return _this;
    }
    About.prototype.mounted = function () {
        this.main = this.$refs.main;
        this.circles = this.main.getElementsByClassName('circle');
        // 为了让小球不卡在盒子边缘，所以要减去自身宽高
        for (var index = 0; index < this.circles.length; index++) {
            this.maxW.push(this.main.offsetWidth - this.circles[index].clientWidth);
            this.maxH.push(this.main.offsetHeight - this.circles[index].clientHeight);
            this.cwidth.push(this.circles[index].offsetWidth);
        }
        this.initializeCircle();
        // 对每一个小球绑定计时器，让小球动起来
        for (var i = 0; i < this.container.length; i++) {
            this.cricleMove(this.container[i]);
        }
    };
    /**
     * 初始化小球信息
     */
    About.prototype.initializeCircle = function () {
        // 数组对象初始化
        for (var i = 0; i < this.circles.length; i++) {
            this.arr = {};
            // 初始x坐标
            this.arr.x = Math.floor(Math.random() * (this.maxW[i] + 1));
            // 初始y坐标
            this.arr.y = Math.floor(Math.random() * (this.maxH[i] + 1));
            // 圆心x坐标
            this.arr.cx = this.arr.x + this.circles[i].offsetWidth / 2;
            // 圆心y坐标
            this.arr.cy = this.arr.y + this.circles[i].offsetHeight / 2;
            // x轴移动方向
            this.arr.movex = Math.floor(Math.random() * 2);
            // y轴移动方向
            this.arr.movey = Math.floor(Math.random() * 2);
            // 随机速度
            this.arr.speed = 2 + Math.floor(Math.random() * 2);
            // 计数器
            this.arr.timer = null;
            // 索引值
            this.arr.index = i;
            // 存放所有属性值
            this.container.push(this.arr);
            // 初始化小球位置
            this.circles[i].style.left = this.arr.x + "px";
            this.circles[i].style.top = this.arr.y + "px";
        }
    };
    /**
     * 小球碰撞函数
     */
    About.prototype.circleCrash = function (index) {
        // 在数组中任意球的圆心坐标
        var ball1x = this.container[index].cx;
        var ball1y = this.container[index].cy;
        for (var i = 0; i < this.container.length; i++) {
            if (i !== index) {
                // 判断取出来的球不是本身，才能和其他球进行距离判断
                var ball2x = this.container[i].cx; // 将其他球的圆心坐标赋值给球2
                var ball2y = this.container[i].cy;
                // 圆心距 求两个点之间的距离,开平方
                var distence = Math.sqrt((ball1x - ball2x) * (ball1x - ball2x) +
                    (ball1y - ball2y) * (ball1y - ball2y));
                if (distence <= this.cwidth[i]) {
                    // 球心距离和求直径比较
                    if (ball1x > ball2x) {
                        // 当前位于未知求的右方
                        if (ball1y > ball2y) {
                            // 预设未知球撞当前球，然后当前球改变运动
                            this.container[index].movex = 1; // 1表示为正值，对应的右和下
                            this.container[index].movey = 1; // 0表示为负值，对应的左和上
                        }
                        else if (ball1y < ball2y) {
                            this.container[index].movex = 1;
                            this.container[index].movey = 0;
                        }
                        else {
                            this.container[index].movex = 1;
                        }
                    }
                    else if (ball1x < ball2x) {
                        if (ball1y > ball2y) {
                            this.container[index].movex = 0;
                            this.container[index].movey = 0;
                        }
                        else if (ball1y < ball2y) {
                            this.container[index].movex = 0;
                            this.container[index].movey = 1;
                        }
                        else {
                            this.container[index].movex = 0;
                        }
                    }
                    else {
                        if (ball1y > ball2y) {
                            this.container[index].movey = 1;
                        }
                        else if (ball1y < ball2y) {
                            this.container[index].movey = 0;
                        }
                    }
                }
            }
        }
    };
    /**
     * 小球移动函数
     */
    About.prototype.cricleMove = function (balls) {
        var _this = this;
        // 每个球都有单独的定时器
        balls.timer = setInterval(function () {
            if (balls.movex === 1) {
                // 如果向右跑，则一直加速度，碰到边界，改为反方向运动
                balls.x += balls.speed;
                if (balls.x + balls.speed >= _this.maxW[balls.index]) {
                    // 防止小球移动出界限
                    balls.x = _this.maxW[balls.index];
                    balls.movex = 0;
                }
            }
            else {
                balls.x -= balls.speed;
                if (balls.x - balls.speed <= 0) {
                    balls.x = 0;
                    balls.movex = 1;
                }
            }
            if (balls.movey === 1) {
                balls.y += balls.speed;
                if (balls.y + balls.speed >= _this.maxH[balls.index]) {
                    balls.y = _this.maxH[balls.index];
                    balls.movey = 0;
                }
            }
            else {
                balls.y -= balls.speed;
                if (balls.y - balls.speed <= 0) {
                    balls.y = 0;
                    balls.movey = 1;
                }
            }
            balls.cx = balls.x + _this.circles[0].offsetWidth / 2; // 小球圆心等于：运动中x的值加上自身的半径
            balls.cy = balls.y + _this.circles[0].offsetHeight / 2;
            _this.circles[balls.index].style.left = balls.x + 'px'; // 小球相对于屏幕的位置
            _this.circles[balls.index].style.top = balls.y + 'px';
            _this.circleCrash(balls.index); // 每个小球进行碰撞检测
        }, 25);
    };
    About = __decorate([
        (0, vue_property_decorator_1.Component)({})
    ], About);
    return About;
}(vue_property_decorator_1.Vue));
exports.default = About;
