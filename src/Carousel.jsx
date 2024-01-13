const Carousel=({steps})=>{
    if(steps===0){
        return(<img src="src/images/Shivi-1.jpeg"/>)
    }
    else if(steps===1){
        return(<img src="src/images/Shivi-2.jpeg"/>)
    }
    else{
        return(<img src="src/images/Shivi-3.jpeg"/>)
    }
}
export default Carousel
