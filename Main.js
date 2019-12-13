import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { DataStore } from "./js/base/DataStore.js";

export class Main{
  constructor(){
    console.log("Main执行了");
    // 获取canvas
    this.canvas = document.getElementById('game');
    this.ctx = this.canvas.getContext('2d');
    // 初始化资源加载器
    this.loader = new ResourceLoader();

    this.dataStore = DataStore.getInstance();
    // console.log(this.loader);
    // let bg = this.loader.map.get('background');
    // bg.onload=()=>{
    //   this.ctx.drawImage(bg,0,0,bg.width,bg.height,0,0,375,667);
    // }
    this.loader.onLoaded(map=>this.onResourcesLoaded(map));
  }

  //定义资源加载成功以后调用的方法
  onResourcesLoaded(map){
    this.dataStore.map=map;
  }
}