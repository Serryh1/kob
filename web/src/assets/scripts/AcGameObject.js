import {last} from "eslint-plugin-vue/lib/utils/indent-utils";

const AC_GAME_OBJECTS = [];

export class AcGameObject{
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }
    start(){ //只执行一次

    }
    update(){  // 每帧执行一次，除第一帧外

    }

    on_destory(){  // 删除之前执行

    }

    destory(){
        this.on_destory();
        for(let i in AC_GAME_OBJECTS){   // 下标
            const obj = AC_GAME_OBJECTS[i];
            if(obj === this){
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; // 上一次执行的时刻

const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS){  // 值
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else{
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step);
}
requestAnimationFrame(step)