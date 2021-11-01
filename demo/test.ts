/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-19 16:11:52
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-19 16:12:00
 */

import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  // 获取小球的运动边界
  public main: any = '';
  // 获取五个小球的div
  public circles: any = '';
  // 用来存放小球div每个的具体信息，包括坐标，速度等值
  public container: any = [];
  public arr: any = {};
  // 初始化运动的最大宽高，初始定义为0
  public maxW: any = [];
  public maxH: any = [];
  // 获取小球的直径
  public cwidth: any = [];
  public mounted() {
    this.main = this.$refs.main;
    this.circles = this.main.getElementsByClassName('circle');
    // 为了让小球不卡在盒子边缘，所以要减去自身宽高
    for (let index = 0; index < this.circles.length; index++) {
      this.maxW.push(this.main.offsetWidth - this.circles[index].clientWidth);
      this.maxH.push(this.main.offsetHeight - this.circles[index].clientHeight);
      this.cwidth.push(this.circles[index].offsetWidth);
    }
    this.initializeCircle();
    // 对每一个小球绑定计时器，让小球动起来
    for (let i = 0; i < this.container.length; i++) {
      this.cricleMove(this.container[i]);
    }
  }
  /**
   * 初始化小球信息
   */
  public initializeCircle() {
    // 数组对象初始化
    for (let i = 0; i < this.circles.length; i++) {
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
      this.circles[i].style.left = `${this.arr.x}px`;
      this.circles[i].style.top = `${this.arr.y}px`;
    }
  }
  /**
   * 小球碰撞函数
   */
  public circleCrash(index: number) {
    // 在数组中任意球的圆心坐标
    const ball1x = this.container[index].cx;
    const ball1y = this.container[index].cy;
    for (let i = 0; i < this.container.length; i++) {
      if (i !== index) {
        // 判断取出来的球不是本身，才能和其他球进行距离判断
        const ball2x = this.container[i].cx; // 将其他球的圆心坐标赋值给球2
        const ball2y = this.container[i].cy;
        // 圆心距 求两个点之间的距离,开平方
        const distence = Math.sqrt(
            (ball1x - ball2x) * (ball1x - ball2x) +
            (ball1y - ball2y) * (ball1y - ball2y)
        );
        if (distence <= this.cwidth[i]) {
          // 球心距离和求直径比较
          if (ball1x > ball2x) {
            // 当前位于未知求的右方
            if (ball1y > ball2y) {
              // 预设未知球撞当前球，然后当前球改变运动
              this.container[index].movex = 1; // 1表示为正值，对应的右和下
              this.container[index].movey = 1; // 0表示为负值，对应的左和上
            } else if (ball1y < ball2y) {
              this.container[index].movex = 1;
              this.container[index].movey = 0;
            } else {
              this.container[index].movex = 1;
            }
          } else if (ball1x < ball2x) {
            if (ball1y > ball2y) {
              this.container[index].movex = 0;
              this.container[index].movey = 0;
            } else if (ball1y < ball2y) {
              this.container[index].movex = 0;
              this.container[index].movey = 1;
            } else {
              this.container[index].movex = 0;
            }
          } else {
            if (ball1y > ball2y) {
              this.container[index].movey = 1;
            } else if (ball1y < ball2y) {
              this.container[index].movey = 0;
            }
          }
        }
      }
    }
  }

  /**
   * 小球移动函数
   */
  public cricleMove(balls: any) {
    // 每个球都有单独的定时器
    balls.timer = setInterval(() => {
      if (balls.movex === 1) {
        // 如果向右跑，则一直加速度，碰到边界，改为反方向运动
        balls.x += balls.speed;
        if (balls.x + balls.speed >= this.maxW[balls.index]) {
          // 防止小球移动出界限
          balls.x = this.maxW[balls.index];
          balls.movex = 0;
        }
      } else {
        balls.x -= balls.speed;
        if (balls.x - balls.speed <= 0) {
          balls.x = 0;
          balls.movex = 1;
        }
      }
      if (balls.movey === 1) {
        balls.y += balls.speed;
        if (balls.y + balls.speed >= this.maxH[balls.index]) {
          balls.y = this.maxH[balls.index];
          balls.movey = 0;
        }
      } else {
        balls.y -= balls.speed;
        if (balls.y - balls.speed <= 0) {
          balls.y = 0;
          balls.movey = 1;
        }
      }
      balls.cx = balls.x + this.circles[0].offsetWidth / 2; // 小球圆心等于：运动中x的值加上自身的半径
      balls.cy = balls.y + this.circles[0].offsetHeight / 2;
      this.circles[balls.index].style.left = balls.x + 'px'; // 小球相对于屏幕的位置
      this.circles[balls.index].style.top = balls.y + 'px';
      this.circleCrash(balls.index); // 每个小球进行碰撞检测
    }, 25);
  }
}