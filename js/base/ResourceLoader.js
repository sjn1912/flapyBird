import { Resources } from "./Resources.js";
/**
 * 资源加载器
 * 保证canvas是在图片资源加载成功之后才开始渲染
 */
export class ResourceLoader{
  constructor(){
    // 获取图片路径
    this.map = new Map(Resources);
    console.log(this.map);
    //遍历map集合,将其每一个value替换为图片对象
    for(let[key,val] of this.map){
      const image = new Image();
      image.src=val
      this.map.set(key,image);//替换原来的值
    }
    
  }
}