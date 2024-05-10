const target=(()=> {
        const c=document.getElementsByClassName("cursor-pointer")
        for (let i = 0; i < c.length; i++) {
            const ele=c[i];
            if(ele.innerHTML.includes("我要报名")){
                console.log("已找到目标元素!");
                ele.disabled=false;
                return ele;
            }
        }
    }
)();
const start=(()=>{
    const d=document.getElementsByClassName("text-[14px] text-[#666]")[0]
    const t=document.getElementsByClassName("text-[24px] text-[#434447] font-bold")[0]
    const time=new Date(d.innerHTML+t.innerHTML);
    console.log("已找到目标时间: "+time)
    return time.getTime();
})()
let cd=-1;
setInterval(()=>{
    const now=new Date().getTime();
    if(now>=start&&now >= cd){
        cd=now+3000;
        console.log("时间到，开始点击!")
        target.click();
    }
    console.log("剩余时间: "+Math.floor((start-now)/1000)+"s")
},110)
