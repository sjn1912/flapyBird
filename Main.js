import { ResourceLoader } from "./js/base/ResourceLoader.js";

export class Main{
  constructor(){
    console.log("Main执行了");
    // 获取canvas
    this.canvas = document.getElementById('game');
    this.ctx = this.canvas.getContext('2d');
    // 初始化资源加载器
    this.loader = new ResourceLoader();
    console.log(this.loader);
    let bg = this.loader.map.get('background');
    bg.onload=()=>{
      this.ctx.drawImage(bg,0,0,bg.width,bg.height,0,0,375,667);
    }
  }
}